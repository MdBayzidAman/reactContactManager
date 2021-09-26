import React from 'react';

import {Link, NavLink} from 'react-router-dom';
import userImg from '../../image/user.jpg';


function PeopleDetails(props){
	
	const {name, email} = props.location.state.contact;
	
	return (
		<>
			<div className="container my-5">
				<div class="row">
					<div class="col-4 mx-auto">
						<div className="card shadow-sm text-center" >
						  <img src={userImg} className="" alt="Image" />
						  <div className="card-body text-center">
							<h5 className="card-title">{name}</h5>
							<p className="card-text">{email}</p>
						  </div>
						</div>
						<div class="pt-3">
						 <Link to="/" >
							<button className="btn btn-outline-primary" >
							Back to contact list.
							</button>
						  </Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PeopleDetails;