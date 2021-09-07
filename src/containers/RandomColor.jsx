import React, { Component } from 'react';
import Display from '../components/Display';

export default class RandomColor extends Component {
    state = {
      color: 'teal'
    }
    render() {
      return (
        <Display color={this.state.color}/>
      );
    }
}
