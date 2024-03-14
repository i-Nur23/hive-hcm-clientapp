import "./globals.scss";

export const metadata = {
  title: "HiveHCM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        {children}
      </body>
    </html>
  );
}
