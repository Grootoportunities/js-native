class DeleteUserAction {
  constructor(userID) {
    this.type = "DELETE-USER";
    this.userID = userID;
  }
}

const action = new DeleteUserAction(1);

console.log(action);

class User {
  #name;

  constructor(name, age, country) {
    this.#name = name;
    this.age = age;
    this.country = country;
    this.counter = 0;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName !== "Daniil") throw new Error("You can only name me as Daniil");

    this.#name = newName;
  }

  hello() {
    this.counter++;

    console.log(
      `Hello! I'm ${this.name} from ${this.country}. I'm ${this.age} years old.`,
    );
  }
}

const daniil = new User("Daniil", 22, "Belarus");
const vlad = new User("Vlad", 42, "Italy");

daniil.hello();
vlad.hello();
console.log(daniil.counter);
console.log(vlad.counter);
daniil.hello();
console.log(daniil.counter);
console.log(vlad.counter);
vlad.name = "Daniil";

console.log(vlad.name);

// vlad.name = "Vlad";

class Coder extends User {
  constructor(name, age, country, tech) {
    super(name, age, country);

    this.tech = tech;
  }

  toCode() {
    console.log(
      `I am ${this.name} and here is my ${this.tech} what i coded: console.log("Hello World!")!!!!`,
    );
  }

  starper() {
    super.hello();

    console.log(`Go away!!! I'm ${this.name}` + " " + super.name);
  }
}

const daniilCoder = new Coder("Daniil Coder", 22, "Belarus", "JavaScript");

daniilCoder.toCode();
daniilCoder.starper();
