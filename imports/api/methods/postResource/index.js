import { Meteor } from "meteor/meteor";
import axios from "axios";

Meteor.methods({
  async postResource(url, headers, body) {
    try {
      console.log("Save resource url and headers : ", url, headers);
      const response = await axios.post(url, body, { headers });
      const { data } = response;
      console.log("Save Response data: ", data);
      return data;
    } catch (e) {
      console.log("ERROR ", e);
      throw new Meteor.Error(e);
    }
  },
  async saveResource({
    coreUrl,
    resourceType,
    resourceId,
    headers,
    dest
  }) {
    try {
      console.log(`save ${resourceType} ${resourceId} to ${dest}`);
      console.log(`URL called : ${coreUrl}${resourceType}/destSystem/${dest}/${resourceId}`)
      const response = await axios.post(
        `${coreUrl}${resourceType}/destSystem/${dest}/${resourceId}`,
        {},
        { headers }
      );
      const { data } = response;
      console.log("Save Response data: ", JSON.stringify(data));
      return data;
    } catch (e) {
      console.log("ERROR ", e);
      throw new Meteor.Error(e);
    }
  },
});
