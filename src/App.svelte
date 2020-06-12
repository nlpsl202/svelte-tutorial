<script>
  export let name;
  import Table from "@nlpsl202/svelte-data-tabu";
  import { HeaderConfig } from "./config/HeaderConfig.js";
  import Fetch from "./Fetch.svelte";
  import Form from "./Form.svelte";
  import Video from "./Video.svelte";
  import ChatBot from "./ChatBot.svelte";
  import UploadFile from "./UploadFile.svelte";
  let jsonResponse;
  let searchTerm;
  let pinToTop = true;
  let path = "http://localhost:8000/upload";
  function handleSubmit() {
    const { value } = this.elements.search;
    searchTerm = value;
  }

  import { spring } from "svelte/motion";

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
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <UploadFile {path} />
  <div style="height:300px;">
    <ChatBot style="text-align: center;" />
  </div>
  <Form {handleSubmit} />
  <Fetch {searchTerm} {jsonResponse} let:data>
    <Table title="LIST" config={HeaderConfig} {data} {pinToTop} />
  </Fetch>
</main>
