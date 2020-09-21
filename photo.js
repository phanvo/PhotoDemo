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

class MattedPhoto extends Photo{
    constructor(width, height, color){
        super(width, height);
        this.color = color;
    }

    price(){
        return super.price() + 10;
    }

    toString(){
        return "This is a " + this.width + " by " + this.height + " matted " + this.color + " photo and it costs " + this.price();
    }
}

class FramedPhoto extends Photo{
    constructor(width, height, material, style){
        super(width, height);
        this.material = material;
        this.style = style;
    }

    price(){
        return super.price() + 25;
    }

    toString(){
        return "This is a " + this.width + " by " + this.height + " " + this.material + " framed photo. The style is " 
                                                                                + this.style + " and it costs " + this.price();
    }
}

export { Photo, MattedPhoto, FramedPhoto };