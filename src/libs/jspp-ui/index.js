import Carousel from "./Carousel";
import CarItem from "./CarItem";
import Selector from "../../components/Selector";
let JsppUI = {};
JsppUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
  Vue.component(Selector.name, Selector)
}

export default JsppUI;
