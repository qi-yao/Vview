import VvButton from "./button";
console.log(VvButton);
VvButton.install = function(Vue) {
  Vue.component(VvButton.name, VvButton);
};
export default VvButton;
