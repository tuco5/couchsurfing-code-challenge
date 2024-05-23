import data from "@/mock/users.json";

export const dynamic = "force-dynamic";

export async function GET() {
  console.info(data);
  return Response.json(data);
}
