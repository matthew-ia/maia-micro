<script>
  import Button from '../components/button.svelte';
  import Br from '../components/br.svelte';
  import Arrow from '../components/outlink-arrow.svelte';

  const links = {
    readcv: 'https://read.cv/matthewia',
    github: 'https://github.com/matthew-ia',
  }

  const newTabProps = {
    target: '_blank',
    rel: 'noopener',
  }
</script>

<p>
  <span class="name">Matthew I. Alicea</span> is a designer.<Br d /><Br m />
  They think the web is pretty neat<Br m /> and<Br d /> like creating things&nbsp;for&nbsp;it.
</p>
<p>Full site coming sometime 2023. (Probably.)</p>
<p>In the meantime, check out<Br m/> 
  <span class="links">
    <span class="link"><Button href={links.readcv} {...newTabProps}>read.cv<Arrow /></Button></span>
    or <span class="link"><Button href={links.github} {...newTabProps}>GitHub<Arrow /></Button></span>
  </span>
</p>

<style lang="scss">
  p {
    margin-bottom: 50px;
    @include bp-max(sm) {
      text-align: center;
      margin-bottom: 40px;
    }
  }
  .link {
    padding: 0 sp(1);
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