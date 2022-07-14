1//
function getAreaOfCircle (radius) {
    const area =(radius*radius*Math.PI);
    return area;
}

console.log(getAreaOfCircle(8));


2//
function getCircumferenceOfCircle (radius) {
    const circumference = (2*Math.PI*radius);
    return circumference;
}
 console.log(getCircumferenceOfCircle("4"));


3//
function getAreaOfSquare (side) {
    const area = (side*side);
    return area;
}

console.log(getAreaOfSquare(4));

4//
function getAreaOfTriangle (base, height){
    const area = (base*height)/2;
    return area;
}

console.log(getAreaOfTriangle(4, 2));