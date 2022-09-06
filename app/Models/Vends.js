import { appState } from "../AppState.js";

export class Vend {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  vendItem() {
    this.quantity--
    console.log(`${this.quantity} ${this.name} remain`);
  }

  get Template() {
    return `
  <div class="col-md-3 text-center p-2 bg-light elevation-2">
    <h3>${this.name}</h3>
    <h3 class="text-success">$${this.price}.00</h3>
    <h4 class="text-warning">Number Left: ${this.quantity}</h4>
    <button class="btn btn-primary" onclick="app.vendsController.vendItem('${this.name}')">Vend</button>
  </div>
    `
  }
}