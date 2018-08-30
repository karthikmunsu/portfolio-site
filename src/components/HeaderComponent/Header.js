import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  state = {
    name: '',
    customName: '<karthik>',
    counter: 0,
  }
  
  componentDidMount() {
    const str = this.state.customName;
    setInterval(() => {
      this.setState({
        name: str.substring(0, this.state.counter),
        counter: this.state.counter !== this.state.customName.length ? this.state.counter+=1 : 0
      })
    }, 500); //incrementing the counter for fetching the character from name on the custom name.
  }

  render() {
    return (
      <div className="header">
        <span className="my-name">{ this.state.name }</span>
      </div>
    );
  }
}
