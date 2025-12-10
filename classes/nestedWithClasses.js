class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

// instantiate a person ogject:
let dakota = new Person(
  "dakota",
  17,
  "IDK Ave",
  "Erie",
  "United States Of America"
);
console.log(dakota);
