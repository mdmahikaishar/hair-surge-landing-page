import { EXTRA_US, FAQS, HAIR_TIPS, INGREDENCES, WHY_US_CARDS } from "@/constances";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-red-800 text-white">
      <div className="">
        <Hero />
        <WhyUs />
      </div>
      <Ingridences />
      <ExtraUs />
      <HairTips />
      <div className="holder">
        <p className="text-sm text-center mx-auto">দুর্দান্ত বৃদ্ধির জন্য Hair Surge Shampoo -এর নিয়মিত ব্যবহার আপনার চুলকে শক্তিশালী এবং স্বাস্থ্যকর করে তুলবে!</p>
      </div>
      <Testimonial />
      <Faq />
      <Offer />
      <Formula />
      <Contact />
      <OrderNow />
      <Footer />

    </div>
  );
}



function Footer() {
  return (
    <footer className="">
      <div className="py-10 holder text-sm flex flex-col items-center justify-center gap-1  text-red-600">
        <p className="">© 2024 Copyright. All rights reserve</p>

        <div className="flex items-center gap-2">
          <a className="underline" href="/">Privacy Policy</a>
          <div className="h-4 w-[1px] bg-red-600"></div>
          <a className="underline" href="/">Report</a>
        </div>
      </div>
    </footer>
  )
}

function OrderNow() {
  return (
    <section className="">
      <div className="holder px-8 py-6 bg-gray-900 text-white rounded-xl">
        <div className="mb-8 w-4/5">
          <h3 className="mb-4 text-2xl font-bold">অর্ডার করুন এবং একটি উপহার পান</h3>
          
          <div className="flex items-start gap-8">
            {/* FORM */}
            <form className="w-3/5 flex flex-col gap-4">
              <InputWrapper>
                <select className="w-full text-inherit">
                  <option value="bd">বাংলাদেশ</option>
                  <option value="in">India</option>
                </select>
              </InputWrapper>
              <InputWrapper>
                <input className="w-full bg-transparent outline-none text-inherit" placeholder="নাম" />
              </InputWrapper>
              <InputWrapper>
                <input className="w-full bg-transparent outline-none text-inherit" placeholder="ফোন নম্বর" />
              </InputWrapper>

              <div className="">
                <span className="font-bold text-sm">মূল্য: 2499 BDT</span>
              </div> 

              <button className="px-4 py-2 font-semibold bg-orange-500 border border-white rounded-full">অর্ডার করুন</button>          
            </form>

            {/* TIMER */}
            <div className="w-2/5 flex flex-col gap-4">
              <Clock />
              <span className="text-sm">অফারটি শেষ হবে</span>
              <h3 className="">Hair Surge Shampoo চুল বৃদ্ধির জন্য</h3>
              <p className="text-sm">চুলের যত্ন নেওয়ার জন্য Maxi-Growth কমপ্লেক্সের সাহায্যে তাৎক্ষণিকভাবে চুলের গঠন পুনরুদ্ধার করার জন্য একটি এক্সপ্রেস ট্রিটমেন্ট এবং লোমকূপ উদ্দীপনা!</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-sm">পণ্যটি প্রত্যয়িত, উপাদানের তালিকা, নির্দেশাবলী এবং ব্যবহারের জন্য ইঙ্গিতগুলি লেবেলে তালিকাভুক্ত করা হয়েছে। পেমেন্ট প্রাপ্তির পরে (ক্যাশ অন ডেলিভারি)।</p>
        </div>
      </div>
    </section>
  )
}

function InputWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className="h-10 px-4 flex items-center gap-4 bg-white text-red-500 rounded-xl">
      <div className="w-6 h-6 bg-red-500"></div> 
      <div className="w-full">
        {children}
      </div>
    </div>
  )

}

function Contact() {
  return (
    <section className="">
      <div className="holder px-8 py-6 flex justify-end rounded-xl">

        <div className="w-3/5">
          <h3 className="mb-4 font-bold underline">আমাদের ম্যানেজার আপনার সাথে যোগাযোগ করবেন</h3>
          <p className="text-sm">চুলের বৃদ্ধির জন্য Hair Surge Shampoo শুধুমাত্র মূল প্যাকেজিংয়ে বিক্রি হয়!</p>
          <p className="text-sm">নকল থেকে সাবধান! শুধুমাত্র আসল Hair Surge Shampoo কিনুন।</p>
        </div>
      </div>
    </section>
  )
}

