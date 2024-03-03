import { component$ } from "@builder.io/qwik";
import { Keyboard } from "~/components/jeffrle/Keyboard";

export default component$(() => {
  return(
    <>
      <div class="page">
        <h1>Jeffrle!</h1>
        <section class="question-rows-wrapper">
          <div id="word-lists"></div>
        </section>
        {/* <section id="qwerty-board-letters"></section> */}
        <Keyboard />
      </div>
    </>
  )
})