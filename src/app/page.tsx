import { getBaseUrl } from "@/utils/getBaseUrl";
import { User } from "@nextui-org/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Data = { users: User[] };

const url = `${getBaseUrl()}/api/v0/users`;

async function getUsers(): Promise<Data | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    }
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data");
  }

  return null;
}

export default async function Home() {
  const data = await getUsers();
  if (!data)
    return (
      <UsersPageLayout>
        Sorry, no users to show, try again later...
      </UsersPageLayout>
    );
  const users = data.users;
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
