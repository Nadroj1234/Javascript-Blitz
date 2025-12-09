// getters and setters provide a safer way to update properties of an object.

class Rectangle {
  constructor(width, height) {
    //while these look like standard assignment, they are actually using the setters
    this.width = width;
    this.height = height;
  }
  //setters - used to validate values stored in properties
  set width(newWidth) {
    if (newWidth > 0) this._width = newWidth;
    else {
      console.error("width must be a positive number - setting to 0");
      this._width = 0;
    }
  }
  set height(newHeight) {
    if (newHeight > 0) this._height = newHeight;
    else {
      console.error("height must be a positive number - setting to 0");
      this._height = 0;
    }
  }

  //getters - used to get values back
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  // add a computed property:
  get area() {
    return this.width * this.height;
  }
}

//const rect = new Rectangle(25, "Dakota"); //using a setter will help prevent this madness!
const rect = new Rectangle(25, 2); //using a setter will help prevent this madness!
console.log("rectangle Width: ", rect.width);
console.log("rectangle Height: ", rect.height);
console.log("area: ", rect.area);
console.log(rect);

class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  set fname(newFname) {
    if (typeof newFname === "string" && newFname.length > 0) {
      this._fname = newFname;
    } else {
      console.error("fname must be a string one character or more");
    }
  }

  set lname(newLname) {
    if (typeof newLname === "string" && newLname.length > 0) {
      this._lname = newLname;
    } else {
      console.error("lname must be a string one character or more");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get fname() {
    return this._fname;
  }
  get lname() {
    return this._lname;
  }
  get age() {
    return this._age;
  }
}

const tony = new Person("Antonio", "Spencer", -5); //doesn't accept age
const matt = new Person("Matt", 12, 25);
