import Link from "next/link";

function Header() {
  return (
  <header className="flex justify-between p-5 max-w-7xl mx-auto">
    <div className="flex items-center space-x-5">
      <Link href="/">
        <img className="w-44 object-contain cursor-pointer" title="Medium Logo" src="/medium-logo.png" alt="medium-logo" />
      </Link>
      <div className="hidden md:inline-flex items-center space-x-5">
        <Link href="/about"><a className="hover:text-green-600">About</a></Link>
        <Link href="/contact"><a className="hover:text-green-600">Contact</a></Link>
        <Link href="/follow"><a className="text-white bg-green-600 hover:bg-white hover:text-green-600 border border-green-600 px-4 py-1 rounded-full duration-150">Follow</a></Link>
      </div>
    </div>
    <div className="flex items-center space-x-5 text-green-600">
      <Link href="/login"><a className="hover:text-black">Sign in</a></Link>
      <Link href="/get-started"><a className="border border-green-600 px-4 py-1 rounded-full hover:bg-green-600 hover:text-white duration-150">Get Started</a></Link>
    </div>
  </header>
  );
}

export default Header;
