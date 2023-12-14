import { useState } from 'react';
import { loginService } from '../../services/auth';
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [error, seterror] = useState("");
	const login = async (e) => {
		e.preventDefault()
		const auth = {
			email: email,
			password: password
		}
		const authresponse = await loginService(auth);
		if (authresponse.code != 400) {
			return navigate("/Dashboard")
		}else{
			seterror(authresponse.error)
		}
	}

	return (
		<div className='containerLogin'>
			<section className='login'>
				<h1>INICIAR SESIÓN</h1>
				{error.length > 0 && (
					<p className='messageError'>{error}</p>
				)}
				<div>
					<label htmlFor="email">Usuario</label>
					<input type="text" id='email' onChange={(e) => setemail(e.target.value)} />
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input type="password" id='password' onChange={(e) => setpassword(e.target.value)} />
				</div>
				<a href="" className='forgotPassword'>¿Olvidaste tu contraseña?</a>
				<button type="button" className='buttonLogin' onClick={login}>Ingresar</button>
			</section>
		</div>
	);
};

export default Login;