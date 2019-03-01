import React from 'react';
import { connect } from 'react-redux';

import Header from '../../Header';
import Footer from '../../Footer';
import FullWidthPic from '../../features/full-width-pic';
import HoveringSnippet from '../../features/hovering-snippet';
import StaticImage from '../../features/StaticImage';
import './style.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondBackground: false
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', this.showImage);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', () => this.showImage);
  }

  showImage = () => {
    let img = document.getElementById('full-pic');
    //if clause is necessary because this function is not unmounting. Why not?
    if (img) {
      let coords = img.getBoundingClientRect();

      if (coords.y <= 0) {
        this.setState({
          secondBackground: true
        });
      } else {
        this.setState({
          secondBackground: false
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <StaticImage secondBackground={this.state} />
        <div
          style={{ 'margin-top': this.props.height }}
          className="body-container"
        >
          <p className="paragraph">
            <span className="paragraph-start">
              Welcome to 58 Degrees North –{' '}
            </span>
            the premier adventure outfitter for Kodiak Island, Alaska. Here
            you’ll find the family that outfits the most adventurous souls to be
            found on or around the island. We cater to cyclists, surfers,
            kayakers, bmxers, and general outdoor badasses. Make yourselves at
            home, ask us some questions, and let’s go rally!
          </p>
          <HoveringSnippet />
          <FullWidthPic />
        </div>
        <div className="promotional" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    height: state.setHeight.height
  };
};

export default connect(mapStateToProps)(HomePage);
