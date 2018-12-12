import AuthService from '../services';
const auth = new AuthService();

const BASE = 'http://localhost:3000'


let getTasks = function() {
  console.log("got to api");
  return auth.authFetch(BASE + '/tasks')
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

let createMyTask = function(obj) {
  console.log(obj);
  return auth.authFetch(BASE + `/my_tasks`, {
    body: JSON.stringify(obj),
    method: "POST"
  })
  .then((resp) => {
    let json=resp.json()
    console.log(json);
    return json
  })
}

let getMyTasks = function(userid) {
  return auth.authFetch(BASE+ `/user/my_tasks/${userid}`)
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

let getMyTask = function(my_task_id){
  return auth.authFetch(BASE + `/my_tasks/${my_task_id}`)
  .then(resp => {
    let json = resp.json()
    return json
  })
}

let editMyTask = function(myTaskObj) {
  console.log(myTaskObj.id)
  return auth.authFetch(BASE + `/my_tasks/${myTaskObj.id}`, {
    method: "PATCH",
    body: JSON.stringify(myTaskObj),
  })
  .then(resp => {
    let json = resp
    console.log(json.errors)
    return json
  })
}

let deleteMyTask = function(id) {
  return auth.authFetch(BASE + `/my_tasks/${id}`, {
    body: JSON.stringify(id),
    method: "DELETE"
  })
  .then(resp => {
    let json = resp
    console.log(json)
    return json
  })
}

export {
  getTasks,
  createMyTask,
  getMyTasks,
  getMyTask,
  editMyTask,
  deleteMyTask
}
