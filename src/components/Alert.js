import React from 'react'

export default function Alert(props){
	let myStyle = {
		position: "absolute",
		width: "92vw",
		left: "4vw",
		margin: "100px 0px",
	}
	return (
		props.alert && <div className="alert alert-success my-0" role="alert" style={myStyle}>
			<strong>{props.alert.head}!</strong> {props.alert.msg}
		</div>
	)
}
