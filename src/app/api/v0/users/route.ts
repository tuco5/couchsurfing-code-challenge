import data from "@/mock/users.json";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(data);
}
