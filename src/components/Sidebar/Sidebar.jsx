import './Sidebar.css';
import iconDashboard from "../../assets/icons/iconDashboard.svg";
import iconRequest from "../../assets/icons/iconRequest.svg";
import iconUsers from "../../assets/icons/iconUsers.svg";
import iconDoorOpen from "../../assets/icons/iconDoorOpen.svg";
import { useEffect, useState } from 'react';
import { getFirstFragment } from '../../util/formats';
import { avatarService } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const [user, setuser] = useState({})
	useEffect(() => {
		console.log(JSON.parse(localStorage.getItem("user")));
		setuser(JSON.parse(localStorage.getItem("user")))
	}, [])
	const navigate = useNavigate();

    const closeSeccion = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };
	const routes = [
		{
			icon: "",
			link: "",
			title: "Mi espacio"
		},
		{
			icon: "",
			link: "",
			title: "Solicitudes"
		},
		{
			icon: "",
			link: "",
			title: "Usuarios"
		},
		{
			icon: "",
			link: "",
			title: "Salir"
		},
	]
	return (
		<nav className='containerSidebar'>
			<figure >
				<img className='photoProfile' src={`http://localhost:3400/api/avatar/${user?.photo}`} alt="" />
			</figure>
			<small>{user?.role}</small>
			<h2>{getFirstFragment(user?.name)} {getFirstFragment(user?.lastname)}</h2>
			<div className='links'>
				<a href=""> <img className='iconSidebar' src={iconDashboard} alt="" /> Mi espacio</a>
				<a href=""> <img className='iconSidebar' src={iconRequest} alt="" /> Solicitudes</a>
				<a href=""> <img className='iconSidebar' src={iconUsers} alt="" /> Usuarios</a>
				<button type='button' onClick={closeSeccion}><img className='iconSidebar' src={iconDoorOpen} alt=""  /> Salir</button>
			</div>
		</nav>
	);
};

export default Sidebar;