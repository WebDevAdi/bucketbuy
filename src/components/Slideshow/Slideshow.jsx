import React, { useEffect } from 'react'

function Slideshow() {

    const slideshowImages = [
        "https://res.cloudinary.com/dfwnkq7an/image/upload/v1705401640/t7xgzc3fn9yeafhv91zs.jpg",
        "https://res.cloudinary.com/dfwnkq7an/image/upload/v1705401634/ezkwjwjh3tyi4olbekkn.jpg",
        "https://res.cloudinary.com/dfwnkq7an/image/upload/v1705401633/itu5wtgmvwhihon911mj.jpg",
        "https://res.cloudinary.com/dfwnkq7an/image/upload/v1705401619/zkoso38wd6k3hc4de51z.jpg",
        "https://res.cloudinary.com/dfwnkq7an/image/upload/v1705401606/amogku75h1ybzkoqg6gs.jpg"
    ]

    let index = 0

    function handleNextClick(){
        let allImages = document.querySelectorAll('.images')
        index+=1
        if(index===allImages.length){
            index = 0
        }
        slideshow()
    }

    function handlePreviousClick(){
        let allImages = document.querySelectorAll('.images')
        index-=1
        if(index<0){
            index = allImages.length-1
        }
        slideshow()
    }

    function slideshow() {
        let allImages = document.querySelectorAll('.images')
        allImages[index].classList.remove('hidden')

        Array.from(allImages).forEach((image)=>{
            if(image !== allImages[index]){
                image.classList.add('hidden')
            }
        })

        
        
    }

    // setInterval(() => {
    //   handleNextClick()
    // }, 5000)
    

    useEffect(()=>{
        slideshow()
    },[])
  return (
    <div className='flex flex-col  relative shadow-lg shadow-slate-300' >
        {slideshowImages && slideshowImages.map((url)=>{
            return <div key={url} className='images'  >
                <img src={url} className='aspect-[16/4]' alt="" />
            </div>
        })}

        <div className='absolute flex justify-between h-full items-center w-full '>
           <div className='flex justify-between w-full'>
           <div className='mx-5 cursor-pointer h-2 w-2 md:h-5 md:w-5 rounded-full bg-slate-200 shadow-md shadow-slate-300 flex justify-center items-center p-2 text-sm md:text-md md:p-5' onClick={handlePreviousClick}><i className="fa-solid fa-less-than"></i></div>
            <div className='mx-5 cursor-pointer h-2 w-2 md:h-5 md:w-5 rounded-full bg-slate-200 shadow-md shadow-slate-300 flex justify-center items-center p-2 md:text-md md:p-5' onClick={handleNextClick}><i className="fa-solid fa-greater-than"></i></div>
           </div>
        </div>
    </div>
  )
}

export default Slideshow
