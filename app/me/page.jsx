import React from 'react'
import Image from "next/image";
import Picture from "./pic.png";
import Picture2 from "./pic2.jpg";

export default function Me() {
  return (
    <main id="me">
      <section className="flex justify-center pt-5">
      <Image
            src={Picture2}
            alt="Picture of the author"
            width={300}
            height={300}
            className="rounded-full border-4  "
          />
        
      </section>
    </main>
  )
}
