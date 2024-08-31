import { useEffect, useState } from "react";
import { IFaq } from "../types/faq";
import { FAQ } from "./FAQ";
import { Button } from "./Button";

export function FAQS() {

    const [faqs, setFaqs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/faqs")
        .then(response => response.json())
        /* .then(data => console.log(data)) */
        .then((data) => setFaqs(data))
    }, [])  

    return(
        <section className="faqs">
				<div className="container faqs-container">
					<div className="left">
						<h2>If you don't see an answer to your question, you can send us an email from our contact form.</h2>
						<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
							Nullam quis risus eget urna mollis ornare.
						</p>
                        <Button content="All FAQ" href="/faqs"/>
						{/* <a className="btn-primary" href="">All FAQ</a> */}
					</div>
					<div className="right">
						<div className="faqs-list">
							{/* <div className="faqs-item">
								<details>
									<summary>How do I get my subscription receipt?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
							<div className="faqs-item">
								<details>
									<summary>Are there any discounts for people in need?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
							<div className="faqs-item">
								<details>
									<summary>Do you offer a free trial edit?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
							<div className="faqs-item">
								<details>
									<summary>How do I reset my Account password?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div> */}

                            {faqs.map((item: IFaq) => (
                                <FAQ key={item.id} {...item}/>
                            ))}

						</div>
					</div>
				</div>
			</section>
    )
}