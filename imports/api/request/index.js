import axios from "axios";
let BASE_URL
if (process.env.NODE_ENV === "development")
  BASE_URL = Meteor.settings.private.LOGIN_BASE_URL;
else BASE_URL = process.env.LOGIN_BASE_URL;
axios.defaults.baseURL = BASE_URL;
export default axios
