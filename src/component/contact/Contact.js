import React from 'react';

//import userImg from '../../image/user.jpg';
import PeopleCard from './PeopleCard';
import {Link, NavLink} from 'react-router-dom';


function Contact(Props) {
	
	//console.log(Props.contact);
	
	
	const deleteContact=(id)=>{
		Props.getContactId(id);
	}	
	
	
	
	const contact=[
		//{id:'1', name:'Bayzid aman', email:'bayzidaman@gmail.com',},
	];
	const contactList=Props.contact.map((data, index)=>{
		return (
			<PeopleCard key={data.key} data={data} name={data.name} email={data.email} deleteContact={deleteContact}/>
		);
	});
	

	
	return (
		<>
		<div className="container pb-5">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row align-items-center">
						<h3 className="col-md-10 py-3 mt-4">Contact List</h3>
						<div className="col-md-2">
						  <NavLink to="/add" >
							<button className="btn btn-primary" >Add contact</button>
						  </NavLink>
						</div>
						
						{contactList}
						
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Contact;