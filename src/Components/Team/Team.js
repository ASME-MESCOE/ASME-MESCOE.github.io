import React from "react";
import Teamdata from "./TeamData";

const Teamcard = () => {
	return (
		<div className="container py-5">
			<div className="row mb-4">
				<div className="col-md-12">
					<h2 className="display-4 font-weight-light text-center">Our Team</h2>
				</div>
			</div>

			<div className="row text-center">
				{/* <!-- Team item--> */}
				{Teamdata.map((item) => {
					return (
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-secondary rounded shadow-sm py-3 px-3">
								<img
									src={item.Photo}
									alt=""
									width="200"
									height="200"
									className="img-fluid rounded-circle mb-2 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0 text-black">{item.Name}</h5>
								<span className="small text-black text-capitalize desg">
									{item.Designation}
								</span>
								<ul className="social mb-0 list-inline mt-3">
									
									<li className="list-inline-item">
									<a href={item.Linkedin} className="social-link"><i class="fa-brands fa-linkedin"></i></a>
									</li> 
									
									<li className="list-inline-item">
									<a href={item.Instagram} className="social-link"><i class="fa-brands fa-instagram"></i></a>
									</li> 
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Teamcard;
