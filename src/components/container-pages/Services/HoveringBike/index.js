import React from 'react';
import bike from '../../../../pics/bike.png';
import './style.css';

const HoveringBike = props => {
  return (
    <div className="hovering-bike-container">
      <img className="hover-bike" src={bike} />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="wheel"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="wheel2"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="fork"
      />
      <div
        id="5"
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="head-tube"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="crank"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="handle-bar"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="cassette"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="chain1"
      />
      <div
        onClick={e => {
          props.handleMouseEnter(e);
        }}
        className="chain2"
      />
    </div>
  );
};

export default HoveringBike;
