import "./globals.css";

export const metadata = {
  title: "HiveHCM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
