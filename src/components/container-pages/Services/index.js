import React from 'react';

import Header from '../../Header';
import Footer from '../../Footer';
import HoveringBike from './HoveringBike';
import './style.css';
import DisplayGrid from './DisplayGrid';
import { services } from '../../../data';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Need help getting your bike back on the road?',
      heading:
        'Click on the bike where you need service or choose from the menu below.',
      description: null,
      star: null,
      subService: null,
      index: null,
      button: []
    };
  }

  displayPost = (index, test) => {
    if (index) {
      if (index.target) {
        index = index.target.id;
      }
      if (test) {
        this.setState({
          button: []
        });
      }
      console.log(index);
      let service = services[index];
      this.setState({
        index: index,
        title: service.title,
        heading: service.heading,
        description: service.description,
        star: service.star,
        subService: service.subService
      });
    }
  };

  handleMouseClick = e => {
    if (e.target.className === 'wheel' || e.target.className === 'wheel2') {
      this.setState({
        title: 'Wheel',
        heading: 'Which Part of the Wheel?',
        button: [{ title: 'FlatFix', id: 3 }, { title: 'Wheel', id: 17 }],
        description: null,
        star: null,
        subService: null
      });
    } else if (e.target.className === 'fork') {
      this.setState({
        title: 'Fork',
        heading: 'Tell me more about what you need?',
        button: [
          { title: 'Install Fork', id: 6 },
          { title: 'Fork Repair', id: 7 }
        ],
        description: null,
        star: null,
        subService: null
      });
    } else if (e.target.className === 'head-tube') {
      console.log(services[e.target.id]);
      this.setState({
        title: services[e.target.id].title,
        heading: services[e.target.id].heading,
        button: null,
        description: null,
        star: null,
        subService: null
      });
    } else if (e.target.className === 'crank') {
      this.setState({
        title: null,
        heading: 'Tell me more about what you need?',
        button: [
          { title: 'Crank', id: 9 },
          { title: 'Chain Rings', id: 13 },
          { title: 'Chain', id: 14 },
          { title: 'Derailleur', id: 15 }
        ],
        description: null,
        star: null,
        subService: null
      });
    } else if (e.target.className === 'handle-bar') {
      this.setState({
        title: null,
        heading: 'Tell me more about what you need?',
        button: [
          { title: 'Handle Bars', id: 19 },
          { title: 'Grips and Bar Tape', id: 20 }
        ],
        description: null,
        star: null,
        subService: null
      });
    } else if (e.target.className === 'cassette') {
      this.setState({
        title: null,
        heading: 'Tell me more about what you need?',
        button: [
          { title: 'Cassette', id: 11 },
          { title: 'Derailleur', id: 19 }
        ],
        description: null,
        star: null,
        subService: null
      });
    } else if (
      e.target.className === 'chain1' ||
      e.target.className === 'chain2'
    ) {
      this.setState({
        title: null,
        heading: 'Tell me more about what you need?',
        button: [{ title: 'Chain Rings', id: 13 }, { title: 'Chain', id: 14 }],
        description: null,
        star: null,
        subService: null
      });
    }
  };

  clearDailyPost = () => {
    this.setState({
      post: '',
      topicPost: '',
      datePost: ''
    });
  };

  displaysubServices = () => {
    if (this.state.subService) {
      this.state.subService.map(cur => {
        return <li>{cur}</li>;
      });
    }
  };

  render() {
    let { title, heading, description, star, subService, button } = this.state;
    return (
      <div>
        <Header />
        <div className="service-title-container">
          <h1 className="service-title">
            Click the part of the bike that needs wrenching or choose from the
            menu below.
          </h1>
        </div>
        <div className="service-display-container">
          <HoveringBike handleMouseEnter={this.handleMouseClick} />
          <div className="service-display">
            <h2>{title}</h2>
            <h3>{heading}</h3>
            <p>{description}</p>
            <ul className="subService">
              {subService
                ? subService.map((cur, index) => {
                    return <li key={index}>{cur}</li>;
                  })
                : null}
            </ul>
            <ul className="star-list">
              {star
                ? star.map((cur, index) => {
                    return (
                      <li className="star" key={index}>
                        {cur}
                      </li>
                    );
                  })
                : null}
            </ul>
            <div className="menu-button-container">
              {button
                ? button.map(cur => {
                    return (
                      <button
                        id={cur.id}
                        onClick={e => this.displayPost(e, false)}
                        className="service-button"
                      >
                        {cur.title}
                      </button>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <DisplayGrid onTouch={this.displayPost} />
        <Footer />
      </div>
    );
  }
}

export default Services;
