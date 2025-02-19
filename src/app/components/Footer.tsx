const Footer = () => {
    return (
      <footer className="py-10 bg-darkGray text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Real Estate. جميع الحقوق محفوظة.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="#" className="hover:text-primary">
              الرئيسية
            </a>
            <a href="#" className="hover:text-primary">
              من نحن
            </a>
            <a href="#" className="hover:text-primary">
              اتصل بنا
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  