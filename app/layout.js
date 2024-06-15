import './globals.css';
import MainHeader from "@/Components/header/main-header";
import MainFooter from "@/Components/footer/main-footer";

export const metadata = {
  title: 'Happy Days',
  description: 'Delicious meals, shared by a food-loving menu.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <MainHeader></MainHeader>
      {children}
      </body>
      <MainFooter></MainFooter>
      </html>
  );
}
