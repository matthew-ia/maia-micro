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
    padding: sp(0 10.5);
    display: flex;
    align-items: center;
    min-height: 100vh;

    // Tablet
    @include bp-max(md) {
      padding: sp(0 7.5);
      min-height: unset;
    }
    // Mobile
    @include bp-max(sm) {
      padding: sp(7.5 2);
    }
    
  }

  .wrapper {
    width: 100%;
  }
</style>