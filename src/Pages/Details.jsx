import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";



    const Details = () =>{
        const events  = useLoaderData()
        const [eventDetails , setEventDetails] = useState({})
        const {id} = useParams()

        const {cover, title, details, release_date} = eventDetails;
        useEffect(()=>{
            const finDetails = events?.find(event => event.id == id)
           setEventDetails(finDetails)
        },[id, events])
        useEffect(()=>{
            AOS.init();
            AOS.refresh();
        },[])

        return(
            <div style={{backgroundImage:"url(" + cover + ")",  opacity: 0.8 }}   className="home h-[100vh] bg-no-repeat bg-cover">
                <div className=" container mx-auto">
                
                
                <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className="bg-gradient-to-br from-gray-900 to-blue-400 opacity-80 w-3/5 mx-auto">
                <h1 className="text-white text-center text-6xl py-10 font-bold">{title}</h1>
                <h1 className="text-4xl text-center">Details</h1>
                <hr className="py-5" />
                <h1 className="text-3xl font-semibold text-green-600 text-center">This Event will Release :{release_date}</h1>
                <p className="text-2xl text-center px-12">{details}</p>
                <div className="flex justify-center gap-x-5 py-9">
                    <button className="btn hover:bg-black hover:text-white">Join Event</button>
                    <Link to={`/`}><button className="btn hover:bg-black hover:text-white">Back Home</button></Link>
                </div>
                </div>
                
                </div>
            </div>
        )
    }
    export default Details;