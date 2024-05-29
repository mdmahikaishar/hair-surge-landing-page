import { Clock } from "../common";
import { InputWrapper } from "../ui/Input";

export default function OrderNow() {
    return (
      <section className="">
        <div className="holder px-8 py-6 bg-gray-900 text-white rounded-xl">
          <div className="mb-8 w-4/6">
            <h3 className="mb-4 text-2xl font-bold">অর্ডার করুন এবং একটি উপহার পান</h3>
            
            <div className="flex items-start gap-8">
              {/* FORM */}
              <form className="w-3/5 flex flex-col gap-4">
                <InputWrapper>
                  <select className="w-full bg-transparent outline-none text-inherit">
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
                <h3 className="text-xl">Hair Surge Shampoo চুল বৃদ্ধির জন্য</h3>
                <p className="text-sm">চুলের যত্ন নেওয়ার জন্য Maxi-Growth কমপ্লেক্সের সাহায্যে তাৎক্ষণিকভাবে চুলের গঠন পুনরুদ্ধার করার জন্য একটি এক্সপ্রেস ট্রিটমেন্ট এবং লোমকূপ উদ্দীপনা!</p>
              </div>
            </div>
          </div>
  
          <div className="w-4/6">
            <p className="text-sm">পণ্যটি প্রত্যয়িত, উপাদানের তালিকা, নির্দেশাবলী এবং ব্যবহারের জন্য ইঙ্গিতগুলি লেবেলে তালিকাভুক্ত করা হয়েছে। পেমেন্ট প্রাপ্তির পরে (ক্যাশ অন ডেলিভারি)।</p>
          </div>
        </div>
      </section>
    )
  }