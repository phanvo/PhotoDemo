class Photo {
    constructor(width = 8, height = 10) {
        this.width = width;
        this.height = height;
    }

    price() {
        let value = 0;
        if (this.width == 8 && this.height == 10){
            value = 4;
        } else if (this.width == 10 && this.height == 12){
            value = 6;
        } else {
            value = 10;
        }

        return value;
    }

    toString(){
        return "This is a " + this.width + " by " + this.height + " photo and it costs " + this.price();
    }
  }

var a = new Photo();
var b = new Photo(10, 12);
var c = new Photo(110, 112);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());