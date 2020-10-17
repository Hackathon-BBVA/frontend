import { LitElement, html, css } from 'lit-element';

class SectionEquipo extends LitElement {
    render() {
        return html `
<section>
    <span id="learnText">EQUIPO
                    <span id="anotherLevel">LEITMOTIV</span></span>

    <div class="articles">
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Karla Vega</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Ana Lucía Quispe</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Carlo Raúl Martínez</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Jordan King Rodríguez</span>
            <p>Frontend</p>
        </article>
        <article class="featuresBox">
            <img src="../../images/ai.png" />
            <span>Carlos Eduardo Ramírez</span>
            <p>Frontend</p>
        </article>
    </div>
</section>
`;
    }
    static get styles() {
        return [css `
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

:focus {
    outline: 0;
}

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

[hidden] {
    display: none;
}

html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

a:focus {
    outline: thin dotted;
}

a:active,
a:hover {
    outline: 0;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}

figure {
    margin: 0;
}

form {
    margin: 0;
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
}

button,
input,
select,
textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
}

button[disabled],
html input[disabled] {
    cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

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
            `]
    }

}
customElements.define('section-equipo', SectionEquipo);