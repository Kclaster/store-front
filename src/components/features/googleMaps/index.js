// //Why is this broken.https://developers.google.com/maps/documentation/javascript/directions#DirectionsRequests

// import React, { Component } from 'react';
// import {
//   google,
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   DirectionsRenderer,
//   directionsService,
//   directionsDisplay,
//   Map,
//   GoogleApiWrapper,
//   InfoWindow,
//   Marker
// } from 'google-maps-react';

// const mapStyles = {
//   width: '40%',
//   height: '100%',
//   zIndex: 9,
//   position: 'relative'
// };

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };

//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   };

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   initMap() {
//     var directionsService = new google.maps.DirectionsService();
//     var directionsDisplay = new google.maps.DirectionsRenderer();
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 7,
//       center: { lat: 41.85, lng: -87.65 }
//     });
//     directionsDisplay.setMap(map);

//     var onChangeHandler = function() {
//       this.calculateAndDisplayRoute(directionsService, directionsDisplay);
//     };
//     document
//       .getElementById('start')
//       .addEventListener('change', onChangeHandler);
//     document.getElementById('end').addEventListener('change', onChangeHandler);
//   }

//   calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     directionsService.route(
//       {
//         origin: document.getElementById('start').value,
//         destination: document.getElementById('end').value,
//         travelMode: 'DRIVING'
//       },
//       function(response, status) {
//         if (status === 'OK') {
//           directionsDisplay.setDirections(response);
//         } else {
//           window.alert('Directions request failed due to ' + status);
//         }
//       }
//     );
//   }

//   componentDidMount() {
//     this.initMap();
//   }

//   render() {
//     if (google) {
//       console.log(google);
//     }
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{ lat: -1.2884, lng: 36.8233 }}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           name={'Kenyatta International Convention Center'}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAxwzNAzv-uep8ajAQLdOSNNkwFenpkieM'
// })(MapContainer);
