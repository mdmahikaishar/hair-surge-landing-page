export default function InputWrapper({children}: {children: React.ReactNode}) {
    return (
      <div className="h-10 px-4 flex items-center gap-4 bg-white text-red-500 rounded-xl">
        <div className="w-6 h-6 bg-red-500"></div> 
        <div className="w-full">
          {children}
        </div>
      </div>
    )
  
  }