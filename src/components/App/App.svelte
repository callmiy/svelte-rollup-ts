<script lang="ts">
  import { data } from "./app-utils";
  import Header from "../Header/header.component.svelte";

  export let name: string;
</script>

<style src="./app.scss">

</style>

<div class="container">
  <Header />

  <main id="app-main" class="app-main">Hello {name}</main>

  <button class="button" id="app-count">{data.count}</button>
</div>
