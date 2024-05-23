import { UsersList } from "@/components/UsersList";

export default function Home() {
  return (
    <div className="min-h-screen flex-col flex gap-4 justify-center items-center bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-10">
      <UsersList />
    </div>
  );
}
