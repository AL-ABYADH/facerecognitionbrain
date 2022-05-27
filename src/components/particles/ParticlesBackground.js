import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesOptions from './ParticlesOptions';

const ParticlesBackground = () => {
	return (
		<div>
			<Particles params={ParticlesOptions}>
			</Particles>
		</div>
	)
}

export default ParticlesBackground;