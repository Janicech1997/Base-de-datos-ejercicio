import '../css/servicios.css';
const proyectos=()=>{
    return(
        <>
            <section id="servicios">
              <div class="container mt-5 mb-5">
                <h2 class="servicio">Servicios</h2>
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                    <div class="card">
                      <img src="https://d1ih8jugeo2m5m.cloudfront.net/2021/12/ejemplos-de-paginas-web-01-1200x685.jpg" class="card-img-top" alt=''/>
                      <div class="card-body">
                        <h5 class="card-title"> Diseño web</h5>
                        <p class="card-text">Diseñamos webs únicas y amigables, con navegación sencilla, atendiendo los requerimientos de los usuarios. Nos adaptamos a tus necesidades y a tu presupuesto</p>
                        <a href="/Nosotros" class="btn btn-primary">Más info...</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                    <div class="card">
                      <img src="https://lamenteesmaravillosa.com/wp-content/uploads/2015/01/mujer-en-proceso-creativo.jpg" class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Branding</h5>
                        <p class="card-text">Creamos junto a la organización una estrategia creativa para abordar la problemática y llegar a la audiencia objetivo con el mayor impacto posible.</p>
                        <a href="/Nosostros" class="btn btn-primary">Más info...</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
                    <div class="card">
                      <img src="https://www.brightmarketing.mx/wp-content/uploads/2019/11/brief-sitio-web.jpg" class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">Servicios especiales</h5>
                        <p class="card-text">Te ofrecemos consultorías totalmente personalizadas sobre diferentes temas de la comunicación y el diseño. ¿Necesitas el diseño de un producto o servicio específico? ¡Escribinos!</p>
                        <a href="/Nosotros" class="btn btn-primary">Más info..</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    );
};
export default proyectos;