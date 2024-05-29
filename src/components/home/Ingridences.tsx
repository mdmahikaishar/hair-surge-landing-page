import { INGREDENCES } from "@/constances"

export default function Ingridences() {
    return (
      <section className="">
        <div className="py-10 holder">
          <h3 className="mb-8 mx-auto text-xl text-center">"বিশেষজ্ঞরা হাজার হাজার সংমিশ্রণ নিয়ে গবেষণা করেছেন যা ট্রাইকো - প্রাইম ফর্মুলা ক্যাফেইন, মেন্থল এবং স পালমেটো তৈরি করতে চুলের বৃদ্ধিকে উদ্দীপিত করে। চিকিৎসাগতভাবে প্রমাণিত: Hair Surge Shampoo-এর সক্রিয় উপাদান ব্যবহারের প্রথম কয়েক দিনের মধ্যে কাজ করে:"</h3>
  
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