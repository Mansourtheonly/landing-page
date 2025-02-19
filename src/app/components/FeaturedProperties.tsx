const FeaturedProperties = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">عقارات مميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 bg-white shadow-md rounded-lg">
                <div
                  className="h-48 bg-cover bg-center rounded"
                  style={{ backgroundImage: "url('/property-placeholder.jpg')" }}
                ></div>
                <div className="mt-4">
                  <div className="text-primary font-bold text-xl">17,500,000 دج</div>
                  <h3 className="text-lg font-semibold mt-2">
                    شقة فاخرة في الجزائر العاصمة
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    3 غرف - 2 حمامات - 120 م²
                  </p>
                  <a
                    href="#"
                    className="block mt-4 bg-primary text-white py-2 rounded hover:bg-secondary transition"
                  >
                    عرض التفاصيل
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedProperties;
  