import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							data-dismiss="modal"
							onClick={() => props.onClose()}>
							Oh no!
						</button>
						<button type="button" className="btn btn-secondary" onClick={() => actions.deleteContact()}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
	onClose: PropTypes.func,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.propTypes = {
	modal: PropTypes.string,
	show: false,
	onClose: null
};
