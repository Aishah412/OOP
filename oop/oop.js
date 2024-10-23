// creating a class
class Animal{
constructor(eyes,legs,isAwake,isMoving){
    this.eyes = eyes,
    this.legs = legs,
    this.isAwake = isAwake,
    this.isMoving = isMoving,
}

}
let cow = new Animal()// instantiating a class

const cat1 = new Animal(2,4,true, false)
console.log(cat1)