import Carousel from "./Carousel";
import CarItem from "./CarItem";
let JsppUI = {};
JsppUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
}

export default JsppUI;
