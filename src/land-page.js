import { LitElement, html, css } from 'lit-element';

class LandPage extends LitElement {
    render() {
        return html `
        <!--<link rel="stylesheet" href="../../css/style.css">-->
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

    static get styles() {
        return [css `
        /* http://meyerweb.com/eric/tools/css/reset/
   v2.0-modified | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}


/* make sure to set some focus styles for accessibility */

:focus {
    outline: 0;
}


/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
}




audio,
canvas,
video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
}




audio:not([controls]) {
    display: none;
    height: 0;
}


/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 * Known issue: no IE 6 support.
 */

[hidden] {
    display: none;
}




html {
    font-size: 100%;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    -ms-text-size-adjust: 100%;
    /* 2 */
}



a:focus {
    outline: thin dotted;
}


/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
    outline: 0;
}




img {
    border: 0;
    /* 1 */
    -ms-interpolation-mode: bicubic;
    /* 2 */
}


/**
 * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
 */

figure {
    margin: 0;
}


/**
 * Correct margin displayed oddly in IE 6/7.
 */

form {
    margin: 0;
}


/**
 * Define consistent border, margin, and padding.
 */

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}


/**
 * 1. Correct color not being inherited in IE 6/7/8/9.
 * 2. Correct text not wrapping in Firefox 3.
 * 3. Correct alignment displayed oddly in IE 6/7.
 */

legend {
    border: 0;
    /* 1 */
    padding: 0;
    white-space: normal;
    /* 2 */
    *margin-left: -7px;
    /* 3 */
}


/**
 * 1. Correct font size not being inherited in all browsers.
 * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
 *    and Chrome.
 * 3. Improve appearance and consistency in all browsers.
 */

button,
input,
select,
textarea {
    font-size: 100%;
    /* 1 */
    margin: 0;
    /* 2 */
    vertical-align: baseline;
    /* 3 */
    *vertical-align: middle;
    /* 3 */
}




button,
input {
    line-height: normal;
}




button,
select {
    text-transform: none;
}




button,
html input[type="button"],

/* 1 */

input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    /* 2 */
    cursor: pointer;
    /* 3 */
    *overflow: visible;
    /* 4 */
}


/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
    cursor: default;
}


/**
 * 1. Address box sizing set to content-box in IE 8/9.
 * 2. Remove excess padding in IE 8/9.
 * 3. Remove excess padding in IE 7.
 *    Known issue: excess padding remains in IE 6.
 */

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
    *height: 13px;
    /* 3 */
    *width: 13px;
    /* 3 */
}




input[type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    /* 2 */
    box-sizing: content-box;
}


/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}


/**
 * Remove inner padding and border in Firefox 3+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}


/**
 * 1. Remove default vertical scrollbar in IE 6/7/8/9.
 * 2. Improve readability and alignment in all browsers.
 */

textarea {
    overflow: auto;
    /* 1 */
    vertical-align: top;
    /* 2 */
}


/**
 * Remove most spacing between table cells.
 */

table {
    border-collapse: collapse;
    border-spacing: 0;
}

html,
button,
input,
select,
textarea {
    color: #222;
}

::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
}

::selection {
    background: #b3d4fc;
    text-shadow: none;
}

img {
    vertical-align: middle;
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}

textarea {
    resize: vertical;
}

.chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}


/* ---------------------------------------*/

body {
    background: lightgray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: white;
}

nav {
    width: 100%;
    background: white;
    margin-bottom: 20px;
}

#headerlogo {
    width: 22%;
    float: left;
    margin-left: 17%;
}

nav ul {
    list-style: none;
    margin-right: 20%;
    display: flex;
    justify-content: flex-end;
}

nav ul a {
    text-decoration: none;
    color: #808080;
    padding: 1em;
    display: inline-flex;
    font-size: 0.9em;
}

#start {
    width: 100%;
    padding-left: 17%;
    background-color: white;
    margin-bottom: 82px;
}

#p1 {
    color: #004481;
}

#p2 {
    color: #18b3ff;
    padding-top: 20px;
    font-weight: 700;
}

#workIMG {
    width: 338px;
    float: right;
    margin-right: 40%;
    vertical-align: top;
}

#login {
    margin-top: 20px;
    margin-left: 20px;
}

#login ul li {
    list-style: none;
    margin-bottom: 20px;
    font-size: 0.7em;
}

#user,
#password {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    padding-right: 45px;
}

#remember {
    font-size: 9px;
    color: rgb(190, 188, 188);
    vertical-align: text-top;
}

#forget {
    margin-left: 15px;
    font-size: 9px;
    text-decoration: none;
    color: rgb(190, 188, 188);
    vertical-align: text-top;
}

#send {
    background-color: #1d73b2;
    color: white;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    border: 1px;
    margin-left: 45px;
}

#register {
    font-size: 9px;
    text-decoration: none;
    color: rgb(179, 175, 175);
    margin-left: 62px;
    text-decoration: underline;
}

#features {
    background-color: #072146;
    padding: 25px;
    text-align: center;
}

#featuresText {
    color: white;
    font-weight: bold;
    font-size: 19px;
}

#anotherLevel {
    color: #f8cd51;
    font-weight: 100;
}

#features img {
    margin-top: 20px;
    width: 60px;
    ;
}

#features h1 {
    color: #f8cd51;
    font-size: 13px;
}

#features pre {
    color: white;
    font-size: 10px;
}

.articles {
    display: flex;
    align-self: flex-start;
    flex-flow: row wrap;
    margin-left: 40%;
}

.featuresBox {
    margin: 20px;
}

#learnMore {
    background-color: white;
    text-align: center;
    margin: 20px;
}

#learnText {
    color: #004481;
    font-size: 19px;
    font-weight: bold;
}

#aboutProject {
    color: #18b3ff;
    font-size: 19px;
}

#video {
    display: block;
    margin: 25px auto;
}
        `];
    }
}

customElements.define('land-page', LandPage);