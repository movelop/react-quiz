import React from 'react';
import './LandingPage.css';
import banner from './undraw.svg';


const LandingPage = ({onGetStarted}) => {
	return (
		<div className = 'hero is-large'>
			<div className= 'hero-body'>
				<div className ="container">
					<div className = "columns is-vcentered">
					<div className ="column is-6">
							<p className ="subtitle is-3 is-family-primary">Take Your XYZ exam practice with us at</p>
							<h1 className ="title is-title has-margin-top-30 is-size-3 has-text-weight-bold">
							 XYZ Practice Center	
							</h1>
							<p className ="subtitle is-4 has-margin-top-20 is-family-primary" >
							Your answers will automatically be scored at the end of your test, 
							and the timer will keep you on track with section time limits.
							</p>
							<p className ="subtitle is-4 has-margin-top-20 is-family-primary" >
							Best of all, after your practice test, you'll get corrections 
							to all questions you got wrong. And detailed explanation to all answers
							would be provided too.
							</p>
							<button className ="button is-primary is-medium" onClick = {onGetStarted}>
								Get Started
							</button>
						</div>
						<div className = "column is-5">
							<figure className ="image">
								<img src = {banner} alt="banner" />
							</figure>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage