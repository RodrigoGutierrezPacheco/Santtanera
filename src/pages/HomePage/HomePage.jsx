import "./HomePage.css";

function HomePage() {
	const $tiempo=document.querySelector('.tiempo'),

$fecha= document.querySelector('.fecha');


  return (
    <div>
			<div className="bienvenidos">
				<span className="titulo">Bienvenidxs a</span>
				<span className="santtanera1">Santtanera</span>
			</div>
				<h1 className="titulo">Menú</h1>
				<img className="bebidas" src="images/bebidas.jpg" alt="" />
				<img className="bebidas" src="images/alimento.jpg" alt="" />
			<div className="pedidos">
			<div>
				<h1>Ubicacion</h1>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.069956921162!2d-103.46191748515398!3d20.544318386262802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f55b0840152d1%3A0x6abcaefd895df89!2sSanttanera!5e0!3m2!1ses-419!2smx!4v1666395805064!5m2!1ses-419!2smx" className="mapa"/>
			</div>
    </div>
	</div>
  );
}

export default HomePage;
