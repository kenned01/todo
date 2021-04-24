"use strict";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      active: 'active' //all, complete, active

    };
  }

  componentDidMount() {
    getItems().then(data => {
      this.setState({
        items: data
      });
    }).catch(e => console.warn(e));
  }

  async onEnter(item) {
    var result = await addItem(item);

    if (typeof result !== 'string') {
      var {
        items
      } = this.state;
      items.push(result);
      this.setState({
        items: items
      });
    }
  }

  onDelete(id) {
    deleteItem(id).then(x => {
      var {
        items
      } = this.state;
      var index = items.findIndex(elm => elm.id == id);
      items.splice(index, 1);
      this.setState({
        items: items
      });
    }).catch(e => console.warn(e));
  }

  onComplete(item) {
    completeItem(item).then(data => {
      var {
        items
      } = this.state;
      var index = items.findIndex(elm => elm.id == data.id);
      items[index] = data;
      this.setState({
        items: items
      });
    }).catch(e => console.warn(e));
  }

  onFilter(filter) {
    this.setState({
      active: filter
    });
  }

  displayItems(active) {
    if (active == "active" || active == "complete") {
      var filter = [];
      this.state.items.forEach(item => {
        if (item.status == active) {
          filter.push(item);
        }
      });
      return filter;
    } else {
      return this.state.items;
    }
  }

  render() {
    var displayItems = this.displayItems(this.state.active);
    return /*#__PURE__*/React.createElement("div", {
      className: "todo-c"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(ItemInput, {
      onEnter: this.onEnter.bind(this)
    }), /*#__PURE__*/React.createElement(ListItem, {
      items: displayItems,
      onDelete: this.onDelete.bind(this),
      onComplete: this.onComplete.bind(this)
    }), /*#__PURE__*/React.createElement(TabBar, {
      onFilter: this.onFilter.bind(this)
    })));
  }

}