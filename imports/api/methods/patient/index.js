import { Meteor } from "meteor/meteor";
import axios from "axios";

Meteor.methods({
  async patientTestQuery(url, headers, body) {
    try {
      console.log("url and headers : ", url, headers);
      const response = await axios.get(url, { headers, body });
      const { data } = response;
      console.log("Response data: ", data);
      return data;
    } catch (e) {
      console.log("ERROR ", e);
      throw new Meteor.Error(e)
    }
  },
});
