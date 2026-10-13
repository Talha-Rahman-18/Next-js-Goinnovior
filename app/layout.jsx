import "./globals.css";
import Main from "../layouts/Main";

export const metadata = {
  title: "AAA - Future Edge",
  icons: {
    icon: "/AAA_Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
