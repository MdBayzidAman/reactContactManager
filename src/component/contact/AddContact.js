import React, { Component } from 'react';



class AddContact extends Component {
	
	constructor(){
		super();
		
		this.state = {
			
			name:"",
			email:"",
		};

	};
	
	
	
	contactSubmit=(e)=>{
		e.preventDefault();
		
		if(this.state.name==="" || this.state.email==="" ){
			alert("All the fields are mandatory");
			return;
		}
		
		
		this.props.addContactHendel(this.state);
		
		this.setState({name:"", email:""});
		//console.log(this.props);
		this.props.history.push("/");
	};
	

	
	render(){

		
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<h3 className="col-md-12 py-3 mt-4">Add Contact</h3>
							
							<form onSubmit={this.contactSubmit} className="row" >
								<div className="col-md-4 mb-3">
								  <input
								  onChange={(e)=>this.setState({name: e.target.value})} 
								  type="text" 
								  name="Name"
								  value={this.state.name}
								  className="form-control" 
								  placeholder="Enter Full Name"/>
								  
								</div>
								<div className="col-md-4 mb-3">
								  <input 
								  onChange={(e)=>this.setState({email: e.target.value})} 
								  type="email" 
								  name="email"
								  value={this.state.email}
								  className="form-control" 
								  placeholder="name@example.com"/>
								  
								</div>
								<div className="col-md-4 mb-3">
								  <input type="submit" value="Add Contact"  className="btn btn-outline-primary" />
								</div>
								
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
	};
}

export default AddContact;

