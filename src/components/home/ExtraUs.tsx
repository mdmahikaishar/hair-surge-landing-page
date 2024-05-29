import { EXTRA_US } from "@/constances"

export default function ExtraUs() {
    return (
      <section className="">
        <div className="holder">
          {/* Top */}
          <div className="px-8 py-6 flex items-center justify-end gap-8 relative bg-orange-300 rounded-xl overflow-hidden">
            <div className="w-2/5 h-full absolute top-0 left-0 bg-gray-800"></div>
  
  {/* Text */}
            <div className="w-3/5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">এর প্রভাব সারা বিশ্ব থেকে শত শত পুরুষ এবং মহিলাদের দ্বারা প্রমাণিত হয়েছে</h3>
              <div className="h-[1px] bg-orange-500"></div>

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
      <div className="w-48">
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