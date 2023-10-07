import axios from "axios";
let BASE_URL;
if (process.env.NODE_ENV === "development")
  BASE_URL = Meteor.settings.public.LOGIN_BASE_URL;
else BASE_URL = process.env.LOGIN_BASE_URL;

console.log(BASE_URL)

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, "$axios", { value: axios });
  },
};
