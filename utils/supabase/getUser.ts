import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

type UseUserProps = {
  isRedirectedIfNoUser?: boolean;
};

async function getUser(
  { isRedirectedIfNoUser }: UseUserProps = { isRedirectedIfNoUser: true }
) {
  const supabase = createClient();

  const { data: userData } = await supabase.auth.getUser();
  const { user } = userData;

  if (!user && isRedirectedIfNoUser) {
    return redirect("/login");
  }

  return user;
}

export default getUser;
