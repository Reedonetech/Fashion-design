import React from 'react'
import img9 from '../Image/happy-confident-female-fashion-designers.jpg'

const Herobody4 = () => {
  return (
    <div>
        <div className='flex flex-col border-r-indigo-600 lg:pt-[2%]  lg:px-10 px-[20px] lg:gap-[30px] justify-center'>
            <div className='flex flex-col items-center justify-start p-2 px-[40px] w-[100%] h-[100%]'>
                <p className='text-[30px] font-mono font-bold'>Featured Project</p>
                <p className='text-center w-[40vw] text-[40px]'>Offering a unique and stylish perspective on fashion</p>
            </div>
            <div className='flex w-[100%] h-[30%] bg-white shadow-2xl p-4 px-[40px] gap-[20px]'>
                <div className='bg-red-600 w-[38%] h-[100%] flex flex-col items-start rounded-br-full justify-center p-4 gap-[10px]'>
                    <img className='w-[500px] h-[200px] rounded-br-full' src={img9} alt="" />
                    <p className='text-[25px] font-mono font-bold'>Special Event Styling</p>
                    <p className='text-[18px] w-[25vw] text-start'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                </div>
                <div className='bg-red-600 w-[38%] h-[100%] flex flex-col items-start justify-center rounded-bl-full p-4 gap-[10px]'>
                    <img className='w-[500px] h-[200px] rounded-bl-full' src={img9} alt="" />
                    <p className='text-[25px] font-mono font-bold'>Special Event Styling</p>
                    <p className='text-[18px] w-[25vw] text-start'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                </div>
                <div className='bg-red-600 w-[38%] h-[100%] flex flex-col items-start rounded-tr-full justify-center p-4 gap-[10px]'>
                    <img className='w-[500px] h-[200px] rounded-tr-full' src={img9} alt="" />
                    <p className='text-[25px] font-mono font-bold'>Special Event Styling</p>
                    <p className='text-[18px] w-[25vw] text-start'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobody4