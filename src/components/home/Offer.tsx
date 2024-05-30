import Image from "next/image"

export default function Offer() {
    return (
      <section className="">
        <div className="px-8 py-6 md:py-2 holder flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-4 bg-[rgb(122,0,20)] rounded-xl shadow-2xl">
          <div className="flex items-center">
            <div className="w-6 h-6">
              <Image className="w-full h-full object-contain" src="/spec_bg.png" width={20} height={20}  alt={"spec"} />
            </div>

            <span className="text-sm text-[#e04907]">পেশাদারদের পছন্দ</span>
          </div>
  
          <span className="font-bold text-2xl">অফার!</span>
  
          <div className="w-36 h-20 bg-contain bg-no-repeat grid place-items-center font-bold text-2xl" style={{ backgroundImage: "url('/new_prc_bg.png')" }}>2499 BDT</div>
  
          <div className="flex flex-col font-bold text-xl">
            <span>পুরাতন মূল্য:</span>
            <del>4998 BDT</del>
          </div>
  
          <button className="px-4 py-2 text-2xl btn">
            অর্ডার করুন
          </button>
        </div>
      </section>
    )
  }