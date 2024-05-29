export default function Clock() {
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