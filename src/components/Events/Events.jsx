import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Event from "./Event";


const Events = () =>{
    const [events , setEvents] = useState([])
    console.log(events)
    useEffect(()=>{
        fetch('gaming.json')
        .then(result => result.json())
        .then(events => setEvents(events))
    },[])
    return(
        <div className=" container mx-auto">
            <h1 className="text-6xl text-white text-center py-10 font-extrabold">Our Events</h1>
            <hr />
            <div>
            {
                events.map((event, index)=> <Event key={index} event={event}></Event>)
            }
            </div>
        </div>
    )
}
export default Events;