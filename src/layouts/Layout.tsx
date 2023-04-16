import { ClerkProvider } from "@clerk/clerk-react";
import Navbar from "@components/Navbar/Navbar";

const Layout = ({
  children,
  apiKey,
}: {
  children: JSX.Element;
  apiKey: string;
}) => {
  return (
    <>
      <ClerkProvider
        publishableKey={
          "pk_test_dWx0aW1hdGUtYnV6emFyZC00LmNsZXJrLmFjY291bnRzLmRldiQ"
        }
      >
        <Navbar apiKey={apiKey} />
        <main>{children}</main>
        {/* <Footer /> */}
      </ClerkProvider>
    </>
  );
};

export default Layout;
