<script>
  import '../styles/style.scss';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  
  injectAnalytics({ mode: dev ? 'development' : 'production' });
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
    max-width: 1200px;
    margin: 0 auto;

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