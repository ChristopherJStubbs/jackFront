const BASE = 'http://localhost:3000'

let getAppointments = function() {
  console.log("got to twillio api");
  return fetch(BASE + '/appointments')
  .then((resp) => {
    let json = resp.json()
    return json
  })
}

let createAppointment = function(obj) {
  return fetch(BASE + `/appointments`, {
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

export { getAppointments, createAppointment }
