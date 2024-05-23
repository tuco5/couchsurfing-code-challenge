import { getBaseUrl } from "@/utils/getBaseUrl";
import { User } from "@nextui-org/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getUsers(): Promise<{ data: User[] }> {
  const res = await fetch(`${getBaseUrl()}/api/v0/users`);
  console.log("get users");
  console.log({ baseUrl: getBaseUrl() });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getUsers();
  return (
    <div className="flex-col flex gap-4 justify-center items-center p-10">
      <div className="flex flex-col gap-6">
        {data.map((user) => (
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
      </div>
    </div>
  );
}
