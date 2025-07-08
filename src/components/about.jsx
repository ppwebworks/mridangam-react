import React from "react";
// my first project
const About = () => (
  <section id="about" className="w-full py-4 bg-gray-50">
    <div className="container w-screen mx-auto py-4 px-10 text-center">
      <h2 className="text-3xl font-bold text-red-600">About Us</h2>
      <p className="text-base py-2 text-justify w-full mx-auto">
        Mridangam Academy is dedicated to teaching the traditional South Indian
        percussion instrument, Mridangam, through online classes. We offer
        Mridagam as well as traditional Khanjira classes. Also we offer Khanjira
        training to learn how to play Khanjira for Sai Bhajan. Our mission is to
        make high-quality music education accessible to everyone, everywhere.
      </p>

      <h2 className="text-3xl font-bold pt-10 text-red-600">About Mridangam</h2>
      <p className="text-base py-2 text-justify w-full mx-auto">
        <p className="mb-4">
          The <strong>mridangam</strong> is a classical South Indian percussion
          instrument, central to <strong>Carnatic music</strong>, the
          traditional music of southern India. Its deep, resonant sound and
          rhythmic complexity make it one of the most revered and versatile
          instruments in Indian classical music. The name "mridangam" comes from
          Sanskrit, where <em>“mrid”</em> means clay and <em>“angam”</em> means
          body—referring to its ancient origins when it was crafted from baked
          clay. Modern mridangams, however, are made of wood, typically{" "}
          <strong>jackfruit wood</strong>, known for its durability and tonal
          qualities.
        </p>

        <p className="mb-4">
          The instrument is a <strong>double-headed drum</strong>,
          barrel-shaped, with both ends covered by leather membranes. These are
          known as the <em>valantalai</em> (treble side) and the{" "}
          <em>idantalai</em> (bass side). The right head (valantalai) produces
          sharp, high-pitched tones, while the left head (idantalai) is larger
          and produces low, booming bass sounds. The idantalai is smeared with a
          black paste made from rice, iron filings, and ash to create the
          characteristic deep resonance. Tuning is done with leather straps and
          wooden wedges that run along the body of the drum.
        </p>

        <p className="mb-4">
          The mridangam is more than just an instrument; it's a vital component
          of Carnatic concerts. It plays a key role in maintaining the{" "}
          <strong>tala</strong> (rhythmic cycle) and enhancing the{" "}
          <strong>manodharma</strong> (improvisational aspects) of a
          performance. The <strong>mridangist</strong>, or mridangam player,
          engages in intricate rhythmic patterns known as <em>korvais</em> and{" "}
          <em>mohras</em>, showcasing mastery over rhythm and mathematical
          precision. The instrument not only supports but also converses with
          the main performer, often engaging in rhythmic dialogues known as{" "}
          <strong>tani avartanam</strong>—a solo percussion segment that is a
          highlight in many concerts.
        </p>
      </p>
    </div>
  </section>
);

export default About;
