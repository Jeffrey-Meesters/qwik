import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            Jeffrey van der Lem - Meesters
          </a>
        </div>
        <ul>
          <li>
            <a
              href="#"
              target="_blank"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
            >
              Me
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
