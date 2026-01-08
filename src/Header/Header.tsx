function Header() {
  return (
    <header className="w-full flex justify-between pl-4 bg-green-950 text-white h-32 shadow items-center fixed-top">
      <div className="w-64 flex pl-4 items-center gap-4">
        <img src="#" alt="logo" width="50" />
        <h1 className="text-2xl font-bold">My GoalsApp</h1>
      </div>
      <div className="w-14 flex-none">
        <a href="#">SignIn</a>
      </div>
    </header>
  );
}
export default Header;
