import { component$ } from "@builder.io/qwik";

export const Keyboard = component$(() => {
  return (
    <>
    <section class="keyrow playbuttons">
        <button id="reveal">Reveal</button>
        <button id="restart">Restart</button>
    </section>
    <section class="keyrow">
        <button class="key">q</button>
        <button class="key">w</button>
        <button class="key">e</button>
        <button class="key">r</button>
        <button class="key">t</button>
        <button class="key">y</button>
        <button class="key">u</button>
        <button class="key">i</button>
        <button class="key">o</button>
        <button class="key">p</button>
    </section>

    <section class="keyrow">
        <button class="key">a</button>
        <button class="key">s</button>
        <button class="key">d</button>
        <button class="key">f</button>
        <button class="key">g</button>
        <button class="key">h</button>
        <button class="key">j</button>
        <button class="key">k</button>
        <button class="key">l</button>
    </section>

    <section class="keyrow">
        <button class="key">z</button>
        <button class="key">x</button>
        <button class="key">c</button>
        <button class="key">v</button>
        <button class="key">b</button>
        <button class="key">n</button>
        <button class="key">m</button>
    </section>
    </>
  )
})