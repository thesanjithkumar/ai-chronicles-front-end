// import react from "react";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";

interface Props {
  clerkAPIKey: string;
}

const Login = () => {
  return (
    <>
      {/* <ClerkProvider
        publishableKey={
          "pk_test_dWx0aW1hdGUtYnV6emFyZC00LmNsZXJrLmFjY291bnRzLmRldiQ"
        }
      > */}
      <div className="grid place-items-center">
        <SignIn
          appearance={{
            layout: {
              socialButtonsVariant: "iconButton",
            },
            variables: {
              colorPrimary: "#FFFFFF",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              colorBackground: "#19191A",
              colorInputBackground: "#19191A",
              colorAlphaShade: "white",
              colorText: "white",
              colorInputText: "white",
            },
            elements: {
              card: {
                background: "linear-gradient(180deg, #39269B 0%, #342480 100%)",
              },
              logoImage: {
                filter: "brightness(0) invert(1)",
              },
              headerTitle: {
                fontSize: "28px",
              },
              headerSubtitle: {
                color: "#FFFFFF",
              },
              main: {
                gap: "2rem",
              },
              socialButtonsProviderIcon__github: {
                filter: "brightness(0) invert(1)",
              },
              dividerBox: {
                display: "none",
              },
              formFieldInput: {
                backgroundColor: "transparent",
              },
              formButtonPrimary: {
                backgroundColor: "#FFFFFF30",
                fontSize: "12px",
                textTransform: "none",
                "&:focus": {
                  backgroundColor: "#FFFFFF15",
                },
                "&:active": {
                  backgroundColor: "#FFFFFF15",
                },
                "&:hover": {
                  backgroundColor: "#FFFFFF15",
                },
              },
              footer: {
                "& + div": {
                  backgroundColor: "#130162",
                },
              },
            },
          }}
        />
      </div>
      {/* </ClerkProvider> */}
    </>
  );
};

export default Login;
