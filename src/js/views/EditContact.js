import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	let partial = store.contacts[props.match.params.index];
	let id = props.match.params.id;
	const [phone, setPhone] = useState(partial ? partial.phone : "");
	const [name, setName] = useState(partial ? partial.full_name : "");
	const [email, setEmail] = useState(partial ? partial.email : "");
	const [address, setAddress] = useState(partial ? partial.address : "");

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">EditContact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
							defaultValue={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
							defaultValue={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
							defaultValue={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
							defaultValue={address}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editContact(id, name, phone, email, address);
							}}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: propTypes.object
};
