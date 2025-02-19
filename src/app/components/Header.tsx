import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Real Estate Logo" width={150} height={50} />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-darkGray hover:text-primary font-medium">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-darkGray hover:text-primary font-medium">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-darkGray hover:text-primary font-medium">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div>
          <Link href="/login" className="text-primary font-medium mr-4">
            تسجيل الدخول
          </Link>
          
          <Link href="/signup" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
            إنشاء حساب
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
