//import logo from './logo.svg';
import react, {useState, useEffect} from 'react';
import './App.css';

import Header from './component/header/Header.js';
import Contact from './component/contact/Contact.js';
import AddContact from './component/contact/AddContact.js';
import PeopleDetails from './component/contact/PeopleDetails.js';
import EditContact from './component/contact/EditContact.js';
import api from './api/contact';

//import {bootstrap} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	
	const [contactList, setContact] = useState([]);
	const LOCAL_STORAGE_KEY ="contactList";
	
	
	const getContact= async()=>{
		const response = await api.get("/contact");
		return response.data;
	};
	
	
	const addContactHendel= async (contact)=>{
/* 		console.log(contact);
		setContact([...contactList, {id: uuid(), ...contact}]); */
		
		const request={
			id:uuid(),
			...contact
		};
		
		const response =await api.post('/contact', request);
		setContact([...contactList, response.data]);
		console.log(response);
	};
	
	
	
	//		UPDATE  CONTACTS 
	const updateContactHendel= async (contactInfo)=>{
	
		const response =await api.put(`/contact/${contactInfo.id}`, contactInfo);
		const {id, name, email} = response.data;
		
		setContact(
			contactList.map((contactInfo)=>{
				return contactInfo.id===id? {...response.data} : contactInfo;
			})
		);
		console.log(response);
	};
	
	
	useEffect(()=>{
		/* const getdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(getdata) setContact(getdata); */
		
		const getAllContact = async()=>{
			const allContact = await getContact();
			if(allContact) setContact(allContact);
		};
		
		getAllContact();
		
	},[]);
	
	useEffect(()=>{

		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactList));
		
	},[contactList]);
	

	const deleteContact= async(id)=>{
		
		await api.delete(`/contact/${id}`);
		
		const removelId = contactList.filter((contact)=>{
			return contact.id !== id;
		});
		
		setContact(removelId);
	};
	
	
  return (
    <>
		<Header/>
		<Router>
			<Switch>
			
				<Route
				exact
				path="/"
				render={(props)=> <Contact {...props} contact={contactList} getContactId={deleteContact}/>}
				/>		{/* passing props in route */}
				
				<Route
				path="/add"
				render={(props)=> <AddContact {...props} addContactHendel={addContactHendel} />} 		
				/>		{/* passing props in route */}
				
				<Route path="/contact/:id" component={PeopleDetails} />
				
				<Route path="/edit/:id"
				render={(props)=><EditContact {...props} updateContactHendel={updateContactHendel} />}
				/>
				
			</Switch>
		</Router>
		
		
		{/*
		<AddContact addContactHendel={addContactHendel} />
		<Contact contact={contactList} getContactId={deleteContact}/>

		*/}		
    </>
  );
}

export default App;
