import { users } from "@/mock/users";
export async function GET() {
  return Response.json({ data: users });
}
