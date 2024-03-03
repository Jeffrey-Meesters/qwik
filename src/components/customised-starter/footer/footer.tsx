import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
const serverTime = useServerTimeLoader();

return (
<footer>
  <div class="container">
    <a href="/" target="_blank" class={styles.anchor}>
      <span>Made with ♡ by <sup>*</sup> Jeffrey van der Lem - Meesters</span>
      <span class={styles.spacer}>|</span>
      <span>{serverTime.value.date}</span>
      <br />
      <sup>*I customised the starter template for a quick start in trying this new tech out</sup>
      <br />
    </a>
  </div>
  <div class="container">
    <a href="/demo/flower/" class={styles.anchor}>
      <sup>
        Flower demo by Qwik
      </sup>
    </a>
    <a href="/demo/todolist/" class={styles.anchor}>
      <sup>
        Todolist demo by Qwik
      </sup>
    </a>
  </div>
</footer>
);
});