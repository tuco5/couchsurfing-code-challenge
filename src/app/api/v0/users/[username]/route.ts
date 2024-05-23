import data from "@/mock/users.json";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: { username: string } }
) {
  const user = data.users.find((u) => u.username === params.username);

  const userWithFriends = {
    ...user,
    friends: user?.friends.map((id) =>
      data.users.filter((u) => u.id === id).pop()
    ),
  };

  const response = { user: userWithFriends };
  return Response.json(response);
}
