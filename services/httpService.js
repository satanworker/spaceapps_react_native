const url = 'https://fire.iconx.app/api'
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

class HttpService {
  postFire(payload) {
    return fetch(`${url}/pictures`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(payload)
    }).then(res => res.json())
  }
}

export default new HttpService()