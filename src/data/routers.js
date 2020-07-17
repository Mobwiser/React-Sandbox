import Location from '../screens/location/location.screen';
import Gallery from '../screens/gallery/gallery.screen';
import ModalScreen from '../screens/modal/modal.screen';

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
  {
    path: '/modal-component',
    component: ModalScreen,
    exact: true,
    name: 'Modal Component',
  },
];

export default ROUTERS;
