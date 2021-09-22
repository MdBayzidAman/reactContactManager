//import logo from './logo.svg';
import react, {useState, useEffect} from 'react';
import './App.css';

import Header from './component/header/Header.js';
import Contact from './component/contact/Contact.js';
import AddContact from './component/contact/AddContact.js';


//import {bootstrap} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	
	const [contactList, setContact] = useState([]);
	const LOCAL_STORAGE_KEY ="contactList";
	
	const addContactHendel=(contact)=>{
		console.log(contact);
		setContact([...contactList, {id: uuid(), ...contact}]);
	};
	
	
	useEffect(()=>{
		const getdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(getdata) setContact(getdata);
		
	},[]);
	
	useEffect(()=>{

		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactList));
		
	},[contactList]);
	

	const deleteContact=(id)=>{
		
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
