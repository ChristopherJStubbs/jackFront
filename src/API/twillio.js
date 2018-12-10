const BASE = 'http://localhost:3000'

let getAppointments = function() {
  console.log("got to twillio api");
  return fetch(BASE + '/appointments')
  .then((resp) => {
    let json = resp.json()
    return json
  })
}
