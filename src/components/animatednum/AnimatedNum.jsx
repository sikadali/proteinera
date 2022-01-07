import React, { useState } from 'react';
import AnimatedNumber from 'react-animated-number';

const AnimatedNum = (props) => {
	return (
		<svg width={600} height={600}>
			<g transform="translate(50,100)">
				<AnimatedNumber
					style={{
						transition: '0.8s ease-out',
						fontSize: 48,
						transitionProperty: 'background-color, color, opacity'
					}}
					frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.5  })}
					duration={2000}
					value={props}
					component="text"
					formatValue={(n) => (n)}
                    stepPrecision = {0}
				/>
			</g>
		</svg>
	);
};

export default AnimatedNum;
