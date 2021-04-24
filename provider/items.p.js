const getItems = () => {
  return new Promise((resolve, reject) => {
    try {
      var keys = Object.keys(localStorage);
      var items = [];
      /* recorrer todos los keys y cast to object */

      keys.forEach(key => {
        items.push(JSON.parse(localStorage.getItem(key)));
      });
      /* resolve results */

      resolve(items || []);
    } catch (error) {
      reject(error);
    }
  });
};

const addItem = name => {
  return new Promise((resolve, reject) => {
    try {
      /* setting id for the item */
      var item = {
        nombre: name,
        id: new Date().getTime(),
        status: 'active'
      };
      localStorage.setItem(`${item.id}`, JSON.stringify(item));
      resolve(item);
    } catch (error) {
      reject(`error: ${error}`);
    }
  });
};

const deleteItem = key => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem(`${key}`);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

const completeItem = item => {
  return new Promise((resolve, reject) => {
    try {
      item.status = item.status == "complete" ? "active" : "complete";
      localStorage.setItem(`${item.id}`, JSON.stringify(item));
      resolve(item);
    } catch (error) {
      reject(`Error ${error}`);
    }
  });
};