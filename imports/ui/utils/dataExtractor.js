export default function (data) {
  const splitted = [];
  data.forEach((val) => {
    const htmlString = val.html;
    const html = new DOMParser().parseFromString(
      htmlString,
      "text/html"
    ).documentElement;
    const values = [];
    const pArray = html.querySelectorAll("p");
    pArray.forEach((p) => {
      const innerText = p.innerText;
      const text = innerText.split(":");
      const head = text[0];
      const _value = innerText.slice(innerText.indexOf(":") + 1);
      values.push({
        title: head,
        value: _value,
      });
    });
    splitted.push({
      resourceId: val.resourceId,
      values,
    });
  });
  return splitted;
}
