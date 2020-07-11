import Location from '../screens/location/location.screen';
import Gallery from '../screens/gallery/gallery.screen';

const ROUTERS = [
  {
    path: '/',
    component: Location,
    exact: true,
    name: 'Location',
  },
  {
    path: '/gallery',
    component: Gallery,
    exact: true,
    name: 'Gallery',
  },
];

export default ROUTERS;
