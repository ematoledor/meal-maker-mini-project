// Mini Javascript project from codecademy done in terminal. (About Objects and methods.)

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers() {
   return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    this._courses.mains = mains;

  },
  get desserts() {
    return this._courses.desserts;  
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price: dishPrice  
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse(['appetizers']);
    const main = this.getRandomDishFromCourse(['mains']);
    const dessert = this.getRandomDishFromCourse(['desserts']);
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'hummus', 4.00);
menu.addDishToCourse('appetizers', 'guac', 4.00);
menu.addDishToCourse('appetizers', 'hidden', 8.00);

menu.addDishToCourse('mains', 'meat', 15.00);
menu.addDishToCourse('mains', 'fish', 14.00);
menu.addDishToCourse('mains', 'other', 10.00);

menu.addDishToCourse('desserts', 'ice cream', 5.00);
menu.addDishToCourse('desserts', 'chocolate', 2.00);
menu.addDishToCourse('desserts', 'arroz con leche', 7.00);

const meal = menu.generateRandomMeal();
const meal2 = menu.generateRandomMeal();
const meal3 = menu.generateRandomMeal();
console.log(meal);
console.log(meal2);
console.log(meal3);