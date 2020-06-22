import 'bootstrap';
import '../scss/index.scss';
import facesFunction from './faces';
import lucidFunction from './lucid';

const faces = document.getElementById('facesContent');

if (faces) {
  facesFunction();
} else {
  lucidFunction();
}
