<script>
  import '../styles/style.scss';
</script>

<main>
  <div class="wrapper">
    <slot/>
  </div>
</main>

<style lang="scss">
  main {
    padding: 0 150px;
    display: flex;
    align-items: center;
    height: 100vh;

    // Tablet
    @include bp-max(md) {
      padding: 0 75px;
    }
    // Mobile
    @include bp-max(sm) {
      padding: 0 20px;
    }
    
  }

  .wrapper {
    width: 100%;
  }
</style>