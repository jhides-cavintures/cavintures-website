import "./globals.css";

export const metadata = {
  title: "CAVINTURES | General Merchandise",
  description:
    "CAVINTURES is an online store offering a wide range of general merchandise, with customized merchandise for corporate, government, and individual clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
