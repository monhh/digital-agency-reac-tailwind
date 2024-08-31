import { ServiceItem } from "./ServiceItem";
//import serviceImage from '../assets/images/services/service1.png';
import { useEffect, useState } from "react";
import { IServiceItem } from "../types/ServiceItem";


export function Services() {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/services")
        .then(response => response.json())
       /* .then(data => console.log(data)) */
        .then((data) => setServices(data)) 
    }, [])

    /* console.log(services, "services"); */
    

    return (
        <section className="services">
            <div className="container">
                <h2>The service we offer is specifically designed to meet your needs.</h2>
                <div className="services-list">
                    {/* <ServiceItem 
                        image = {serviceImage} 
                        title = "Web Design"
                        description = "Description"
                    /> */}
                    {services.map((service: IServiceItem) => (
                        <ServiceItem
                            key={service.id} 
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
