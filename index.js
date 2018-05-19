import homeIcon from "./home.png";
import smallSvg from "./home.svg";
import bigSvg from "./big.svg";
import { Greeting } from "./react";
import "./style.scss";

const homeImg = document.getElementById("home");
homeImg.src = homeIcon;

const mapSvg = document.getElementById("svg1");
mapSvg.data = bigSvg;

const homeSvg = document.getElementById("svg2");
homeSvg.data = smallSvg;
