import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from '../../../components/Sidebar/Sidebar';

const Dashboard = ({}) => {
	const navegate = useNavigate()
	if(localStorage.getItem("user") === null){
		navegate("/login")
	}
	return (
		<div className='containerLayoutDashboard'>
 			<Sidebar />
			<div className='DashboardContent'>
				<Outlet />
			</div>
 		</div>
	);
};

export default Dashboard;