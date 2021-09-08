import React, { Component } from 'react';
import Display from '../components/Display';

export default class RandomColor extends Component {
    state = {
      color: 'teal'
    }
    
    doRandomColorChange = () => {
      const colors = ['teal',
        'magenta',
        'blue',
        'black',
        'aqua',
        'orange',
        'beige',
        'gray',
        '#d498b9',
        'pink'
      ];
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      this.setState({ color: colors[randomColorIndex] });
    }

    componentDidMount() {
      setInterval(() => this.doRandomColorChange(), 1000);
    }

    render() {
      
      return (
        <Display color={this.state.color}/>
      );
    }
}
