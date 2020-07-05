import React, { Component, Fragment } from 'react';
import Constants from '../../data/map-info';
import GoogleMapReact from 'google-map-react';

let directionsDisplay = null;
let directionsService = null;

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMarker: {
        ...Constants.mapCenter,
        icon: <img src="img/logo-menu.png" alt="main-marker" className="h-8" />,
      },
      additionalMarkers: [],
    };
  }

  onLocationClick({ map, maps, destination, icon }) {
    this.renderDirections(map, maps, destination);
    this.setState({
      additionalMarkers: [
        {
          ...destination,
          icon,
        },
      ],
    });
  }

  renderAdditionalMarkers() {
    const { additionalMarkers } = this.state;

    return additionalMarkers.map(marker => {
      return (
        <Fragment lat={marker.lat} lng={marker.lng}>
          {marker.icon}
        </Fragment>
      );
    });
  }

  renderMainMarker() {
    const { mainMarker } = this.state;

    return (
      <h1 className="text-white" lat={mainMarker.lat} lng={mainMarker.lng}>
        {mainMarker.icon}
      </h1>
    );
  }

  renderDirections(map, maps, selectedLocation) {
    if (!directionsDisplay) {
      directionsService = new maps.DirectionsService();
      directionsDisplay = new maps.DirectionsRenderer();
    }

    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({
      polylineOptions: {
        strokeWeight: 6,
        strokeOpacity: 1,
        strokeColor: '#f5ca3f',
      },
      suppressMarkers: true,
    });

    let request = {
      origin: '38.836785,-9.191209',
      destination: selectedLocation,
      travelMode: 'DRIVING',
    };
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections({ routes: [] });
        directionsDisplay.setDirections(result);
      }
    });
  }

  render() {
    return (
      <div className="lg:h-full md:h-full w-full flex lg:flex-row">
        <div className="w-full h-full md:overflow-auto mt-16 md:mt-0">
          <div className="w-full h-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: Constants.apiKey }}
              defaultZoom={18}
              center={Constants.mapCenter}
              options={Constants.options}
              zoom={18}
              onGoogleApiLoaded={({ map, maps }) => {
                this.setState({ map, maps });
              }}
              yesIWantToUseGoogleMapApiInternals={true}
            >
              {this.renderMainMarker()}
              {this.renderAdditionalMarkers()}
            </GoogleMapReact>
          </div>
          <div className="services md:flex justify-around mt-16 md:mt-2">
            <div className="flex flex-col flex-start justify-around h-48">
              <div
                onClick={() =>
                  this.onLocationClick({
                    map: this.state.map,
                    maps: this.state.maps,
                    destination: Constants.airportLocation,
                    icon: (
                      <img
                        src="img/icones/i-plane.png"
                        alt="aeroporto"
                        className="h-8"
                      />
                    ),
                  })
                }
                className="flex w-4/5 md:w-auto m-auto min-h-fit-content"
              >
                <img
                  src="img/icones/i-plane.png"
                  alt="aeroporto"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">aeroporto</span>
                  <br />
                  15 km | 20 min
                </div>
              </div>

              <div
                onClick={() =>
                  this.onLocationClick({
                    map: this.state.map,
                    maps: this.state.maps,
                    destination: Constants.supermarketLocation,
                    icon: (
                      <img
                        src="img/icones/i-market.png"
                        alt="supermercado"
                        className="h-8"
                      />
                    ),
                  })
                }
                className="flex w-4/5 md:w-auto m-auto min-h-fit-content"
              >
                <img
                  src="img/icones/i-market.png"
                  alt="supermercado"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">supermercado</span>
                  <br />3 km | 5 min
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-start justify-around h-48">
              <div className="flex w-4/5 md:w-auto m-auto min-h-fit-content">
                <img
                  src="img/icones/i-bridge.png"
                  alt="A9 acesso"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">A9 acesso</span>
                  <br />5 km | 9 min
                </div>
              </div>

              <div
                onClick={() =>
                  this.onLocationClick({
                    map: this.state.map,
                    maps: this.state.maps,
                    destination: Constants.hospitalLocation,
                    icon: (
                      <img
                        src="img/icones/i-hospital.png"
                        alt="hospital"
                        className="h-8"
                      />
                    ),
                  })
                }
                className="flex w-4/5 md:w-auto m-auto min-h-fit-content"
              >
                <img
                  src="img/icones/i-hospital.png"
                  alt="hospital"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">hospital</span>
                  <br />
                  3.5 km | 7 min
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-start justify-around h-48">
              <div className="flex w-4/5 md:w-auto m-auto min-h-fit-content">
                <img
                  src="img/icones/i-bridge.png"
                  alt="A8 acesso"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">A8 acesso</span>
                  <br />3 km | 6 min
                </div>
              </div>

              <div className="flex w-4/5 md:w-auto m-auto min-h-fit-content">
                <img
                  src="img/icones/i-pharmacy.png"
                  alt="farmácia"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">farmácia</span>
                  <br />
                  12 km | 3 min
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-start justify-around h-48">
              <div className="flex w-4/5 md:w-auto m-auto min-h-fit-content">
                <img
                  src="img/icones/i-arrow.png"
                  alt="centro de loures"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">centro de loures</span>
                  <br />
                  3.5 km | 7 min
                </div>
              </div>

              <div className="flex w-4/5 md:w-auto m-auto min-h-fit-content">
                <img
                  src="img/icones/i-police.png"
                  alt="policia"
                  className="h-8"
                />
                <div className="ml-4">
                  <span className="font-extrabold">policia</span>
                  <br />
                  2.5 km | 5 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Location;
