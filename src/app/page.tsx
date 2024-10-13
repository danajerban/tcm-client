import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth, currentUser, User } from "@clerk/nextjs/server";
import getUsers from "./get-users";

export default async function Home() {
  const authDetails = auth();
  console.log("authDetails", authDetails);

  const user = await currentUser();
  console.log("user", user);

  const allUsers = await getUsers();
  console.log("allUsers", allUsers);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
      <br></br>
      Current User - {user?.firstName} {user?.lastName}
      <br></br>
      <br></br>
      <div>
        <h1>All Users</h1>
        <ol>
          {allUsers.data?.map((_user: User) => (
            <li key={_user.id}>
              {_user.firstName} {_user.lastName}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
