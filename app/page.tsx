import AuthButton from "@/components/auth/AuthButton";

export default async function Index() {
  return (
    <div className="col-span-4 flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10">
        <AuthButton />
      </nav>
    </div>
  );
}
