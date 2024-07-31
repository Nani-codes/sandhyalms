// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import HeaderMegaMenu from "../components/header/HeaderMegaMenu";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider>
            <HeaderMegaMenu />
            {children}
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
