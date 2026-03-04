import { auth } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Dashboard from "@/components/Dashboard"

export default async function Home() {
  const session = await auth()
  if (!session) redirect("/api/auth/signin")
  return <Dashboard session={session} />
}
