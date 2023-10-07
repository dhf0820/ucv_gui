import { Meteor } from "meteor/meteor";
import axios from "../../request";

Meteor.methods({
  async loginPost(username, password) {
    const res = await axios.post("/authorize", {
      userName: username,
      password: password
    });
    const { data } = res;
    return data;
  },
});
