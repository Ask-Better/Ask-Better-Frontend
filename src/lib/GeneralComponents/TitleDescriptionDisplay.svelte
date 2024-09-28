<script lang="ts">
  export let object: {title: string, description: string};
</script>

    <ruby>
      {object.title}
      <rt>{object.description}</rt>
    </ruby>

<style>
  ruby {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  rt {
    font-size: small;
    color: #535bf2;
  }
</style>

