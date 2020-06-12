<script>
  import { onMount } from "svelte";
  export let path = "/data/villager.json";
  export let searchTerm = undefined;
  export let jsonResponse = [];
  $: regex = new RegExp(searchTerm, "gi");
  $: data = searchTerm
    ? jsonResponse
        .filter(element => element.title.match(regex))
        .sort((a, b) => a.no - b.no)
    : jsonResponse.sort((a, b) => a.no - b.no);
  onMount(async function() {
    const response = await fetch(path);
    const json = await response.json();
    // save the response in the new variable
    jsonResponse = Object.keys(json).map(key => json[key]);
  });
</script>

<!-- {data} is a shortand for data={data} -->
<slot {data} />
