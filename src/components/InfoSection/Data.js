import broadcastImg from "../../images/svg-2.svg";
import loginImg from "../../images/login.svg";
import dataImg from "../../images/palapa.jpg";

export const homeObjOne = {
  id: "xds",
  lightBg: false,
  lightText: true,
  topLine: "Premium Internet",
  headline: "All you need is an internet conection",
  description:
    "Get access to our exclusive app that allows you send unlimited transactions without getting charged any fees",
  buttonLabel: "Get started",
  imgStart: false,
  img: broadcastImg,
  alt: "broadcastImg",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "reserva",
  lightBg: true,
  lightText: false,
  topLine: "Ideal para disfrutar con tu familia.",
  headline: "Palapa",
  description: "$1500, aprovecha $200 de descuento apartando con $100",
  buttonLabel: "Consultar disponibilidad",
  imgStart: true,
  img: dataImg,
  alt: "dataImg",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  topLine: "Join our Team",
  headline: "Creating an account",
  description: "Crud User and Mikrotik config",
  buttonLabel: "Start Now",
  img: loginImg,
  alt: "loginImg",
  dark: false,
  primary: false,
  darkText: true,
  imgStart: true,
};
