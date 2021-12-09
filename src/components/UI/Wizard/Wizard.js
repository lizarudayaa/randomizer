import React from 'react';
import './wizard.css'
const Wizard = () => {
	return (
		<div className='container_wizard '>
		<div class="scene">
			<div class="objects">
				<div class="square"></div>
				<div class="circle"></div>
				<div class="triangle"></div>
			</div>
			<div class="wizard">
				<div class="body"></div>
				<div class="right-arm">
					<div class="right-hand"></div>
				</div>
				<div class="left-arm">
					<div class="left-hand"></div>
				</div>
				<div class="head">
					<div class="beard"></div>
					<div class="face">
						<div class="adds"></div>
					</div>
					<div class="hat">
						<div class="hat-of-the-hat"></div>
						<div class="four-point-star --first"></div>
						<div class="four-point-star --second"></div>
						<div class="four-point-star --third"></div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Wizard;