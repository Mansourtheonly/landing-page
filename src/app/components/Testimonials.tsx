/* eslint-disable react/no-unescaped-entities */

const Testimonials = () => {
    return (
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">ماذا يقول عملاؤنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow">
                <p className="italic text-gray-700">
                  "تجربتي مع هذه الخدمة كانت ممتازة وساعدتني في العثور على منزلي المناسب بكل سهولة."
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div className="mr-4 text-right">
                    <h4 className="font-bold text-gray-800">اسم العميل</h4>
                    <p className="text-sm text-gray-600">الجزائر العاصمة</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  