function Formula() {
  return (
    <section className="">
      <div className="holder px-8 py-6 flex justify-end bg-gray-900 text-white rounded-xl">

        <div className="w-3/5">
          <h3 className="mb-4 font-bold underline">চুলের জন্য উদ্ভাবনী ফর্মুলা</h3>
          <p className="text-sm">চুলের বৃদ্ধির জন্য Hair Surge Shampoo একটি অত্যন্ত মূল্যবান উন্নয়ন, এটি সমস্ত প্রয়োজনীয় পরীক্ষাগার পরীক্ষা এবং ট্রায়াল পাস করেছে। ভঙ্গুর, দুর্বল এবং প্রাণহীন চুলের যত্ন নেওয়ার ক্ষেত্রে সেরা ফলাফল অর্জনের জন্য একটি টিউবে যথেষ্ট উপাদান রয়েছে। পণ্যটি প্রত্যয়িত এবং সমস্ত আন্তর্জাতিক মানের সাথে সঙ্গতিপূর্ণ। যারা ইতোমধ্যে চুলের বৃদ্ধির জন্য এই পণ্যটি ব্যবহার করে দেখেছেন তাদের কাছ থেকে প্রচুর ইতিবাচক প্রতিক্রিয়া চুলের জন্য এর আসল কার্যকারিতা এবং উপকারিতা দেখায়।</p>
        </div>
      </div>
    </section>
  )
}

