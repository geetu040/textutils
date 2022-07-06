import React from 'react'

export default function About(props) {
	return (<>
		<div className={`container-fluid px-5 py-1 bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`} style={{height: "100vh"}}>
			<h1 className='my-4 mx-2'>About Us</h1>
			<div className="accordion" id="accordionExample">
				<div className={`accordion-item bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}>
					<h2 className="accordion-header" id="headingOne">
						<button className={`bg-${props.mode} text-${props.mode==="dark"?"light":"dark"} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							<strong> Analyze Your Text </strong>
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							You can anylyze your text Here.
							<li> Convert to Upper Case </li>
							<li> Convert to Lower Case </li>
							<li> Remove Extra spaces </li>
						</div>
					</div>
				</div>
				<div className={`accordion-item bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}>
					<h2 className="accordion-header" id="headingTwo">
						<button className={`bg-${props.mode} text-${props.mode==="dark"?"light":"dark"} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							<strong> Free to Use </strong>
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							You can access this free to use text utils app on you phone and on your computer.
						</div>
					</div>
				</div>
				<div className={`accordion-item bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}>
					<h2 className="accordion-header" id="headingThree">
						<button className={`bg-${props.mode} text-${props.mode==="dark"?"light":"dark"} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							<strong> Browser Compatibility </strong>
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							The app is compatible with different browsers <br />
							You can use it on
							<li>Chrome</li>
							<li>Brave</li>
							<li>Internet Explorer</li>
							<li>Firefox</li>
							<li>Opera</li>
							<li>Microsoft Edge</li>
							<li>Safari</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>)
}