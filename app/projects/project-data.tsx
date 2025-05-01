export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Wine model prediction",
    year: 2025,
    description: "Modelo predictivo sobre dataset de vinos tintos y blancos de una viña en Portugal",
    url: "https://github.com/etha44a4n/MachineLearning-Tarea1",
  },
  {
    title: "Baited!",
    year: 2024,
    description: "Videojuego desarrollado en Unity para una GameJam en la UTFSM",
    url: "https://ferabs.itch.io/baited",
  },
  {
    title: "Proyecto Web ingeniería de software",
    year: 2024,
    description: "Proyecto consistente en el desarrollo sin desplegar de una página web para una asignatura académica",
    url: "https://github.com/NeitUSM/Proyecto_Ing_Sw",
  }
];
