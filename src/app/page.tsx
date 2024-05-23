import { UsersList } from "@/components/UsersList";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex-col flex gap-4 justify-center items-center p-10">
      <UsersList />
    </div>
  );
}
