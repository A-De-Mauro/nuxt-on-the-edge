import { NextRequest, NextResponse } from 'next/server'

// This run the middleware only on the specified routes
export const config = {
  matcher: '/',
}

export function middleware(request: NextRequest) {
  const country = request.geo?.country?.toLocaleLowerCase()
  const url = request.nextUrl

  // middleware logs for Vercel
  // eslint-disable-next-line no-console
  console.info(request.geo)

  url.searchParams.set('country', country || '')

  return NextResponse.rewrite(url)
}
