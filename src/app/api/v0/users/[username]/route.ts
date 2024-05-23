import { users } from "@/mock/users";

export async function GET(
  _request: Request,
  { params }: { params: { username: string } }
) {
  const user = users.find((u) => u.username === params.username);

  const usersWithFriends = {
    ...user,
    friends: user?.friends.map((id) => users.filter((u) => u.id === id)[0]),
  };

  return Response.json({ data: usersWithFriends });
}
