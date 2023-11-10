import { Footer } from "@/organisms/Footer/Footer";
import { Header } from "@/organisms/Header/Header";
import { MainLayoutType } from "./MainLayoutType";
import { Nav } from "@/organisms/Nav/Nav";

export const MainLayout = ({ children }: MainLayoutType) => {
    return (
      <div>
        <Nav/>
        <Header />
        <main className="flex min-h-screen items-center justify-center bg-gray-100">{children}</main>
        <Footer />
      </div>
    );
  };