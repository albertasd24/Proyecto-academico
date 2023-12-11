import './Login.css';
const Login = ({}) => {
	return (
		<div className='containerLogin'>
 			<section className='login'>
				<h1>INICIAR SESIÓN</h1>
				<div>
					<label htmlFor="email">Usuario</label>
					<input type="text" id='email' />
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input type="password" id='password' />
				</div>
				<a href="" className='forgotPassword'>¿Olvidaste tu contraseña?</a>
				<button type="button" className='buttonLogin'>Ingresar</button>
			</section>
 		</div>
	);
};

export default Login;