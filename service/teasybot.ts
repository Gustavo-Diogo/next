import axios from "axios"

const teasybot = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 60000,
})

export default teasybot
