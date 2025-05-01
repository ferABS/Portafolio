import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.jfif"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Acerca de Fernando Bastías
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Estudiante de ingeniería en informática de la universidad técnica Federico Santa María 
          sede Jose Miguel Carrera, con 21 años de edad y una pasión por aprender sobre las 
          tecnologías actuales y el mundo que le rodea.
        </p>
        <p>
          Posee una fuerte admiración por la industria del desarrollo de videojuegos, 
          siendo su objetivo de vida el poder convertir esta área en su sustento y estilo de vida.
        </p>
        <p>
          Además de sentir atracción por las áreas de ciberseguridad ética, ciencia de datos 
          e inteligencia artificial.
        </p>
        <p>
          Este portafolios se desarrolló con el apoyo de la plantilla {""}
          <a href="https://vercel.com/templates/next.js/nextfolio-a-simple-next-js-portfolio" target="_blank">
            Nextfolio
          </a> {""}
          de Next.js
        </p>
      </div>
    </section>
  );
}
