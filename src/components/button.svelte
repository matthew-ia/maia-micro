<!--
  
  BUTTON
  
  Renders multiple types of buttons, and anchor tags as buttons when appropriate
  
-->

<script>
  export let variant = 'normal';
  export let type = 'button';
  export let size = 'normal';
  export let href = false;
  export let disabled = false;
  export let pressed = false;
  export let className = '';
  
  let classes = `${variant} ${size}`;
  if (className) classes += ` ${className}`;

</script>

<!-- RENDER
────────────────────────────────── -->

{#if href}
    <a 
      on:click
      href={href} 
      class:pressed 
      class:disabled 
      class={classes} 
      {...$$restProps}
    >
      <slot/>
    </a>
  {:else}
    <button 
      on:click
      type={type} 
      class:pressed 
      class:disabled 
      class={classes} 
      disabled={disabled}
      {...$$restProps}
    >
      <slot/>
    </button>
{/if}

<!-- STYLES
────────────────────────────────── -->

<style lang="scss">
/*
  
  BUTTON
  
  Styles for a button element.

  Sizes:
  - Small
  - Default
  - Large
  - Block (Fluid)

  Variants:
  - Button
  - Button Ghost
  - Button Text
  
*/

button, 
a {
  
  // Theme
  // Default (fallback)
  $color: $white;
  $bg-color: $black;
  $hover-bg-color: rgba($black, 0.9);
  $focus-outline: 2px solid $blue-100;

  $border: $border-width solid transparent;
  $active-bg-color: $blue-600;
  $focus-outline: 2px solid $blue-600;
  $disabled-bg-color: $gray-100;

  --btn-color: $light;
  --btn-bg-color: $dark;
  --btn-hover-bg-color: rgba($dark, 0.9);
  --btn-focus-outline: 2px solid $blue-400;

  // Light
  @media (prefers-color-scheme: light) {
    --btn-color: #{$light};
    --btn-bg-color: #{$dark};
    --btn-hover-bg-color: #{$darker};
    --btn-focus-outline: 2px solid #{$blue-400};
  }
  // Dark
  @media (prefers-color-scheme: dark) {
    --btn-color: #{$dark};
    --btn-bg-color: #{$light};
    --btn-hover-bg-color: #{$lighter};
    --btn-focus-outline: 2px solid #{$blue-100};
  }
  
  border: $border;
  border-radius: $border-radius;
  // padding: .5rem 1.75rem .5rem 2rem;
  padding: sp(.5 1 .5 1.25);
  outline: 0;
  transition: $animate-fast;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;

  @include bp-max(md) {
    font-size: 1.6rem;
  }

  color: var(--btn-color);
  background-color: var(--btn-bg-color);

  &:hover {
    background-color: var(--btn-hover-bg-color);
    color: var(--btn-color);
    cursor: pointer;
  }
  
  &:active, &.pressed {
    background-color: var(--btn-hover-bg-color);
  }

  &:focus-visible {
    border: $border;
    outline-offset: 2px;
    outline: var(--btn-focus-outline);
  }

  &.disabled {
    background-color: $disabled-bg-color;
    cursor: not-allowed;

    &:hover {
      background-color: $disabled-bg-color;
      color: $color;
    }
  }
}

.unstyled {
  background-color: transparent;
  color: inherit;
  padding: 0;
  &:hover {
    background-color: transparent;
    color: inherit;
  }

  &:hover,
  &:focus-visible {
    color: $blue-500;
  }
}

// Sizes

.small {
  padding: 5px 11px;
}

.large {
  padding: 18px 42px;
}

.block {
  width: 100%;
}

// Kinds

.ghost {
  // Theme
  $color: $blue;
  $bg-color: transparent;
  $border: 1px solid $blue;
  $hover-color: $blue-500;
  $hover-border: 1px solid $blue-500;
  $hover-bg-color: $blue-100;
  $active-bg-color: $blue-200;
  $disabled-color: $gray-100;
  $focus-border: 1px solid $blue;
  $disabled-border: 1px solid $gray-100;

  border: $border;
  color: $color;
  background-color: transparent;
  padding: 10px 26px;

  &:hover {
    border: $hover-border;
    color: $hover-color;
    background-color: $hover-bg-color;
  }

  &:active, &.pressed {
    background-color: $active-bg-color;
  }

  &:focus {
    border: $focus-border;
    outline-offset: 2px;
  }

  &.disabled {
    border: $disabled-border;
    color: $disabled-color;
    cursor: not-allowed;

    &:hover {
      border: $disabled-border;
      color: $disabled-color;
      background-color: transparent;
    }
  }

}

.text {
  // Theme
  $color: $blue;
  $hover-bg-color: $blue-100;
  $active-bg-color: $blue-200;
  $hover-color: $blue-500;
  $focus-border: 1px solid transparent;
  $focus-outline: 2px solid $purple;
  $disabled-color: $gray-100;
  
  background-color: transparent;
  color: $color;

  &:hover {
    background-color: $hover-bg-color;
    color: $hover-color;
  }

  &:active, &.pressed {
    background-color: $active-bg-color;
  }

  &:focus-visible {
    border: $focus-border;
    outline-offset: 2px;
    outline: $focus-outline;
  }

  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
      color: $disabled-color;
    }
  }
}
</style>