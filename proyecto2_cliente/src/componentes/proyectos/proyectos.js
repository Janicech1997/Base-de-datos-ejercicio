import '../css/proyectos.css';
import marca1 from '../images/marca1.png';
import marca2 from '../images/marca2.png';
import marca3 from '../images/marca3.png';
const proyectos=()=>{
    return(
        <>
               <section class="contenido0" id="proyectos">
        <div>
          <div class="Container">
            <h1>Proyectos realizados</h1>
            <h2>
              <div id="Panel_galeria">
                <div>
                    <img src={marca1} alt="fantasma" width="200" height="180"/>
                    <label class="texto">Proyecto 1</label>
                </div>
                <div>
                    <img src={marca2} alt="calabaza" width="200" height="180"/>
                    <label class="texto"><p>Proyecto 2</p></label>
                </div>
                <div>
                    <img src={marca3} alt="diseño" width="200" height="180"/>
                    <label class="texto"><p>Proyecto 3</p></label>
                </div>
              </div>     
            </h2>
          </div>
        </div>
    </section>
        </>
    );
};
export default proyectos;