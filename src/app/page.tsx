"use client";
import { getBaseUrl } from "@/utils/getBaseUrl";
import { Spinner, User } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Data = { users: User[] };

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`/api/v0/users`);
      const data: Data = await res.json();
      if (Boolean(data.users)) {
        setUsers(data.users);
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchUsers();
  }, [setUsers]);

  if (isLoading)
    return (
      <UsersPageLayout>
        <Spinner size="lg" color="danger" />
      </UsersPageLayout>
    );

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
