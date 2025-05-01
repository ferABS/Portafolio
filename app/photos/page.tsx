import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Fotos",
  description: "Imagenes mias y de proyectos en los que he trabajado",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Fotos</h1>
      <p>Playtime Puzzles</p>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/playtime-puzzles-1.png",
            alt: "Playtime Puzzles main menu",
          },
          {
            src: "/photos/playtime-puzzles-2.png",
            alt: "Playtime Puzzles créditos",
          },
          {
            src: "/photos/playtime-puzzles-3.png",
            alt: "Playtime Puzzles nivel 1",
          },
          {
            src: "/photos/playtime-puzzles-4.png",
            alt: "Playtime Puzzles nivel 4",
          },
          {
            src: "/photos/playtime-puzzles-5.png",
            alt: "Playtime Puzzles entorno de trabajo",
          },
        ]}
      />
      <p>USM JAM</p>
      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/usmjam-1.png", alt: "Fernando Bastias presentando su proyecto Baited" },
          { src: "/photos/usmjam-2.png", alt: "Comunidad USM JAM primera edición" },
        ]}
      />

      { /*<ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      /> */}
    </section>
  );
}
