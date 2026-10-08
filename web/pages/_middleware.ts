import { NextRequest, NextResponse } from 'next/server'

const BYPASSED_PATHS = ['/maintenance', '/assets', '/favicon.ico', '/_next']

export function middleware(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== 'true') {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (BYPASSED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/maintenance'
  return NextResponse.rewrite(url)
}
