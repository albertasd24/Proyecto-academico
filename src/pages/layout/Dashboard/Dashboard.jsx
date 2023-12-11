import { Outlet } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from '../../../components/Sidebar/Sidebar';

const Dashboard = ({}) => {
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