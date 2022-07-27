import { parseCookies } from '../lib/parseCookies'
import Cookies from 'js-cookie'

const ReadCookie = () => {
  console.log(Cookies.get('connect.sid'))
  return <h1>Read cookie lol</h1>
}

export default ReadCookie
