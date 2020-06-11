<script>
  export let name;
  import Table from "@nlpsl202/svelte-data-tabu";
  import { HeaderConfig } from "./config/HeaderConfig.js";
  import Fetch from "./Fetch.svelte";
  import Form from "./Form.svelte";
  import Video from "./Video.svelte";
  import ChatBot from "./ChatBot.svelte";
  import ToyBall from "./ToyBall.svelte";
  let searchTerm;
  let pinToTop = true;
  function handleSubmit() {
    const { value } = this.elements.search;
    searchTerm = value;
  }

  import { spring } from 'svelte/motion';

	let coords = spring({ x: 50, y: 50 });
	let size = spring(10);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  svg { width: 100%; height: 100%; margin: -8px; }
	circle { fill: #ff3e00 }
</style>

<div style="position: absolute; right: 1em;">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
	</label>
</div>
<svg
	on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
	on:mousedown="{() => size.set(30)}"
	on:mouseup="{() => size.set(10)}"
>
	<circle cx={$coords.x} cy={$coords.y} r={$size}/>

<main>


  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <div style="height:300px;">
    <ChatBot style="text-align: center;" />
  </div>
  <Form {handleSubmit} />
  <Fetch {searchTerm} let:data>
    <h1>LIST</h1>
    <!-- <ul>
      {#each data as link}
        <li>
          <a href={link.id}>{link.tags}</a>
        </li>
      {/each}
    </ul> -->
    <Table title="Table Title" config={HeaderConfig} {data} {pinToTop} />
  </Fetch>
</main>
</svg>