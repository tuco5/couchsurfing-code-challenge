import { getBaseUrl } from "@/utils/getBaseUrl";
import { User } from "@nextui-org/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getUsers(): Promise<{ data: User[] }> {
  const res = await fetch(`${getBaseUrl()}/api/v0/users`);
  console.log(await res.json());
  return res.json();
}

export default async function Home() {
  console.log("init home");
  const { data } = await getUsers();
  console.log("after promise");
  return (
    <div className="flex-col flex gap-4 justify-center items-center p-10">
      <div className="flex flex-col gap-6">
        {data &&
          data.map((user) => (
            <div className="w-full max-w-[300px]" key={user.id}>
              <User
                name={`${user.firstName} ${user.lastName}`}
                className="text-white "
                description={
                  <Link
                    className="text-primary"
                    href={`/users/${user.username}`}
                  >
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
