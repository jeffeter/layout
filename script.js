function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") /* faz a mesma função que o cod. a baixo */
  /*   if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar.png")
  } else {
    img.setAttribute("src", "./assets/Avatar-dark.png")
  }
}
