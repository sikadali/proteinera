import React, { useState } from 'react';
import AnimatedNumber from 'react-animated-number';
import './Statistics.css'

const Statistics = () => {
	const [ stats, setStats ] = useState(null);
	const stat = {
		labelled_proteins: 500,
		unlabelled_proteins: 1578,
		isolated_proteins: 387
	};
	return (
		<div className="statistics">
			<div className="statistics__col">
				<div>
					<h4>
						<h4>
							LABELLED<br />PROTEINS<br />
						</h4>
						<AnimatedNumber
							style={{
								transition: '0.8s ease-out',
								fontSize: 48,
								transitionProperty: 'background-color, color'
							}}
							frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.5 })}
							stepPrecision={0}
							duration={1500}
							value={stat.labelled_proteins}
							formatValue={(n) => n}
						/>
					</h4>
				</div>
				<div>
					<h4>
						<h4>
							ISOLATED<br />PROTEINS<br />
						</h4>
						<AnimatedNumber
							style={{
								transition: '0.8s ease-out',
								fontSize: 48,
								transitionProperty: 'background-color, color'
							}}
							frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.5 })}
							stepPrecision={0}
							duration={1500}
							value={stat.isolated_proteins}
							formatValue={(n) => n}
						/>
					</h4>
				</div>
				<div>
					<h4>
						<h4>
							UNLABELLED<br />PROTEINS<br />
						</h4>
						<AnimatedNumber
							style={{
								transition: '0.8s ease-out',
								fontSize: 48,
								transitionProperty: 'background-color, color'
							}}
							frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.5 })}
							stepPrecision={0}
							duration={1500}
							value={stat.unlabelled_proteins}
							formatValue={(n) => n}
						/>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
