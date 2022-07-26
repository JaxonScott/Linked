import axios from 'axios'
import { useEffect } from 'react'

const GetText = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/auth/users', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return <h1>Get text </h1>
}

export default GetText
