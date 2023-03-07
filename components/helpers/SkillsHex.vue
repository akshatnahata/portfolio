<template>
  <ul id="hexGrid">
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink">
          <img
            src="~/assets/img/skills/javascript-logo.png"
            alt="JavaScript"
          >
          <h1>JavaScript</h1>
          <p>NodeJS, VueJS, ES6+, Electron, ...</p>
        </span>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink">
          <img
            src="~/assets/img/skills/csharp-logo.png"
            alt="C#"
          >
          <h1>C#</h1>
          <p>.NET Core, Entity Framework, ...</p>
        </span>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink" href="#">
          <img
            src="~/assets/img/skills/java-logo.png"
            alt="Java"
          >
          <h1>Java</h1>
          <p>Spring, Hibernate, ...</p>
        </span>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink" href="#">
          <img
            src="~/assets/img/skills/golang-logo.png"
            alt="Java"
          >
          <h1>GoLang</h1>
          <p>Performant web applications</p>
        </span>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink" href="#">
          <img
            src="~/assets/img/skills/database-logo.png"
            alt="Database"
          >
          <h1>SQL/NoSQL</h1>
          <p>PostgreSQL, MongoDB, ...</p>
        </span>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink" href="#">
          <img
            src="~/assets/img/skills/cloud-logo.png"
            alt="Cloud"
          >
          <h1>Cloud</h1>
          <p>AWS, Azure, GCP, DevOps ...</p>
        </span>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <span class="hexLink" href="#">
          <img
            src="~/assets/img/skills/ai-logo.png"
            alt="Artificial Intelligence"
          >
          <h1>AI</h1>
          <p>Deep Learning, Keras/Tensorflow, Python,  ...</p>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
import sizeMixin from '../../mixins/sizeMixin';

export default {
  mixins: [sizeMixin],
};
</script>

<style scoped>
#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-size: 13px;
  list-style-type: none;
}

.hex {
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex::after {
  content: "";
  display: block;
  padding-bottom: 86.602%; /* =  100 / tan(60) * 1.5 */
}
.hexIn {
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin: 0 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
  @apply text-gray;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
  -webkit-transform: rotate3d(0, 0, 0, 0deg);
  -ms-transform: rotate3d(0, 0, 0, 0deg);
  transform: rotate3d(0, 0, 0, 0deg);
}

.hex h1,
.hex p {
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  background-color: #2dd4bf;
  font-weight: 300;
  -webkit-transition: -webkit-transform 0.2s ease-out, opacity 0.3s ease-out;
  transition: transform 0.2s ease-out, opacity 0.3s ease-out;
}
.hex h1 {
  bottom: 50%;
  padding-top: 50%;
  font-size: 1.5em;
  z-index: 1;
  -webkit-transform: translate3d(0, -100%, 0);
  -ms-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
.hex h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  text-align: center;
  border-bottom: 1px solid #1a202c;
}
.hex p {
  top: 50%;
  padding-bottom: 50%;
  -webkit-transform: translate3d(0, 100%, 0);
  -ms-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

/*** HOVER EFFECT  **********************************************************************/
.hexLink:hover h1,
.hexLink:focus h1,
.hexLink:hover p,
.hexLink:focus p {
  cursor: default;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/*** HEXAGON SIZING AND EVEN ROW INDENTATION *******************************/
@media (min-width: 1201px) {
  /* <- 3-2  hexagons per row */
  #hexGrid {
    padding-bottom: 7.4%;
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(4n+5) {
    /* first hexagon of even rows */
    margin-left: 12.5%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width: 901px) {
  /* <- 3-2  hexagons per row */
  #hexGrid {
    padding-bottom: 7.4%;
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(4n + 5) {
    /* first hexagon of even rows */
    margin-left: 12.5%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width: 601px) {
  /* <- 3-2  hexagons per row */
  #hexGrid {
    padding-bottom: 7.4%;
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(4n + 4) {
    /* first hexagon of even rows */
    margin-left: 16.666%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) {
  /* <- 2-1  hexagons per row */
  #hexGrid {
    padding-bottom: 11.2%;
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n + 3) {
    /* first hexagon of even rows */
    margin-left: 25%; /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
  #hexGrid {
    font-size: 13px;
  }
}
</style>
