import "./HomePage.css";

function HomePage() {
	const $tiempo=document.querySelector('.tiempo'),

$fecha= document.querySelector('.fecha');

function Relojdigital(){

let f=new Date(),

dia= f.getDate(),

mes= f.getMonth()+1,

anio= f.getFullYear(),

diaSemana=f.getDay();

dia= ('0'+dia).slice(-2);

mes=('0'+mes).slice(-2)

let timeString= f.toLocaleTimeString();

$tiempo.innerHTML=timeString;

let semana=['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];

let showSemana= (semana[diaSemana])

$fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`

}

setInterval(() =>{

Relojdigital()

},1000);
  return (
    <div>
			<div className="bienvenidos">
				<h1 className="bienvenidxs">Bienvenidxs a</h1>
				<h1 className="santtanera1">Santtanera</h1>
				<h2 className="bienvenidxs">Tragos Coquetitos</h2>
       <img className="tragos" src="images/tragos.jpg" alt="" />
			</div>
			<div className="botana">
				<span className="titulo">Botana Deliciosa</span>
				<img className="tragos" src="images/botana.jpg" alt="" />
			</div>
			<div className="pedidos">
			<div>
				<h1>Pedidos</h1>
				<span>Contamos con servicio a domicilio, puedes pasar por tu pedidio o te lo tenemos listo a la hora que quieras para que entres a disfrutar</span>
			</div>
			<div>
				<h1>Ubicacion</h1>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.069956921162!2d-103.46191748515398!3d20.544318386262802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f55b0840152d1%3A0x6abcaefd895df89!2sSanttanera!5e0!3m2!1ses-419!2smx!4v1666395805064!5m2!1ses-419!2smx" className="mapa"/>
			</div>
    </div>
	</div>
  );
}

export default HomePage;
