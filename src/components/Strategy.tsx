import { useEffect, useState } from "react";
import { Button } from "./Button";
import { StrategyCard } from "./StrategyCard";
import { IStrategyCard } from "../types/StrategyCard";

export function Strategy() {

    const [strategyCards, setstrategyCards] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/strategyCards")
        .then(response => response.json())
       /* .then(data => console.log(data)) */
        .then((data) => setstrategyCards(data))
    }, [])

    return (
        <section className="strategy">
				<div className="container strategy-container">
					<div className="left">
						<h2>Here are 3 working steps to organize our projects.</h2>
						<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
							Etiam porta sem malesuada magna mollis euismod. 
							Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
						</p>
						<p>
							Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. 
							Aenean lacinia bibendum nulla sed consectetur.
						</p>
						{/* <a className="btn-primary" href="">Learn More</a> */}
                        <Button content="Learn More" href="/strategy"/> 
					</div>
					<div className="right">
						<div className="strategy-cards-container">
							{/* <div className="strategy-card first">
								<div className="order">01</div>
								<div className="info">
									<h3>Collect ideas</h3>
									<p>Nulla vitae elit libero pharetra dapibus.</p>
								</div>
							</div>
							<div className="strategy-card second">
								<div className="order">01</div>
								<div className="info">
									<h3>Collect ideas</h3>
									<p>Nulla vitae elit libero pharetra dapibus.</p>
								</div>
							</div>
							<div className="strategy-card third">
								<div className="order">01</div>
								<div className="info">
									<h3>Collect ideas</h3>
									<p>Nulla vitae elit libero pharetra dapibus.</p>
								</div>
							</div> */}
                            {strategyCards.map((card: IStrategyCard) => (
                                <StrategyCard 
                                key={card.id}
                                {...card} />
                            ))}
						</div>                 
					</div>
				</div>
			</section>
    )
}