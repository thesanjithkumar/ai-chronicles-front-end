import {
  ClerkProvider,
  SignedIn,
  UserButton,
  WithUser,
} from "@clerk/clerk-react";

const Comment = ({ apiKey }: { apiKey: string }) => {
  return (
    // <ClerkProvider publishableKey={apiKey}>
    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </ClerkProvider>
    <p>
      {apiKey}
      {/* <WithUser>{(user) => <div>{user.firstName}</div>}</WithUser> */}
    </p>
  );
};

export default Comment;
