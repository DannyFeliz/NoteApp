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

store.getNotes = () => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: "notes",
      method: "get"
    }).then(response => {
      resolve(response.data)
    }).catch(response => {
      reject(response);
    });
  });
};

store.removeNote = (id) => {
  return new Promise((resolve, reject) => {
    //
    // Vue.http.delete("notes/" + id).then(response => {
    //   resolve(response.data)
    // }).catch(response => {
    //   reject(response);
    // });


    Vue.http({
      url: "notes/" + id,
      method: "delete",
    }).then(response => {
      resolve(response.data)
    }).catch(response => {
      reject(response);
    });
  });
}


export default store
