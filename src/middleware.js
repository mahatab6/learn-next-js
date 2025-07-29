import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const dummyUsetData = {
        role: 'admin',
        email: 'testadmin@gmail.com'
    }


    let isServicesPage = request.nextUrl.pathname.startsWith("/services");
    let isAdmin = dummyUsetData.role == "admin";
    if(isServicesPage && !isAdmin){
        return NextResponse.redirect(new URL('/', request.url))
    }
   
    return NextResponse.next();
}
