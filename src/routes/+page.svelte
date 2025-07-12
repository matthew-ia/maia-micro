<script>
  import Button from '../components/button.svelte';
  import Br from '../components/br.svelte';
  import Arrow from '../components/outlink-arrow.svelte';

  const links = {
    readcv: 'https://read.cv/matthewia',
    github: 'https://github.com/matthew-ia',
    email: 'mailto:howdy@maia.ooo',
  }

  const newTabProps = {
    target: '_blank',
    rel: 'noopener',
  }
</script>
<svelte:head>
  <title>Matthew I. Alicea</title>
</svelte:head>

<p class="intro">
  I'm <span class="name">Matthew I. Alicea</span>, a&nbsp;designer. 
  I think the web is pretty neat and like creating things&nbsp;for&nbsp;it.
</p>
<p></p>
<p>I'm currently working at Peter Millar, an American luxury apparel brand, as the UX Designer for our e-commerce websites. I design solutions that reduce friction, improve usability, and drive conversion—connecting user needs with business goals. I serve both the Peter Millar and G/FORE brands, designing e-commerce experiences that support each brand’s unique identity and customer needs.</p>
<p>🚧 Full site coming sometime in <del>2023</del> 2025. (Probably.)</p>
<p>In the meantime, <a href="{links.email}">email me</a> if you'd like to chat.</p>

<style lang="scss">
  .intro {
    max-width: 800px;
  }
  p {
    margin-bottom: sp(5);
    @include bp-max(sm) {
      // text-align: center;
      margin-bottom: sp(4);
    }
  }
  .link {
    padding: 0 sp(.5);
    display: inline-block;
    @include mobile {
      &:first-of-type {
        padding-left: 0;
      }
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
    // font-family: $font-family-inter;
    letter-spacing: 1px;
    font-weight: 500;
  }
</style>