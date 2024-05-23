import { User } from "@nextui-org/react";
import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: 38;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  friends: User[];
}

async function getUsers(): Promise<{ data: User[] }> {
  const res = await fetch("http://localhost:3000/api/v0/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function UsersList() {
  const { data } = await getUsers();

  return (
    <div className="flex flex-col gap-6">
      {data.map((user) => (
        <div className="w-full max-w-[300px]">
          <User
            key={user.id}
            name={`${user.firstName} ${user.lastName}`}
            className="text-white "
            description={
              <Link className="text-primary" href={user.id.toString()}>
                @{user.username}
              </Link>
            }
            avatarProps={{
              isBordered: true,
              color: "success",
              src: user.image,
            }}
          />
        </div>
      ))}
    </div>
  );
}
