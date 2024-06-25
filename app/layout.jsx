import "./asserts/styles/global.css";
import "./Components/Navbar";
import Navbar from "./Components/Navbar";
export const metadata = {
  title: "Property plues| Rental services",
  description: "A rental services app",
  keywords: ["javascript", "house", "renting"],
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
