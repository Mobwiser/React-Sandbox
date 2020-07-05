import Location from '../screens/location/location.screen';

const ROUTERS = [
  {
    path: '/',
    component: Location,
    exact: true,
    name: 'Location',
    hideMenu: true,
  },
];

export default ROUTERS;
