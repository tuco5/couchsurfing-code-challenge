"use client";
import { Avatar, Image, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Data = { user: User };

export default function UserPage({ params }: { params: { username: string } }) {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/v0/users/${params.username}`);
      const data: Data = await res.json();

      if (Boolean(data.user)) {
        setUser(data.user);
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchUser();
  }, [setUser]);

  if (isLoading)
    return (
      <UserPageLayout>
        <Spinner size="lg" color="danger" />
      </UserPageLayout>
    );

  return (
    <UserPageLayout>
      <div className="w-full max-w-[600px] bg-white bg-opacity-60 rounded-lg h-[300px] flex items-center justify-start p-6 gap-6">
        <div className="relative rounded-full overflow-hidden bg-gray-800 border-3 border-primary">
          <Image
            src={user?.image ?? ""}
            width={160}
            height={160}
            alt={`${user?.username ?? ""} avatar`}
          />
        </div>

        <div className="flex flex-col gap-2 h-full justify-center">
          <p className="text-2xl font-semibold tracking-wider text-gray-800">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="font-medium tracking-wide text-primary">
            {user?.email}
          </p>

          <div className="flex gap-6 items-center">
            <p className="text-sm font-medium tracking-wider">Friends:</p>
            <div className="flex">
              {user?.friends.map((friend) => (
                <Link href={friend.username} key={friend.id}>
                  <Avatar
                    src={friend.image}
                    isBordered
                    color="primary"
                    className="hover:bg-warning transition-all hover:z-10 hover:scale-110 hover:outline-warning"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </UserPageLayout>
  );
}

function UserPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex justify-center p-10">{children}</div>
  );
}
