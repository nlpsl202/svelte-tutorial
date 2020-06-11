<script>
  export let handleSubmit = function(event) {
    // do stuff
  };
</script>

<style>
  form {
    margin-top: 100px;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <label for="search">Search:</label>
  <input type="search" id="search" required />
  <button type="submit">Search</button>
</form>
