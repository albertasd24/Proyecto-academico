import './Area.css';

const Area = ({name, image}) => {
	
	return (
		<div className='area'>
			<img width={100} src={`http://localhost:3400/api/areas/image/${image}`} alt="" />
			<a href=""><h2>{name}</h2></a>
 		</div>
	);
};

export default Area;