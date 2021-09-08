import React, { Component } from 'react';
import Display from '../components/Display';
import sorrynotsorry from '../sorrynotsorry.png';

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
export default class RandomColor extends Component {
    state = {
      color: 'teal',
      image: ''
    }
    
  doRandomColorChange = () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    if(colors[randomColorIndex] === this.state.color) {
      this.setState({ color: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
    } else { this.setState({ color: colors[randomColorIndex] }); }
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
