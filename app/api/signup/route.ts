export async function POST(request: Request) {
  const { email, password, name } = await request.json()
  return Response.json({
    email,
    password,
    name,
  })
}
