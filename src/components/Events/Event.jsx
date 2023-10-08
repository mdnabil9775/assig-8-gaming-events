import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Event = ({event}) =>{
console.log(event)
    const {id, cover, title, bg_color, data_aos, price, rating} = event;

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div data-aos={data_aos} data-aos-offset="300"
        data-aos-easing="ease-in-sine" style={{backgroundColor:bg_color}} className="flex flex-col md:flex-row lg:flex-row items-center w-4/5 mx-auto rounded-xl my-10">
            <img className=" h-80 w-2/5 rounded-l-xl" src={cover} alt="" />
            <div className="block mx-auto">
                <h1 className="text-4xl text-black font-semibold">{title}</h1>
                <hr className="bg-black h-[2px]" />
                <div className="flex items-center justify-between mt-5">
                    <p>Price: {price}$</p>
                    <p>Rating: {rating}</p>
                </div>
                <Link to={`/details/${id}`}><button className="btn mt-8 mx-auto block">See Details</button></Link>

            </div>

        </div>
    )

}
export default Event;