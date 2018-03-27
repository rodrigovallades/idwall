import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getDogs } from '../../modules/feed'
import { history } from '../../store'
import Dog from '../../components/DogCard'

import store from '../../store'

import './feed.css'

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category ? this.props.category : 'husky',
      selected: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { userToken } = store.getState().auth;
    const { category } = this.state;
    if (userToken) {
      this.props.getDogs(userToken, category)
    } else {
      history.push('/');
    }
  }

  renderDogs() {
    const dogs = this.props.dogs.dogs.list || [];
    return dogs.map((dog, index) => (
      <Dog image={dog} key={index} />
    ))
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <ul className='menu'>
          <li><Link to="/husky">Husky</Link></li>
          <li><Link to="/labrador">Labrador</Link></li>
          <li><Link to="/hound">Hound</Link></li>
          <li><Link to="/pug">Pug</Link></li>
        </ul>
        <div className='dogs'>
          {this.renderDogs()}
        </div>
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
