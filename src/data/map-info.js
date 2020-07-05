export default {
  mapCenter: {
    lat: 38.836785,
    lng: -9.191209,
  },
  supermarketLocation: {
    lat: 38.6642226,
    lng: -9.07651,
  },
  airportLocation: {
    lat: 38.7809542,
    lng: -9.1319,
  },
  hospitalLocation: {
    lat: 38.7491627,
    lng: -9.17681,
  },
  options: maps => {
    return {
      streetViewControl: true,
      scaleControl: true,
      fullscreenControl: false,
      gestureHandling: 'greedy',
      disableDoubleClickZoom: true,
      styles: [
        {
          featureType: 'all',
          stylers: [{ visibility: 'on' }],
        },
      ],
      minZoom: 11,
      maxZoom: 18,
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.BOTTOM_CENTER,
        mapTypeIds: [
          maps.MapTypeId.ROADMAP,
          maps.MapTypeId.SATELLITE,
          maps.MapTypeId.HYBRID,
        ],
      },
      zoomControl: true,
      clickableIcons: true,
    };
  },
  apiKey: '',
};
