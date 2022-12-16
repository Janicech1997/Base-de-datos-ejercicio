import '../css/inicio.css';
const inicio=()=>{
    return(
        <>
            <div class="cover d-flex justify-content-center align-items-center flex-column" id="inicio">
                <h1>Únete al mundo digital</h1>
                <p>Aumenta hoy mismo tús ventas junto a nosotros.</p>
                <button class="btn btn-light" onclick="window.location.href('#contactos');">Contactanos</button>
            </div>
            <section class="contenedor-sobre-nosotros">
            </section>
        </>
    );
};
export default inicio;