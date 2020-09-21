import { Photo, MattedPhoto, FramedPhoto } from './photo.js';

var a = new Photo();
var b = new Photo(10, 12);
var c = new Photo(110, 112);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());

a = new MattedPhoto(8, 10, 'blue');
b = new MattedPhoto(10, 12, 'green');
c = new MattedPhoto(110, 112, 'black');

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());

a = new FramedPhoto(8, 10, 'silver', 'classic');
b = new FramedPhoto(10, 12, 'copper', 'medieval');
c = new FramedPhoto(110, 112, 'titan', 'modern');

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());