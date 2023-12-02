// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getValidSubdomain } from './utils/subdomain';
import Cookies from 'js-cookie';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files
// const token = Cookies.get('token');

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  // Clone the URL
  const url = req.nextUrl.clone();

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  const host = req.headers.get('host');
  // if(host?.split('.').length || 0 > 3){
  //   return NextResponse.rewrite(url);
  // }
  const subdomain = getValidSubdomain(host);
  if (subdomain) {
    if(req.nextUrl.pathname.startsWith('/partner-center')){
      if(token){
        url.pathname = `/partner/${subdomain}${url.pathname}`;
      }else{
        url.pathname = `/partner/${subdomain}/login`;
      }
    }else if(req.nextUrl.pathname.startsWith('/login')){
      if(token){
        url.pathname = `/partner/${subdomain}`;
      }else{
        url.pathname = `/partner/${subdomain}${url.pathname}`;
      }
    }else{
      // console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
      url.pathname = `/partner/${subdomain}${url.pathname}`;
    }
    // if(url.pathname === '/login'){
      // if(token){
      //   url.pathname = `/partner/${subdomain}`;
      // }else{
      //   url.pathname = `/partner/${subdomain}${url.pathname}`;
      // }
    // }else{
      // if(token){
      //   url.pathname = `/partner/${subdomain}${url.pathname}`;
      // }else{
      //   url.pathname = `/partner/${subdomain}/login`;
      // }
    // }
    // Subdomain available, rewriting
    // console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
    // url.pathname = `/partner/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}