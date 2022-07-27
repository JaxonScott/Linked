import { NextResponse } from 'next/dist/server/web/spec-extension/response'

export default function middleware(req) {
  let verify = req.cookies.get('connect.sid')
  let url = req.url

  if (!verify && url.includes('/profile')) {
    return NextResponse.redirect('http://localhost:3000/login/')
  }
}
