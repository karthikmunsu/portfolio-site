import React from 'react';
import './Home.css';
import logo  from '../.././logo.svg';

export default class Home extends React.Component {
  componentDidMount() {
    // var ctx = document.getElementById('myCanvas');
    // var c = ctx.getContext('2d');
    // c.moveTo(0, 0);
    // c.lineTo(500, 500);
    // c.stroke();

    // c.beginPath();
    // c.arc(150, 150, 150, 0, 2 * Math.PI);
    // c.stroke();

    // c.fontSize = "200px Arial";
    // c.strokeText("Hello World!", 180, 10);
    // console.log(logo);
    // const img = document.getElementById('image');
    // c.drawImage(img, 10, 10);

    //reversing the string without using the inbuilt functions.
    const name = 'madam';
    const a = Array.prototype.reduce.call(name, function reverse(previous, current) {
      console.log(current, previous);
      return current + previous;
    }, '');
    console.log(a === name); // to reverse the string without using the inbuilt functions.
  }

  render() {
    return (
      <div className="home">
        Home component
        {/* <canvas height="400" width="400" style={{border: '1px solid #000000'}} id="myCanvas"></canvas> */}
        {/* <img src={logo} alt="image" id="image" /> */}
        <div className="content">
          <div>content section</div>
        </div>
      </div>
    );
  }
}