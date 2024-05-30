import Image from "next/image";

export default function Testimonial() {
    return (
      <section className="">
        <div className="holder flex flex-col md:flex-row gap-8 bg-white text-black rounded-xl">
          <div className="md:w-2/6 pt-4 flex-grow flex items-end justify-center">
            <Image className="w-[40%] md:w-[70%] object-cover" src="/doctor.png" width={200} height={400} alt="doctor" />
          </div>

          <div className="md:w-4/6 relative px-16 md:px-8 py-8">
            <Image className="w-8 h-8 md:w-16 md:h-16 absolute top-8 left-4 md:left-0 md:-translate-x-full object-contain" src="/arrows_top.png" width={200} height={400} alt="" />
            <Image className="w-8 h-8 md:w-16 md:h-16 absolute bottom-8 right-4 md:right-0 md:-translate-x-full object-contain" src="/arrows_bottom.png" width={200} height={400} alt="" />

            <p className="mb-6">চুল পড়ার সমস্যা লিঙ্গ নির্বিশেষে কোনো না কোনোভাবে প্রত্যেককে প্রভাবিত করে। পরিবেশের আধুনিক গুণমান, কাজের চাপ এবং ভারসাম্যহীন খাদ্যাভ্যাস মাথার খুলি এবং চুলের অবস্থাকে আরও খারাপ করে তোলে। ফলস্বরূপ, চুল বিবর্ণ হয়ে যায়, তার শক্তি এবং ঘনত্ব হারায়, বিভক্ত প্রান্ত দেখা দেয়, চুল ভেঙে যায় এবং পড়ে যায়। একজন ট্রাইকোলজিস্ট হিসাবে, বছরের পর বছর ধরে অনুশীলনের সময়, আমি অনেক চিকিৎসার চেষ্টা করেছি যা রোগীদের তাদের চুল মজবুত করতে, চেহারা বজায় রাখতে এবং চুলের গঠন উন্নত করতে সাহায্য করতে বাড়িতে ব্যবহার করা যেতে পারে। Hair Surge Shampoo একটি আসল রত্ন! এটিতে প্রাকৃতিক উপাদান রয়েছে যা ভঙ্গুর এবং ক্ষতিগ্রস্থ চুলের এবং বিভক্ত প্রান্তে সহায়তা করে। এই পণ্যটির ক্লিনিকাল ট্রায়ালগুলো টাক পড়া এবং চুল পড়ার বিরুদ্ধে লড়াই করার জন্য এর কার্যকারিতা প্রমাণ করে।</p>
          
            <h3 className="pr-6 text-xl italic text-blue-500 font-bold">সুচন্দা বোশ, এমডি, ট্রাইকোলজিস্ট</h3>        
          </div>  
        </div>
      </section>
    )
  }