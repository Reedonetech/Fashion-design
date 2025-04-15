import React from 'react'
import img8 from '../Image/fashion-designer-drawing-sketch.jpg'

const Herobody3 = () => {
  return (
    <div>
        <div className='flex flex-col bg-orange-600 lg:pt-[2%]  lg:px-10 px-[20px] lg:gap-[30px] justify-center'>
            <div className='flex flex-col w-[100%] h-[30%] bg-white shadow-2xl p-4 px-[40px] gap-[10px] items-center'>
                <p className='text-[30px] font-mono font-bold'>Our Core Business</p>
                <p className='text-[36px] font-serif w-[40vw] font-bold text-center'>Offering a unique and stylish perspective on fashion.</p>
                <p className='text-center w-[47vw] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='flex w-[100%] h-[30%] bg-white shadow-2xl p-4 px-[40px] gap-[20px]'>
                <div className='bg-red-600 w-[38%] h-[100%] flex flex-col items-center justify-center p-4 gap-[10px]'>
                    <img className='w-[500px] h-[200px]' src={img8} alt="" />
                    <p className='text-[25px] font-mono font-bold'>Design for Personal</p>
                    <p className='text-[18px] w-[25vw] text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                </div>
                <div className='bg-red-600 w-[38%] h-[100%] flex flex-col items-center justify-center p-4 gap-[10px]'>
                    <img className='w-[500px] h-[200px]' src={img8} alt="" />
                    <p className='text-[25px] font-mono font-bold'>Mass Production</p>
                    <p className='text-[18px] w-[25vw] text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                </div>
                <div className='bg-red-600 w-[38%] h-[100%] flex flex-col items-center justify-center p-4 gap-[10px]'>
                    <img className='w-[500px] h-[200px]' src={img8} alt="" />
                    <p className='text-[25px] font-mono font-bold'>Special Event Styling</p>
                    <p className='text-[18px] w-[25vw] text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                    <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobody3