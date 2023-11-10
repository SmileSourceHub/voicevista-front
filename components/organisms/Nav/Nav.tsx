export const Nav = () => {
    return (
      <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div className="container mx-auto">
        <a href="#" className="text-2xl font-bold">VoiceVista</a>
      </div>
      <div>
        <a href="/login" className="text-white hover:underline">Login</a>
      </div>
    </nav>
    );
  };