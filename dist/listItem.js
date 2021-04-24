"use strict";

const ListItem = ({
  items = [],
  onDelete,
  onComplete
}) => {
  var items = items.map((item, index) => {
    var line = item.status == "complete" ? "item-text done" : "item-text";
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "d-flex justify-content-between item-c"
    }, /*#__PURE__*/React.createElement("span", {
      className: line,
      onClick: () => onComplete(item)
    }, item.nombre), /*#__PURE__*/React.createElement("span", {
      className: "item-button",
      onClick: () => onDelete(item.id)
    }, "\xD7"));
  });
  return /*#__PURE__*/React.createElement("div", {
    class: "item-card mt-3"
  }, items);
};