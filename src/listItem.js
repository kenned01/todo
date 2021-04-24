const ListItem = ({items = [], onDelete, onComplete}) => {

  var items = items.map( (item, index) => {
    var line = item.status == "complete" ? "item-text done" : "item-text" ;
    return (
      <div key={index} className="d-flex justify-content-between item-c">
        <span className={line} onClick={() => onComplete(item)}>{item.nombre}</span>
        <span className="item-button" onClick={() => onDelete(item.id)}>&times;</span>
      </div>
    );
  });

  return (
    <div class="item-card mt-3">
      {items}
    </div>
  );
}