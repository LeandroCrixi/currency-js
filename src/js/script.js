import { currentDate, currentYear, processData } from "./modules/dom.js";
import { getData } from "./modules/api.js";

getData('https://api.hgbrasil.com/finance?format=json-cors&key=2bc2a6be', processData)

currentDate()
currentYear()