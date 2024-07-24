import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server'

const privatePaths = ['/me']
const authPaths = ['/login', '/register']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  console.log("🚀 ~ middleware ~ pathname:", pathname)
  const sessionToken = request.cookies.get('sessionToken')?.value
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  // Đăng nhập rồi thì không cho vào login/register nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/me', '/login', '/register']
}