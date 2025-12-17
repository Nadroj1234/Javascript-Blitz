class Character {
  constructor(name, level, health) {
    this._name = String(name);
    this._level = Number(level);
    this._health = Number(health);
  }

  describe() {
    return `${this._name} (Level: ${this._level}, Health: ${this._health})`;
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    if (newHealth < 0) {
      console.error("Error: health must be between 0 and 100. ");
    }
    if (newHealth > 100) {
      console.error("Error: health must be between 0 and 100. ");
    } else {
      return (this._health = newHealth);
    }
  }
}

class Warrior extends Character {
  constructor(name, level, health, weaponType) {
    super(name, level, health);
    this.weaponType = weaponType;
    this.name = name;
    this.level = level;
    this.health = health;
  }

  describe() {
    return `${this.name} the Warrior (Level ${this.level}, Health ${this.health}, Weapon: ${this.weaponType})`;
  }
}

class Mage extends Character {
  constructor(name, level, health, element) {
    super(name, level, health);
    this.element = element;
    this.name = name;
    this.level = level;
    this.health = health;
  }

  describe() {
    return `${this.name} the Mage (Level ${this.level}, Health ${this.health}, Weapon: ${this.element})`;
  }
}

class Party {
  constructor(name) {
    this.name = String(name);
    this.members = [];
  }

  addMember(character) {
    if (character instanceof Character) {
      this.members += character;
    } else {
      console.error("Error: only Character instances can be added to a Party.");
    }
  }

  listMmebers(character) {
    console.log(character.describe());
  }

  averageLevel() {
    if ((this.members = 0)) {
      return 0;
    } else pass;
  }
}

chr1 = new Character("Bowser", 3, 25);
chr2 = new Character("Mario", 1, 75);
chr3 = new Character("Luigi", 12, 35);

console.log(chr1);
console.log(chr2);
console.log(chr3);

console.log(chr1.describe());
console.log(chr2.describe());
console.log(chr3.describe());

chr1.health = 120;

war1 = new Warrior("Thor", 3, 25, "Sword");
mag1 = new Mage("Sage", 6, 12, "Wand");

console.log(war1.describe());
console.log(mag1.describe());

chr4 = new Character("Wario", 2, 67);
war4 = new Warrior("Loki", 8, 90, "Axe");
mag4 = new Mage("Nova", 24, 87, "Super Wand");

console.log(chr4.describe());
console.log(war4.describe());
console.log(mag4.describe());

party = new Party(war4, mag4);

console.log(party.listMmebers());
