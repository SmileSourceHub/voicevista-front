import { Footer } from "@/organisms/Footer/Footer";
import { AuthLayoutType } from "./AuthLayoutType";
import { Nav } from "@/organisms/Nav/Nav";

export const AuthLayout = ({ children }: AuthLayoutType) => {
    return (
      <div>
        <main className="flex min-h-screen items-center justify-center bg-gray-100">{children}</main>
      </div>
    );
  };