import { useEffect, useState } from "react";
import { Testimonial } from "./Testimonial";
import { ITestimonial } from "../types/testimonial";

export function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/testimonials")
        .then(response => response.json())
        /* .then(data => console.log(data)) */
        .then((data) => setTestimonials(data))
    }, [])    

    return(
        <section className="testimonials">
				<div className="container">
					<h2>Don't take our word for it. See what customers are saying about us.</h2>
					<div className="testimonials-list">
						{/* <div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div>
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div>   */}

                        {testimonials.map((item: ITestimonial) => (
                            <Testimonial key={item.id}  {...item} />
                        ))}   

					</div>
				</div>
			</section>
    )
}