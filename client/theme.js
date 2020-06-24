import theme from 'styled-theming';

const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d"
});

const navbarTextColor = theme("theme", {
  light: "#7F8C8D",
  dark: "#fff"
})

const textColor = theme("theme", {
  light: "#000",
  dark: "#fff"
});

const modalBorderColor = theme("theme", {
  light: "rgba(0,0,0,0.05)",
  dark: "rgba(255,255,255,0.05)"
})

const AppbarBg =theme("theme", {
  light: "#fff",
  dark: "#2C3E50"
}) 
const AppbarFg = theme("theme", {
  light: "black",
  dark: "white"
});

const dimensions = {
  scaleZero: '0.5rem',
  scaleOne: '1rem',
  scaleTwo: '1.5rem',
  scaleThree: '2rem',
  scaleFour: '2.5rem'
}

export {
  backgroundColor,
  textColor,
  navbarTextColor,
  modalBorderColor,
  dimensions,
  AppbarBg,
  AppbarFg
};