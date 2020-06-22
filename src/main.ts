import App from "./components/App/App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
