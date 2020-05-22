<script>
  export let name;
  import Table from "@nlpsl202/svelte-data-tabu";
  import { HeaderConfig } from "./config/HeaderConfig.js";
  import Fetch from "./Fetch.svelte";
  import Form from "./Form.svelte";
  let searchTerm;
  function handleSubmit() {
    const { value } = this.elements.search;
    searchTerm = value;
  }
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
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <Form {handleSubmit} />
  <Fetch {searchTerm} let:data>
    <h1>A list of links</h1>
    <!-- <ul>
      {#each data as link}
        <li>
          <a href={link.id}>{link.tags}</a>
        </li>
      {/each}
    </ul> -->
    <Table title="Table Title" config={HeaderConfig} {data} />
  </Fetch>
</main>
