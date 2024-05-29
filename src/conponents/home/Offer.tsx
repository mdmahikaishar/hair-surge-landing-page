export default function Offer() {
    return (
      <section className="">
        <div className="px-8 holder flex items-center justify-evenly gap-4 bg-red-500 rounded-xl shadow-md">
          <div className="flex">
            <div className="w-8 h-8 bg-white"></div>
            <span className="text-sm">পেশাদারদের পছন্দ</span>
          </div>
  
          <span className="font-bold text-2xl">অফার</span>
  
          <div className="font-bold text-2xl">2499 BDT</div>
  
          <div className="font-bold text-2xl">
            পুরাতন মূল্য: <del>4998 BDT</del>
          </div>
  
          <button className="px-4 py-2 text-2xl border-2 bg-orange-500 text-white rounded-full hover:scale-110">
            অর্ডার করুন
          </button>
        </div>
      </section>
    )
  }