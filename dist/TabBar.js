"use strict";

const TabBar = ({
  onFilter
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between tabBar"
  }, /*#__PURE__*/React.createElement("p", {
    onClick: () => onFilter('active')
  }, "Active"), /*#__PURE__*/React.createElement("p", {
    onClick: () => onFilter('all')
  }, "All"), /*#__PURE__*/React.createElement("p", {
    onClick: () => onFilter('complete')
  }, "Complete")));
};