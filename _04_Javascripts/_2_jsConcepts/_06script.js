// classes in Js:-
/*
Js has no concept of destructor bcs it do memory management automatically.
*/
class rectangle{
    constructor(width, height, color){
        this.width  = width;
        this.height = height;
        this.color = color;
    }

    area(){
        return this.width * this.height;
    }

    paint(){
        console.log(`rectangle color is ${this.color}`);
        // console.log("rectange color is " +this.color);
        // console.log(this);
        //this variable print all the data of object in constructor.(bcs it have access of data).
    }
}
const rect = new rectangle(3, 4, "Blue"); //instance of the rectangle class or object of the rectangle class.
console.log(rect.width)
console.log(rect.area());
rect.paint();

const t = new rectangle();
t.paint();
//It will print undefined here not show compile time error. If we don't pass the parameter.
//In case of typescript it will show compilation error.
//javascript is loosely type therefore we cannot vary about access modifier
//We can think of them in Typescript.

//Another way without classes
//Object datatype we use
let shape = {
    width: 34,
    height: 76,
    color: "Green"
}

function shapeInfo(shape){
    console.log(`width, height and color are: ${shape.width}, ${shape.height}, ${shape.color}`);  
}

shapeInfo(shape);

//Why need class bcs Above(Object datatype) not have concept of "inheritance" and also classes provide
//cleaner way to write the code.


//Some predefined classes provided by Javascript is Date, Map, promise etc.

//Js provided class
//1 Date class
const now = new Date();
console.log(now.getDate());
console.log(now.getFullYear());

//2 Map class
//It is similar to object datatype.
const map = new Map();
map.set('name', 'Subhash');
map.set('id', 34);
console.log(map.get('id'));


