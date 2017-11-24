const React = require('react');
const Thumbnail = require('react-bootstrap').Thumbnail;
const Button = require('react-bootstrap').Button;

class Clock extends React.Component {
  render() {
    const style = {
      width: '100%',
      display: 'block',
      height: '50px',
      backgroundColor: '#1A75CE',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '25px',
      lineHeight: '50px',
      textAlign: 'center'
    }

    return (
      <div style={style}>{new Date().toLocaleTimeString()}</div>
    );
  }
}

module.exports = Clock;
