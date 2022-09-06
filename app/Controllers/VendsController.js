import { appState } from "../AppState.js";
import { vendsService } from "../Services/VendsService.js";

function _drawVend() {
  let vendItems = appState.vendItems
  let template = ''
  vendItems.forEach(v => template += v.Template)
  document.getElementById('vend-items').innerHTML = template
}

function _drawCash() {
  document.getElementById('cash-added').innerText = appState.cash.toString()
}

export class VendsController {
  constructor() {
    _drawVend()
    _drawCash()
  }


  vendItem(name) {
    console.log(name, "vending...")
    vendsService.vendItem(name)
    _drawVend()
    _drawCash()
  }

  addCash() {
    appState.cash++
    _drawCash()
  }
}