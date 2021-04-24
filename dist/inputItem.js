"use strict";

const {
  useState
} = React;

const ItemInput = ({
  onEnter
}) => {
  const [item, setItem] = useState("");

  const verifyEnter = target => {
    if (target.key === 'Enter') {
      onEnter(item);
      setItem('');
    }
  };

  const onChange = event => {
    setItem(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Create a new toDo",
    value: item,
    onKeyDown: e => verifyEnter(e),
    onChange: e => onChange(e),
    className: "form-control"
  }));
};