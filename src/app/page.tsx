import { getBaseUrl } from "@/utils/getBaseUrl";
import { User } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Data = { users: User[] };

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${getBaseUrl()}/api/v0/users`);
      const data: Data = await res.json();
      console.log({ data });
      if (Boolean(data.users)) setUsers(data.users);
    };
    console.log("about to fetch");
    fetchUsers();
  }, [setUsers]);

  return (
    <div className="flex-col flex gap-4 justify-center items-center p-10">
      <div className="flex flex-col gap-6">
        {users &&
          users.map((user) => (
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
