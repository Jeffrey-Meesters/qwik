import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/customised-starter/hero/hero";
import Infobox from "../components/customised-starter/infobox/infobox";

export default component$(() => {
  return (
    <>
      <Hero />
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
      <Infobox>
          <div q:slot="title">
            <h2>
              Welcome!
            </h2>
            <p>
              This website has been build with Qwik City by me.
              <br />
              If interested go check them out <a href="https://qwik.dev/" title="qwik">
                here
              </a>. 
            </p>
          </div>
        </Infobox>
        <Infobox>
          <div q:slot="title">
            <h3>However you're here for me!</h3>
            <p>
              Right?
              <br />
              I'm Jeffrey, a Husband and we have a 1+ year old son.
              <br />
              Based in The Netherlands near Haarlem and working in Amsterdam
              <br />
              Coding for almost 7 years in mostly Vue 2.
              But started out with React, Vanilla JS, Jquery, html and css.
              <br />
              A lot has changed over the years. Now I'm trying to learn JSX, or better: Qwik city, which is guiding me back to my React roots I guess.
            </p>
          </div>
        </Infobox>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my site - Jeffrey van der Lem - Meesters",
  meta: [
    {
      name: "description",
      content: "Jeffrey van der Lem - Meesters website build with Qwik (city)",
    },
  ],
};

