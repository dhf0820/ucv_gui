export default (data, title) => {
  if (typeof data === "string")
    return data.split(`<p><b>${title}</b></p>`).join("");
  return data.map((el) => {
    return {
      selected: null,
      original: el,
      resourceId: el.resource.id,
      html: el.resource.text.div.split(`<p><b>${title}</b></p>`).join(""),
    };
  });
};
