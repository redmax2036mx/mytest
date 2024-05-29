import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam
          explicabo, harum sequi distinctio repudiandae obcaecati cupiditate
          praesentium officia cum? Neque accusantium repellat deserunt
          accusamus, quos adipisci optio ipsum autem?
        </p>
        <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by Builder.io</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
