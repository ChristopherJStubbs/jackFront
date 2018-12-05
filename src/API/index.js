const BASE = 'http://localhost:3000'

let getTasks = function() {
  console.log("got to api");
  return fetch(BASE + '/tasks')
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

export {
  getTasks
}
