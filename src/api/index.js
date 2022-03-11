import axios from 'axios'
const baseURL=process.env.VUE_APP_BASE_URL_REMOTE

const instance =axios.create({
  baseURL,
  timeout:5000
})

export function post(url,params){
  console.log(baseURL)
  return new Promise((resolve,reject)=>{
    instance.post(url,params)
      .then((response)=>{
        resolve(response)
      })
      .catch((reason) => {
        reject(reason)
      })
  })
}