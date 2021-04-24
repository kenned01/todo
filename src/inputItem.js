const { useState } = React;
const ItemInput = ({onEnter}) => {

  const [item, setItem] = useState("");

  const verifyEnter =  (target) => {
    if (target.key === 'Enter') {
      onEnter(item);
      setItem('');
    }
  }

  const onChange = (event) => {
    setItem(event.target.value);
  }

  return (
    <div className="form-group">
      <input placeholder="Create a new toDo" value={item} onKeyDown={e => verifyEnter(e) } onChange={e => onChange(e)} className="form-control"/>
    </div>
  );
}