const Hero = () => {
    return (
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">ابحث عن منزل أحلامك في الجزائر</h1>
          <p className="mt-4 text-lg md:text-xl">اكتشف أفضل العقارات للبيع والإيجار</p>
          <button className="mt-6 bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition">
            اكتشف المزيد
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  