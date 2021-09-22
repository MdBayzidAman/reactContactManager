import React from 'react';

import {Link, NavLink} from 'react-router-dom';
import userImg from '../../image/user.jpg';


function PeopleCard(props){
	
	const {id, name, emial} = props.data;
	
	return (
		<>
			<div className="card shadow-sm" >
			  <div className="row g-0 align-items-center">
				<div className="col-md-1">
				  <img src={userImg} className="userImg" alt="user Image" />
				</div>
				<div className="col-md-9">
				  <NavLink to={`/contact/${id}`} >
					<div className="card-body">
						<h5 className="card-title"> {name}</h5>
						<p className="card-text">Email: {props.email}</p>
					</div>
				  </NavLink>
				</div>
				<div className="col-md-2 d-flex justify-content-evenly fs-3">
					<i className="bi bi-pencil-square cg"></i>
					<i className="bi bi-trash cr" onClick={()=>props.deleteContact(id)} ></i>
				</div>
			  </div>
			</div>
		</>
	);
}

export default PeopleCard;