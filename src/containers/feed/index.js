import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import qs from 'query-string'

import * as localStorageState from '../../services/localState.service'
import { getDogs, getPicture } from '../../modules/feed'
import store, { history } from '../../store'
import Dog from '../../components/DogCard'

import './feed.css'

class Feed extends Component {
  constructor(props) {
    super(props);

    this.params = {}
    this.state = {
      category: this.props.category
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const persistedState = localStorageState.load()
    const { userToken } = store.getState().auth;
    let category = '';

    this.params = qs.parse(this.props.location.search);

    if (this.props.category) {
      category = this.props.category ? this.props.category : this.state.category
    } else {
      category = persistedState.dogs && persistedState.dogs.dogs.category ? persistedState.dogs.dogs.category : 'husky';
    }

    this.setState({ category });


    if (userToken) {
      this.props.getDogs(userToken, category)
    } else {
      history.push('/');
    }
  }

  openPicture(id) {
    this.props.getPicture(id)
    history.push(`/feed?category=${store.getState().dogs.dogs.category}&id=${id}`);
  }

  renderSelectedDog() {
    if (this.params.category && this.params.id) {
      return (
        <div>
          <p>category: {this.params.category}</p>
          <p>id: {this.props.selected}</p>
        </div>
      )
    }
  }

  renderDogs() {
    const dogs = (this.props.dogs && this.props.dogs.dogs.list) ?  this.props.dogs.dogs.list : [];

    return dogs.map((dog, index) => {
      let id = dog.split('/')
      id = id[id.length-1].split('.')
      id = id[0].split('_')
      id = id[id.length-1]
      return (
        <Dog image={dog} key={index} id={id} onClick={() => this.openPicture(id)}/>
      )
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        {this.renderSelectedDog()}
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
  dogs: state.dogs,
  selected: state.dogs.selected
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDogs,
  getPicture
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
