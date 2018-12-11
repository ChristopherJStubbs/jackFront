const BASE = 'http://localhost:3000'

let getTasks = function() {
  console.log("got to api");
  return fetch(BASE + '/tasks')
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

let createMyTask = function(obj) {
  console.log(obj);
  return fetch(BASE + `/my_tasks`, {
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
  .then((resp) => {
    let json=resp.json()
    console.log(json);
    return json
  })
}

let getMyTasks = function(userid) {
  console.log(userid)
  return fetch(BASE+ `/user/my_tasks/${userid}`)
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

export {
  getTasks,
  createMyTask,
  getMyTasks
}
