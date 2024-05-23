import { UsersList } from "@/components/UsersList";

export default function Home() {
  return (
    <div className="flex-col flex gap-4 justify-center items-center p-10">
      <UsersList />
    </div>
  );
}
