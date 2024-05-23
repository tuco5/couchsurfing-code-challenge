import { users } from "@/mock/users";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ users });
}
