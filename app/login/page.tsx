import { Authentication } from "@/molecules/Authentication/Authentication";
import { AuthLayout } from "@/templates/AuthLayout/AuthLayout";

export default function Page() {
  return (
    <AuthLayout>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 font text-black">Login</h2>
        <Authentication/>
      </div>
    </AuthLayout>
  );
}