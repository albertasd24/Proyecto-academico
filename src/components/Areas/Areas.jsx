
import React, { useEffect, useState } from 'react';
import './Areas.css';
import Area from '../Area/Area';
import { areasService } from '../../services/areas';

const Areas = ({ }) => {
	const [areas, setareas] = useState([])
	useEffect(() => {
		const getAreas = async () => {
			const data = await areasService();
			setareas(data)
		}
		getAreas()
	}, [])

	return (
		<div >
			<h1>Solicitar a Area</h1>
			<div className='containerAreas'>
				{areas.map((area) => (
					<>
						<Area name={area.name} image={area.image} />
					</>
				))}
			</div>
		</div>
	);
};

Areas.propTypes = {};

export default Areas;