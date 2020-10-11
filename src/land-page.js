import { LitElement, html, css } from 'lit-element';

class LandPage extends LitElement {
    render() {
        return html `
        <link rel="stylesheet" href="../../css/style.css">
        <div id="container">
            <div id="header"></div>
            <nav>
                <img src="images/img_logo.png" alt="BBBVA smartspeech" id="headerlogo" />
        
                <ul>
                    <li><a id="inicio" class="elemento" href="#">Especificaciones</a></li>
                    <li><a id="socios" class="elemento" href="#">Equipo</a></li>
                    <li><a id="galeria" class="elemento" href="#">Contacto</a></li>
                </ul>
            </nav>
            <div id="start">
                <img src="images/img_1.png" id="workIMG" />
                <span id="p2">
                    <p id="p1">Convertimos <br />la información de tus usuarios</p>
                    en valor agregado
                </span>
        
                <form name="form" id="login" onsubmit="validar();">
                    <ul>
                        <li>
                            <label for="user">Usuario</label><br /><br />
                            <input type="text" id="user" name="user" />
                        </li>
        
                        <li>
                            <label for="password">Contraseña</label><br /><br />
                            <input type="password" id="password" name="password" />
                        </li>
                        <li>
                            <input type="checkbox" id="saveLogin" />
                            <span id="remember">Recordarme</span>
        
                            <a id="forget" class="elemento" href="#">¿Olvidaste tu contraseña?</a>
                        </li>
                        <li>
                            <button id="send" type="submit">¡Empecemos!</button><br />
                            <a id="register" href="#">Nuevo usuario</a>
                        </li>
                    </ul>
                </form>
            </div>
        
            <div id="features">
                <span id="featuresText">LLEVAMOS TUS DATOS DE VOZ
                    <span id="anotherLevel">A OTRO NIVEL</span></span>
                <div class="articles">
                    <article class="featuresBox">
                        <img src="images/ai.png" />
        
                        <h1>Audio a texto</h1>
                        <pre>
        Transcribe automáticaticamente
        grabaciones.</pre>
                    </article>
        
                    <article class="featuresBox">
                        <img src="images/search.png" />
        
                        <h1>Analiza el diálogo</h1>
                        <pre>
        Inspecciona y categoriza las
        lamadas con nuestro
        sistema.
                        </pre>
                    </article>
                </div>
                <div class="articles">
                    <article class="featuresBox">
                        <img src="images/ai.png" />
        
                        <h1>Tono y sentimientos</h1>
                        <pre>
        Detecta métricas
            paralingüisticas para conocer
            mejor a tus usuarios</pre>
                    </article>
        
                    <article class="featuresBox">
                        <img src="images/search.png" />
        
                        <h1>Predicciones IA</h1>
                        <pre>Prediga comportamientos
          complejos mediante el
          aprendizaje automático
                    </pre>
                    </article>
                </div>
            </div>
            <div id='learnMore'>
                <span id="learnText">CONOCE MÁS
                    <span id="aboutProject">SOBRE EL PROYECTO</span></span>
        
                <iframe id='video' width="500" height="315" src="https://www.youtube.com/embed/jFkjLq8LLnM">
                </iframe>
        
        
            </div>
        </div>
        `;
    }
}

customElements.define('land-page', LandPage);