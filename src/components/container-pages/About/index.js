import React from 'react';

import GoogleApiWrapper from '../../features/googleMaps';

import storefront from '../../../pics/store.jpg';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.css';

const About = () => {
  return (
    <div className="about">
      <Header />
      <img className="about-main-pic" src={storefront} />
      <div className="google-map-container" />
      <div className="about-body-container">
        <h2 class="about-title">58 Degrees North</h2>
        <div className="p-container">
          <p>
            Whether you’re just visiting our beautiful Emerald Isle for a short
            stay, or have been a long time resident for years – 58 Degrees North
            is considered the central adventuring office for Kodiak. We
            specialize in Bicycles, Kayaks, Moto Gear, Surfing and all the
            accessories you need to get you “there and back again”. Our shop has
            been a family owned business since the 1960’s when it was formerly
            known as “Elkay’s”. The customer service and expertise found here is
            paralleled by few and surpassed by none.
          </p>
          <p>
            Offering only the finest bike brands in the world, we currently deal
            with Specialized, Santa Cruz, Intense, Transition, Pivot, DeVinci,
            Kona, Surly, and Cogburn. Furthermore we are the ONLY authorized
            service center in Alaska for Fox Racing Shocks as well as Rock Shox
            Suspension systems. This is also one of the only shops in the state
            of Alaska that offers comprehensive suspension and linkage rebuilds
            or Pro Wheel Builds. You can also find the highest end component
            upgrades here from Chris King, Profile Racing, RaceFace, Shimano,
            Sram, Mavic, E13, and much much more.
          </p>
          <p>
            On top of all of that we stay true to and never forget our BMX
            roots, which run deep at what is easily one of the best BMX shops
            not just in the state, but in the world. For complete bikes you can
            find a full range of Sunday!, F-it, WeThePeople, and FlyBikes. But
            don’t forget the very best that BMX has to offer in parts from
            Profile Racing, Odyssey, S&M, and FBM. When it comes to BMX, we
            strive to be the absolute best anywhere.
          </p>
          <p>
            Local riding gear options got you down? No worries, my friend – here
            you can find Helmets, Gloves, Jerseys, Pants, Moto Boots, and
            kick-ass casual gear from Fox Racing, Troy Lee Designs, POC, O’Neal
            Racing, Pro-tec and others. Gear up tough, the rocks on the trails
            are harder than your brainium.
          </p>
          <p>
            Sometimes the island encourages us to step off of our two-wheeled
            steeds and climb into, or onto our ocean. We just have to enjoy
            everything nature throws at us and a wonderful stable of kayak and
            surfboard options are at your disposal as well. We currently support
            and deal with Delsyk, Northwest, Seda, and Wilderness Systems
            Kayaks. Plus the best gear to go along with our boats; Werner
            Paddles and a full complement of NRS safety gear. And we absolutely
            love our rack full of fresh, hand shaped Rusty Surfboards made in
            the good old US of A. But watch out, that water is cold grab
            yourself an Xcel wetsuit or a kokatat drysuit from us before you
            jump in.
          </p>
          <p>
            You can find us in the little blue shop at 1231 Mill Bay Road, give
            us a call at (907)486-BIKE or shoot us an email at
            58northkodiak@gmail.com Thanks for checking us out, we can’t wait to
            help you get out and Rally on the Rock.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
