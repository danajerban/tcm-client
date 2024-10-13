import { cookies } from "next/headers";

export default async function getUsers() {
  const res = await fetch("http://localhost:3001", {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  return res.json();
}
