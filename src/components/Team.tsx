import { useEffect, useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';
import userIcon from '../assets/images/icons/user.svg';
import trophyIcon from '../assets/images/icons/trophy.svg';
import { Teammate } from './Teammate';
import { ITeammate } from '../types/teanmate';

export function Team() {

    const [teammates, setTeammates] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/team")
        .then(response => response.json())
        /* .then(data => console.log(data)) */
        .then((data) => setTeammates(data))
    }, [])

    return (
        <section className="team">
				<div className="container team-container">
					<div className="info">
						<h2>We are proud of our design team</h2>
						<p>Just sit back and relax while we take care of your business needs for you.</p>
					</div>
					<div className="team-statistics">
						<div className="team-statistics-item">
							<div className="image">
								<img src={checkIcon} alt="" />
							</div>
							<h3>1000+</h3>
							<p>Commpleted projects</p>
						</div>
						<div className="team-statistics-item">
							<div className="image">
								<img src={userIcon} alt="" />
							</div>
							<h3>50k</h3>
							<p>Happy customers</p>
						</div>
						<div className="team-statistics-item">
							<div className="image">
								<img src={trophyIcon} alt=""	/>
							</div>
							<h3>20k</h3>
							<p>Awards won</p>
						</div>
					</div>
					<div className="team-list">
						{/* <div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div> */}
                        {/* <Teammate /> */}
                        {teammates.map( (item : ITeammate) => (
                            <Teammate key={item.id} {...item} />
                        ))}
					</div>
				</div>
			</section>
    )
}