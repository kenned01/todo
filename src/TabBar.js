const TabBar = ({onFilter}) => {
  return (
    <div className="card mt-3">
      <div className="d-flex justify-content-between tabBar">
        <p onClick={() => onFilter('active')}>Active</p>
        <p onClick={() => onFilter('all')}>All</p>
        <p onClick={() => onFilter('complete')}>Complete</p>
      </div>
    </div>
  );
}