function Offer() {
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

function Faq() {
  return (
    <section className="">
      <div className="px-8 py-6 holder bg-orange-300 text-black rounded-xl">
        <div className="w-3/5 flex flex-col gap-4">
          {FAQS.map(item => (
            <div className="flex items-start gap-2" key={item}>
              <div className="flex-none w-6 h-6 bg-red-500"></div>
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function Testimonial() {
  return (
    <section className="">
      <div className="px-8 holder flex gap-8 bg-white text-black rounded-xl">
        <div className="flex-none w-1/5 h-full bg-blue-500">jkfakdfk</div>
        <div className="">
          <p>চুল পড়ার সমস্যা লিঙ্গ নির্বিশেষে কোনো না কোনোভাবে প্রত্যেককে প্রভাবিত করে। পরিবেশের আধুনিক গুণমান, কাজের চাপ এবং ভারসাম্যহীন খাদ্যাভ্যাস মাথার খুলি এবং চুলের অবস্থাকে আরও খারাপ করে তোলে। ফলস্বরূপ, চুল বিবর্ণ হয়ে যায়, তার শক্তি এবং ঘনত্ব হারায়, বিভক্ত প্রান্ত দেখা দেয়, চুল ভেঙে যায় এবং পড়ে যায়। একজন ট্রাইকোলজিস্ট হিসাবে, বছরের পর বছর ধরে অনুশীলনের সময়, আমি অনেক চিকিৎসার চেষ্টা করেছি যা রোগীদের তাদের চুল মজবুত করতে, চেহারা বজায় রাখতে এবং চুলের গঠন উন্নত করতে সাহায্য করতে বাড়িতে ব্যবহার করা যেতে পারে। Hair Surge Shampoo একটি আসল রত্ন! এটিতে প্রাকৃতিক উপাদান রয়েছে যা ভঙ্গুর এবং ক্ষতিগ্রস্থ চুলের এবং বিভক্ত প্রান্তে সহায়তা করে। এই পণ্যটির ক্লিনিকাল ট্রায়ালগুলো টাক পড়া এবং চুল পড়ার বিরুদ্ধে লড়াই করার জন্য এর কার্যকারিতা প্রমাণ করে।</p>
        
          <h3 className="text-2xl text-blue-500 font-bold">সুচন্দা বোশ, এমডি, ট্রাইকোলজিস্ট</h3>        
        </div>

      </div>
    </section>
  )
}

function HairTips() {
  return (
    <section className="">
      <div className="holder">
        <div className="py-6 px-8 bg-orange-300 text-black rounded-xl">
          <h3 className="mb-2 text-center text-2xl font-bold">স্বাস্থ্যকর চুলের জন্য তিনটি সহজ উপায়</h3>
          <p className="mb-4 text-center">সরলতা ও ব্যবহারের স্বাচ্ছন্দ্য চুলের যত্ন নেওয়ার প্রক্রিয়াটিকে আনন্দদায়ক এবং সাশ্রয়ী মূল্যের করে তোলে।</p>


          <div className="px-8 py-6 flex items-start justify-evenly gap-8">
            {HAIR_TIPS.map((item, index) => (
              <HairTipsCard index={index + 1} text={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HairTipsCard(props: { index: number, text: string }) {
  return (
    <div className="w-48">
      <div className="mb-4 mx-auto w-16 h-16 grid place-items-center bg-orange-500 text-3xl text-white font-bold rounded-full">{props.index}</div>
      <p className="text-center text-sm">{props.text}</p>
    </div>
  )
}

function ExtraUs() {
  return (
    <section className="">
      <div className="holder">
        {/* Top */}
        <div className="px-8 py-6 flex items-center justify-end relative bg-orange-300 rounded-xl overflow-hidden">
          <div className="w-[10rem] h-full absolute top-0 left-0 bg-gray-800"></div>

          <div className="w-[70%] flex flex-col gap-2">
            <h3 className="text-xl font-semibold">এর প্রভাব সারা বিশ্ব থেকে শত শত পুরুষ এবং মহিলাদের দ্বারা প্রমাণিত হয়েছে</h3>
            <div className="h-1 bg-orange-500"></div>
            <p className="">Hair Surge Shampoo চিকিৎসার সম্পূর্ণ 4-সপ্তাহের কোর্সটি চমকপ্রদ ফলাফল দেয়।</p>
          </div>
        </div>
        {/* Bottom */}
        <div className="px-8 py-6 flex items-start justify-evenly gap-8 bg-gray-900 rounded-xl overflow-hidden">
          {EXTRA_US.map(item => (
            <ExtraUsCard {...item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExtraUsCard(props: { name: string, des: string, src: string, points: string[] }) {
  return (
    <div className="">
      <h3 className="h-32 text-xl font-bold text-center">{props.name}</h3>
      <div className="mb-4 w-48 h-48 relative grid bg-gray-800 rounded-xl border-4 border-white">
        <div className="w-3/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 flex items-center justify-center font-bold bg-white text-black rounded-xl">{props.des}</div>
        {/* IMAGE */}
      </div>
      <div className="flex flex-col gap-2">
        {props.points.map(item => (
          <div className="flex items-start gap-2" key={item}>
            <div className="flex-none w-6 h-6 bg-red-500"></div>
            <p className="text-xs">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Ingridences() {
  return (
    <section className="">
      <div className="py-10 holder">
        <h3 className="mb-4 mx-auto text-center">"বিশেষজ্ঞরা হাজার হাজার সংমিশ্রণ নিয়ে গবেষণা করেছেন যা ট্রাইকো - প্রাইম ফর্মুলা ক্যাফেইন, মেন্থল এবং স পালমেটো তৈরি করতে চুলের বৃদ্ধিকে উদ্দীপিত করে। চিকিৎসাগতভাবে প্রমাণিত: Hair Surge Shampoo-এর সক্রিয় উপাদান ব্যবহারের প্রথম কয়েক দিনের মধ্যে কাজ করে:"</h3>

        <div className="flex flex-wrap justify-around gap-8">
          {INGREDENCES.map(item => (
            <IngridencesCard {...item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IngridencesCard(props: { name: string, img: string, reasons: string[] }) {
  return (
    <div className="w-48">
      <div className="mb-4 mx-auto w-32 h-32 bg-white"></div>
      <h4 className="mb-4 mx-auto text-xl font-bold text-center">{props.name}</h4>

      <div className="flex flex-col gap-2">
        {props.reasons.map(item => (
          <div className="flex items-start gap-2" key={item}>
            <div className="flex-none w-6 h-6 bg-red-500"></div>
            <p className="text-xs">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}



function WhyUs() {
  return (
    <section className="">
      <div className="holder">
        {/* Top */}
        <div className="pt-6 pb-2 relative bg-orange-500 rounded-tl-xl rounded-tr-xl">
          <div className=""></div>

          <h3 className="mb-4 font-semibold text-center">স্বাস্থ্যকর ও ঘন চুলকে হ্যাঁ বলুন</h3>
          <div className="px-24 flex items-start justify-evenly gap-4">
            {WHY_US_CARDS.map(item => (
              <WhyUsCard {...item} key={item.text} />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 pb-2 relative bg-orange-200 text-orange-500 rounded-bl-xl rounded-br-xl">
          <h3 className="mb-4 font-semibold text-center">কীভাবে দ্রুত আপনার চুলের পূর্বের সৌন্দর্য পুনরুদ্ধার করবেন?</h3>
          <div className="flex items-start justify-evenly">
            <WhyUsCard src="/step1.png" text="4 সপ্তাহের একটি সম্পূর্ণ কোর্স" key={0} />
            <div className="self-center text-6xl font-bold">...</div>
            <WhyUsCard src="/step2.png" text="আপনি সহজেই এই শ্যাম্পুটি পুরো এক মাস ব্যবহার করতে পারেন" key={1} />
            <div className="self-center text-6xl font-bold">...</div>
            <WhyUsCard src="/step3.png" text="ঘন, স্বচ্ছন্দগতির চুলের প্রভাব" key={2} />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyUsCard(props: { src: string, text: string }) {
  return (
    <div className="w-36 px-4 py-2 flex flex-col items-center justify-center gap-2">
      <div className="w-20 h-20 grid">
        <Image className="w-full h-full object-container" src={props.src} width={100} height={100} alt={props.text} />
      </div>
      <p className="max-w-[20ch] text-sm text-center">{props.text}</p>
    </div>
  )
}

function Hero() {
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

          {/* Clock */}
          <Clock />

          <button className="px-4 py-2 font-semibold bg-orange-500 border border-white rounded-full">অর্ডার করুন</button>
        </div>
      </div>
    </section>
  )
}

function Clock() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-10 h-10 grid place-items-center text-xl font-bold bg-orange-500 rounded-lg shadow-md">00</div>
      <span className="font-bold">:</span>
      <div className="w-10 h-10 grid place-items-center text-xl font-bold bg-orange-500 rounded-lg shadow-md">23</div>
      <span className="font-bold">:</span>
      <div className="w-10 h-10 grid place-items-center text-xl font-bold bg-orange-500 rounded-lg shadow-md">30</div>
    </div>
  )
}