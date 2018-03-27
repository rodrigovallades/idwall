import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDogs } from '../../modules/feed'
import Dog from '../../components/DogCard'

import store from '../../store'

import './feed.css'

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDog: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const userToken = store.getState().auth.userToken;
    if (userToken) {
      this.props.getDogs(userToken)
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <Dog></Dog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDogs
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
