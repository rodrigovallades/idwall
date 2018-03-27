import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../modules/login'

import './signup.css'

class Signup extends Component {
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
    )
  }
}

const mapStateToProps = state => ({
  userToken: state.auth.userToken
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
