import Vue from '../main';
const store = {};

store.createNote = (note) => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "notes",
      method: "post",
      body: note,
    }).then(response => {
      resolve(response.data)
    }).catch(response => {
      reject(response);
    });
  });
};


export default store
