import { users } from "@/mock/users";

export default function Home() {
  return (
    <div className="min-h-screen flex-col flex gap-4 justify-center items-center">
      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}
