import { getBaseUrl } from "@/utils/getBaseUrl";
import { Avatar, Image } from "@nextui-org/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Data = { user: User };
type Params = { username: string };

const url = `${getBaseUrl()}/api/v0/users`;

async function getUser({ username }: Params): Promise<Data> {
  try {
    const res = await fetch(`${url}/${username}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data");
  }
}

export default async function UserPage({ params }: { params: Params }) {
  const { user } = await getUser(params);
  console.log(user);
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
