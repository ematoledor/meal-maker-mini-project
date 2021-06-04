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
  }
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse(['appetizers']);
    const mains = this.getRandomDishFromCourse(['mains']);
    const desserts = this.getRandomDishFromCourse(['desserts']);
  }
};