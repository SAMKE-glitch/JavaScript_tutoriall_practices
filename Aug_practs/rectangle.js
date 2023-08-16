#!/usr/bin/node
// declaring a class called rectangle and constructing it
// A class can be characterized by 3 aspects
// 1- Kind: getter, setter, method or field
// 2- Location: static or instance
// 3- Visibility: Public or private


class Rectangle {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }
  // getter
  get area() {
    return this.calcArea();
  }
  // area method
  calcArea() {
    return this.height * this.width
  }
}
const sam = new Rectangle(10, 20);
console.log(sam.calcArea());
