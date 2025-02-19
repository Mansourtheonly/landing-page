const PropertySearch = () => {
    return (
      <div className="container mx-auto p-6 bg-white shadow rounded-md mt-[-40px] z-10 relative">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="flex-1 p-3 border rounded">
            <option>شراء</option>
            <option>إيجار</option>
          </select>
          <select className="flex-1 p-3 border rounded">
            <option>نوع العقار</option>
            <option>شقة</option>
            <option>فيلا</option>
            <option>منزل</option>
            <option>أرض</option>
          </select>
          <select className="flex-1 p-3 border rounded">
            <option>المدينة</option>
            <option>الجزائر العاصمة</option>
            <option>وهران</option>
            <option>قسنطينة</option>
            <option>عنابة</option>
          </select>
          <input
            type="text"
            placeholder="ابحث عن المنطقة..."
            className="flex-2 p-3 border rounded"
          />
          <button className="bg-primary text-white font-semibold py-3 px-6 rounded hover:bg-secondary transition">
            بحث
          </button>
        </div>
      </div>
    );
  };
  
  export default PropertySearch;
  