
<script>
  export let m = false;
  export let d = false;
</script>

<br class:m class:d>
<style lang="scss">
  br {
    display: none;
  }
  .d {
    @include bp-min(md) {
      display: block;
    }
  }
  .m {
    @media (min-width: 371px) and (max-width: 576px) {
      display: block;
    }
  }
</style>