class Store {
  push = (obj, key) => {
    window.sessionStorage.setItem(key, JSON.stringify(obj));
  };

  get = (key) => {
    const obj = window.sessionStorage.getItem(key);
    return JSON.parse(obj);
  };

  remove = (key) => {
    window.sessionStorage.removeItem(key);
  };
}
