import '../css/iniciarsesion.css';
const iniciarsesion=()=>{
    return(
        <>
           <section class="contact" id="contactos">
      <div class="contact__image-wrapper">
        <img src="https://signoscv.com/wp-content/uploads/2021/11/DW6.jpg" alt=""/>
      </div>
      <div class="contact__right-side">
          <h1 class="contact__title">Iniciar sesión</h1>
          <form action="" class="contact__form-wrapper">
              <div class="contact__input-line">
                  <label for="name" class="contact__label">Nombre</label>
                  <input type="text" name="name" id="name" class="contact__input"/>
              </div>
              <div class="contact__input-line">
                  <label for="email" class="contact__label">Correo</label>
                  <input type="email" name="email" id="email" class="contact__input"/>
              </div>
              <div class="contact__input-line">
                  <label for="subject" class="contact__label">Contraseña</label>
                  <input type="password" name="subject" id="subject" class="contact__input"/>
              </div>
              <input type="submit" value="Iniciar sesión" class="contact__submit-button"/>
          </form>
      </div>
    </section>
        </>
    );
};
export default iniciarsesion;