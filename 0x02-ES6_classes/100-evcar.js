import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color, this._range);
  }
}
