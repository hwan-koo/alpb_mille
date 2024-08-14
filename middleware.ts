import { NextResponse, type NextRequest } from "next/server";
import getUser from "./utils/supabase/getUser";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
};

export async function middleware(request: NextRequest) {
  const user = await getUser({ isRedirectedIfNoUser: false });
  const exists = publicOnlyUrls[request.nextUrl.pathname];

  if (!user) {
    if (exists) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (exists) {
      console.log(1);
      return NextResponse.redirect(new URL("/voca", request.url));
    }
  }
  return;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
