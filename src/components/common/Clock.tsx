export default function Clock() {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="w-16 h-16 grid place-items-center text-2xl font-bold bg-orange-500 rounded-lg shadow-md">00</div>
        <span className="font-bold text-2xl">:</span>

        <div className="w-16 h-16 grid place-items-center text-2xl font-bold bg-orange-500 rounded-lg shadow-md">23</div>
        <span className="font-bold text-2xl">:</span>
        
        <div className="w-16 h-16 grid place-items-center text-2xl font-bold bg-orange-500 rounded-lg shadow-md">30</div>
      </div>
    )
  }