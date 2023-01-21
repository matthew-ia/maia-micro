<script>
  import Br from '../components/br.svelte';
  import Button from '../components/button.svelte';
</script>

<p>
  <span class="name">Matthew I. Alicea</span> is a designer.<Br d /><Br m />They think the web is pretty neat<Br m /> and<Br d /> like creating things&nbsp;on&nbsp;it.
</p>
<p>Full site coming sometime 2023. (Probably.)</p>
<p>In the meantime, check out<Br m/> <span class="links"><Button href="woah">read.cv</Button> or <Button href="github.com">GitHub</Button></span></p>

<style lang="scss">
  p {
    margin-bottom: 50px;
    @include bp-max(sm) {
      text-align: center;
    }
  }

  .links {
    @include bp-max(lg) {
      display: block;
      margin-top: sp(2);
    }
  }

  .name {
    text-transform: uppercase;
    font-family: $font-family-inter;
    letter-spacing: 1.5px;
    font-weight: 800;
  }
  
</style>