import { getToken } from 'next-auth/jwt'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import { NextApiRequest, NextApiResponse } from 'next'

type NextApiRequestWithFoo = NextApiRequest & {
  nextUrl: {
    pathname: string
  }
}

const secret = process.env.JWT_SECRET!

export async function middleware(
  req: NextApiRequestWithFoo,
  res: NextApiResponse
) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret })
  console.log('JSON Web Token', token)

  const { pathname } = req.nextUrl

  // Allow the request if the following is true...
  // 1) The token exists
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  // Redirect them to login if they dont have token AND are requesting a protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login')
  }
}
