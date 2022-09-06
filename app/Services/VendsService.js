import { appState } from "../AppState.js";

class VendsService {

  vendItem(name) {
    let itemVended = appState.vendItems.find(v => v.name == name)
    if (appState.cash >= itemVended.price) {
      if (itemVended.quantity > 0) {
        appState.cash -= itemVended.price
        console.log(`${itemVended.name} vended. You have $${appState.cash}.00 remaining.`);
        itemVended.vendItem()
      } else {
        console.log(`${itemVended.name} is sold out, sorry.`);
      }
    } else {
      let diff = itemVended.price - appState.cash
      console.log(`Not enough funds for: ${itemVended.name}. Please add $${diff}.00 to complete transaction`);
    }
  }
}

export const vendsService = new VendsService()