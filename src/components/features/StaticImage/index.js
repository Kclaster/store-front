import React from 'react';
import { connect } from 'react-redux';
import { setHeight } from '../../redux/actions';

import pic from '../../../pics/biker2.png';
import secondpic from '../../../pics/cropped pics/secondMain.jpg';
import './style.css';

class StaticImage extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      secondBackground: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setHeight);
    this.imageRef.current.addEventListener('load', this.setHeight);
  }

  componentWillReceiveProps(props) {
    this.setState({
      secondBackground: this.props.secondBackground
    });
  }

  additionalHeight = height => {
    if (height >= 1050) {
      return 80;
    } else if (height >= 850) {
      return 100;
    } else if (height < 870 && height >= 550) {
      return 120;
    } else if (height < 550 && height >= 350) {
      return 140;
    } else {
      return 150;
    }
  };

  setHeight = () => {
    if (this.imageRef.current) {
      const height = this.imageRef.current.clientHeight;
      this.props.setHeight(height + this.additionalHeight(height));
    }
  };

  render() {
    console.log(this.state.secondBackground.secondBackground);
    return (
      <div>
        <img
          ref={this.imageRef}
          className={`static-image ${
            this.state.secondBackground.secondBackground ? 'hide' : 'show'
          }`}
          src={pic}
        />
        <img
          ref={this.imageRef}
          className={`static-image ${
            !this.state.secondBackground.secondBackground ? 'hide' : 'show'
          }`}
          src={secondpic}
        />
        <h1
          className={`title ${
            this.state.secondBackground.secondBackground ? 'hide' : null
          }`}
          id="main-title-1"
        >
          58 Degrees
        </h1>
        <h1
          className={`title ${
            this.state.secondBackground.secondBackground ? 'hide' : null
          }`}
          id="main-title-2"
        >
          North
        </h1>
      </div>
    );
  }
}

export default connect(
  null,
  { setHeight }
)(StaticImage);
