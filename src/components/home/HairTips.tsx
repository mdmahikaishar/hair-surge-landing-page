import { HAIR_TIPS } from "@/constances"

export default function HairTips() {
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
        <div className="mb-4 mx-auto w-16 h-16 grid place-items-center bg-red-500 text-3xl text-white font-bold rounded-full">{props.index}</div>
        <p className="text-center font-bold text-sm">{props.text}</p>
      </div>
    )
  }