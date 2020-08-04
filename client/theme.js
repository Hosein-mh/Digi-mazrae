import theme from 'styled-theming';

const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#161f28"
});

const submitColor = theme("theme", {
  light: "#2ecc71",
  dark: "#27ae60",
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
  light: "#000",
  dark: "#fff"
})
const modalErrorBorder = theme("theme", {
  light: "#D92027",
  dark: "#FF000A"
})
const modalBackground = theme("theme", {
  light:" #F7F5DD",
  dark: "#222831"
})

const digiText = theme("theme", {
  light: "#D92027",
  dark: "#FF000A"
})

const mazText = theme("theme", {
  light: "#204051",
  dark: "#fff"
})

const leafColor = theme("theme", {
  light: "#184D47",
  dark: "#2EB872"
})

const AppbarBg =theme("theme", {
  light: "#F7F5DD",
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
  submitColor,
  navbarTextColor,
  modalBorderColor,
  modalBackground,
  modalErrorBorder,
  digiText,
  mazText,
  leafColor,
  dimensions,
  AppbarBg,
  AppbarFg
};