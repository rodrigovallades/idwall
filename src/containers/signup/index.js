import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../modules/login'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email } = this.state;    
    if (email) {
      this.props.login(email);
    }
  }

  render() {
    const { email } = this.state;
    return (

      <div>
        <h1>Signup</h1>
        <p>Signup form</p>
        <form name="form" onSubmit={this.handleSubmit}>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.auth.logged,
  logging: state.auth.logging,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
