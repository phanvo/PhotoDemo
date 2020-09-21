import { Photo, MattedPhoto, FramedPhoto } from './photo.js';

var a = new Photo();
var b = new Photo(10, 12);
var c = new Photo(110, 112);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());

a = new MattedPhoto();
b = new MattedPhoto(10, 12);
c = new MattedPhoto(110, 112);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());

a = new FramedPhoto();
b = new FramedPhoto(10, 12);
c = new FramedPhoto(110, 112);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());