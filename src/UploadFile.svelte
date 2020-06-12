<script>
  import { onMount } from "svelte";
  let files;
  export let path;

  async function upload() {
    let form = new FormData();
    form.append("files", files[0]);

    const response = await fetch(path, {
      method: "POST",
      body: form
    });
    const json = await response.json();
  }
</script>

<input id="fileUpload" type="file" bind:files />

{#if files}
  <button on:click={upload}>Submit</button>
{/if}
