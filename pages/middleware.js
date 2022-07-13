import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request = NextRequest) {
  return NextResponse.redirect(new URL('/about-2', NextRequest.url));
}

// There are two ways to define which paths Middleware will run on :

// Custom matcher config :

export const config = {
  matcher: '/about/:path*', // Multi-path : ['/about/:path*', '/dashboard/:path*']
};
// Conditional statements :

export function middlewareConditional(request = NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  }
}

// Cookies

export function cookies(NextRequest) {
  // Setting cookies on the response
  const response = NextResponse.next();
  response.cookies.set('vercel', 'fast');
  response.cookies.set('vercel', 'fast', { path: '/test' });

  // Getting cookies from the NextRequest
  const cookie = NextRequest.cookies.get('vercel');
  console.log(cookie); // => 'fast'
  const allCookies = NextRequest.cookies.entries();
  console.log(allCookies); // => [{ key: 'vercel', value: 'fast' }]
  const { value, options } = response.cookies.getWithOptions('vercel');
  console.log(value); // => 'fast'
  console.log(options); // => { Path: '/test' }

  // Deleting cookies
  response.cookies.delete('vercel');
  response.cookies.clear();

  return response;
}
