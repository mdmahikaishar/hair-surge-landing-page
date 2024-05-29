import Image from "next/image";
import { Clock } from "../common";

export default function Hero() {
    return (
      <section className="">
        <div className="pt-10 holder flex justify-center gap-4">
          {/* Image Section */}
          <div className="flex items-end gap-4">
            <div className="w-[15rem] h-[20rem]">
              <Image className="w-full h-full object-container" src="/woman-2.png" width="200" height="250" alt="model" />
            </div>
  
            <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center bg-white text-black rounded-full">
              <span className="">চুলের যত্নের</span>
              <span className="">সেরা পণ্য</span>              
            </div>
          </div>
  
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <del className="text-sm font-semibold">পুরাতন মূল্য 4998 BDT</del>               
  
            <div className="px-4 py-2 bg-orange-500">2,499 BDT</div>
  
            <h3 className="font-semibold">অফারে 5টি প্যাক স্টকের বাকি আছে</h3>
            <span className="text-sm text-gray-300">অফারটি শেষ হবে</span>
  
            <Clock />
  
            <button className="px-4 py-2 font-semibold bg-orange-500 border border-white rounded-full">অর্ডার করুন</button>
          </div>
        </div>
      </section>
    )
  }