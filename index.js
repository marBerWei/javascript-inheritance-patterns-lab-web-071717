function Point(x,y){
	this.x = x
	this.y = y
}

Point.prototype.toString = function(){
	return `${this.x.toString()}, ${this.y.toString()}`
}

function Side(length){
	this.length = length
}

function Shape(){
}

Shape.prototype.addToPlane = function(x,y){
	this.position = new Point(x,y) 
}

Shape.prototype.move = function(x,y){
	this.position = new Point(x,y)
}

//Circle

function Circle(radius){
	Shape.call(this)
	this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.diameter = function(){
	return (this.radius * 2)
}

Circle.prototype.area = function () {
  return (Math.PI * this.radius ** 2)
}

Circle.prototype.circumference = function () {
  return (2 * Math.PI * this.radius)
}

// Polygon 

function Polygon(sides){
	Shape.call(this)
	this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.perimeter = function(){
	return this.sides.map(function(x){
		return x["length"]
	}).reduce(function(sum, value){
		return sum + value
	})
}

Polygon.prototype.numberOfSides = function(){
	return this.sides.length
}

// QUADRILATERAL

function Quadrilateral(a,b,c,d){
	Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

// RECTANGLE

function Rectangle(width,height){
	Quadrilateral.call(this, width, width, height, height)
	this.width = width 
	this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.area = function(){
	return this.width * this.height
}

// SQUARE

function Square(side){
	Rectangle.call(this, side, side)
	this.side = side 
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.listProperties = function(){
	return this.area
}

// TRIANGLE 

function Triangle(a,b,c){
	Polygon.call(this,[new Side(a), new Side(b), new Side(c)])
	this.a = a 
	this.b = b
	this.c = c
}

Triangle.prototype = Object.create(Polygon.prototype)


