import './Sidebar.css';


const Sidebar = ({}) => {
	const routes = [
		{
			icon:"",
			link:"",
			title:"Mi espacio"
		},
		{
			icon:"",
			link:"",
			title:"Solicitudes"
		},
		{
			icon:"",
			link:"",
			title:"Usuarios"
		},
		{
			icon:"",
			link:"",
			title:"Salir"
		},
	]
	return (
		<nav className='containerSidebar'>
			<figure >
				<img className='photoProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRnr7nl0Qeypb2LGwo4yH7pYEUB2NCjDdvL-ASaiuAmFifa-AyqwC-UalFnA3S4VgBM4&usqp=CAU" alt="" />
			</figure>
			<small>Administrador</small>
			<h2>Stive Ospina</h2>
			<div className='links'>
				{routes.map((route, index)=>(
					<>
						<a href="">{route.title}</a>
					</>
				))}
			</div>
		</nav>
	);
};

export default Sidebar;