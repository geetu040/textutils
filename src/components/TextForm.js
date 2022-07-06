import React, { useState } from 'react'


export function TextForm({heading, mode, showAlert}) {
	const [text, setText] = useState('')
	const handleUpClick = ()=>{
		setText(text.toUpperCase());
		showAlert("Success", "Converted to UpperCase")
	}
	const handleLoClick = ()=>{
		setText(text.toLowerCase());
		showAlert("Success", "Converted to LowerCase")
	}
	const handleClearClick = ()=>{
		setText("");
		showAlert("Success", "Cleared Text")
	}
	const handleCopyClick = ()=>{
		var copyText = document.getElementById("myBox");
		copyText.select();
		navigator.clipboard.writeText(copyText.value);
		document.getSelection().removeAllRanges()
		showAlert("Success", "Text Copied")
	}
	const handleExtraSpacesClick = ()=>{
		setText(text.replace(/\s+/g, ' ').trim());
		showAlert("Success", "Extra Spaces Removed")
	}

	return (<>
		<div className={`bg-${mode} py-3 my-0`} style={{width: "100%", height:"100%"}}>
			<div className={`container mt-5 bg-${mode} text-${mode === "dark"? "light": "dark"}`}>
				<h1>{heading}</h1>
				<div className="my-4">
					<textarea value={text} onChange={(event)=>{setText(event.target.value)}} className="bg-light form-control" id="myBox" rows="8"></textarea>
				</div>
				<div className="d-flex flex-row flex-wrap">
					<button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
					<button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
					<button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>Clear Text</button>
					<button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleCopyClick}>Copy Text</button>
					<button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
				</div>
			</div>
			<div className={`container mt-4 bg-${mode} text-${mode==="dark"? "light":"dark"}`}>
				<h1>Your Text Summary</h1>
				<p>{text.split(/\s+/).filter((e)=>{return e!==""}).length} words and {text.length} characters</p>
				<p>{0.008 * text.split(" ").length} Minutes read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</div>
		
	</>);
}