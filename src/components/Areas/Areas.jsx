
import React from 'react';
import './Areas.css';
import Area from '../Area/Area';

const Areas = ({ }) => {
	return (
		<div >
			<h1>Solicitar a Area</h1>
			<div className='containerAreas'>
				<Area name="RRHH" />
				<Area name="Financiera" />
				<Area name="Seguridad T.I" />
				<Area name="Juridica" />
			</div>
		</div>
	);
};

Areas.propTypes = {};

export default Areas;