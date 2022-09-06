import { VendsController } from "./Controllers/VendsController.js";

class App {


  vendsController = new VendsController()
}

window["app"] = new App();
