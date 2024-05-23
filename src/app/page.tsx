import { getBaseUrl } from "@/utils/getBaseUrl";
import { User } from "@nextui-org/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Data = { users: User[] };

async function getUsers(): Promise<Data> {
  const res = await fetch(`${getBaseUrl()}/api/v0/users`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default async function Home() {
  const { users } = await getUsers();
  console.log(users);
  return (
    <UsersPageLayout>
      {users &&
        users.map((user) => (
          <div className="w-full max-w-[300px]" key={user.id}>
            <User
              name={`${user.firstName} ${user.lastName}`}
              className="text-white "
              description={
                <Link className="text-primary" href={`/users/${user.username}`}>
                  @{user.username}
                </Link>
              }
              avatarProps={{
                isBordered: true,
                color: "primary",
                size: "lg",
                src: user.image,
              }}
            />
          </div>
        ))}
    </UsersPageLayout>
  );
}

function UsersPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col flex gap-6 justify-center items-center p-10">
      {children}
    </div>
  );
}
