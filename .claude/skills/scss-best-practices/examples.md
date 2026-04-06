# SCSS Best Practices - Examples

## Do not use px for sizing

```scss
/* BAD */
.hero {
  margin-bottom: 40px;
  font-size: 18px;
  padding: 24px;
}
```

```scss
/* GOOD */
@use 'src/styles/common/gem' as *;

.hero {
  margin-bottom: gem(40);
  font-size: var(--font-size-desc3);
  padding: gem(24);
}
```

## Scope section styles

```scss
/* BAD */
h2 {
  margin-bottom: 40px;
}
```

```scss
/* GOOD */
.home-hero {
  h2 {
    margin-bottom: gem(40);
  }
}
```

## Typography via mixins/tokens

```astro
/* BAD */
<h2
  class="hero__title"
  style="font-family: 'Righteous', sans-serif; font-size: 64px; line-height: 96px; letter-spacing: 3.4px;"
>
  Title
</h2>
```

```astro
/* GOOD */
<h2 class="hero__title title-h3">Title</h2>
```

## Responsive through variables and project breakpoints

```scss
/* BAD */
.hero {
  padding-inline: 120px;
}

@media (max-width: 900px) {
  .hero {
    padding-inline: 40px;
  }
}
```

```scss
/* GOOD */
.hero {
  max-width: var(--container-width);
}

@media all and (max-width: 1024px) {
  .hero {
    margin-top: gem(24);
  }
}

@media all and (max-width: 480px) {
  .hero {
    margin-top: gem(16);
  }
}
```

## Avoid deep brittle nesting

```scss
/* BAD */
.page .wrapper .content .card .title {
  color: var(--color-text);
}
```

```scss
/* GOOD */
.card__title {
  color: var(--color-text);
}
```

## Keep focus-visible styles

```scss
/* BAD */
.button:focus {
  outline: none;
}
```

```scss
/* GOOD */
.button:focus-visible {
  outline: gem(2) solid var(--color-black);
  outline-offset: gem(2);
}
```

## Respect reduced motion

```scss
/* BAD */
.hero {
  animation: float 2s infinite ease-in-out;
}
```

```scss
/* GOOD */
.hero {
  animation: float 2s infinite ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .hero {
    animation: none;
  }
}
```

## Map Figma values to project tokens (MCP flow)

```scss
/* BAD: copied raw values directly from design */
.cta {
  color: #1f5eff;
  font-size: 18px;
  padding: 20px 32px;
}
```

```scss
/* GOOD: mapped to project token system */
@use 'src/styles/common/gem' as *;

.cta {
  color: var(--color-mineral-green);
  font-size: var(--font-size-desc3);
  padding: gem(20) gem(32);
}
```
