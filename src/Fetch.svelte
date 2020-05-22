<script>
  import { onMount } from "svelte";
  export let url = "https://academy.valentinog.com/api/link/";
  export let searchTerm = undefined;
  let jsonResponse = [];
  $: regex = new RegExp(searchTerm, "gi");
  $: data = searchTerm
    ? jsonResponse
        .filter(element => element.title.match(regex))
        .sort((a, b) => a.id - b.id)
    : jsonResponse.sort((a, b) => a.id - b.id);
  onMount(async function() {
    const response = await fetch(url);
    const json = await response.json();
    // save the response in the new variable
    jsonResponse = json;
  });
</script>

<!-- {data} is a shortand for data={data} -->
<slot {data} />
