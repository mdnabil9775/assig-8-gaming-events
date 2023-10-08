import{ useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Banner = ()=>{

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

    return(
        <div className="carousel w-full lg:h-[80vh] ">
  <div  id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/6WNV737/banner2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-gray-600">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-gray-600">❯</a>
    </div>
    <div className=" absolute flex flex-col top-1/3 left-48">
        <div className="">
          <p className="text-gray-200 pt-4 text-8xl font-bold">WE FALL. <br />
THEN WE RISE.</p>
        <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-4xl font-bold py-3 px-5 my-6 rounded-lg text-white bg-gradient-to-r from-gray-900 to-blue-200"><span className="text-red-600">E</span>xplore <span className=" text-gray-800">M</span>ore</button>
        
        
        </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/MGvmXD4/banner3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-gray-600">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-gray-600">❯</a>
    </div>
    <div className=" absolute flex flex-col top-1/3 left-48">
        <div className="">
          <p className="text-gray-200 pt-4 text-8xl font-bold">WE FALL. <br />
THEN WE RISE.</p>
        <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-4xl font-bold py-3 px-5 my-6 rounded-lg text-white bg-gradient-to-r from-gray-900 to-blue-200"><span className="text-red-600">E</span>xplore <span className=" text-gray-800">M</span>ore</button>
        
        
        </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/72zTpH0/banner.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-gray-600">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-gray-600">❯</a>
    </div>
    <div className=" absolute flex flex-col top-1/3 left-48">
        <div className="">
          <p className="text-gray-200 pt-4 text-8xl font-bold">WE FALL. <br />
THEN WE RISE.</p>
        <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-4xl font-bold py-3 px-5 my-6 rounded-lg text-white bg-gradient-to-r from-gray-900 to-blue-200"><span className="text-red-600">E</span>xplore <span className=" text-gray-800">M</span>ore</button>
        
        
        </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qkwGkSS/banner4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-gray-600">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-gray-600">❯</a>
    </div>
    <div className=" absolute flex flex-col top-1/3 left-48">
        <div className="">
          <p className="text-gray-200 pt-4 text-8xl font-bold">WE FALL. <br />
THEN WE RISE.</p>
        <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-4xl font-bold py-3 px-5 my-6 rounded-lg text-white bg-gradient-to-r from-gray-900 to-blue-200"><span className="text-red-600">E</span>xplore <span className=" text-gray-800">M</span>ore</button>
        
        
        </div>
    </div>
  </div>
</div>
    )
}
export default Banner;