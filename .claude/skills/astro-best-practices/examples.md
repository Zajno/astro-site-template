# Astro Best Practices - Examples

## Keep pages thin

```astro
---
// BAD
window.addEventListener('scroll', () => {});
---
```

```astro
---
// GOOD
import PageLayout from 'layouts/page.astro';
import HeroSection from 'sections/home/hero/index.astro';
---
<PageLayout><HeroSection /></PageLayout>
```

## Prefer narrow hydration

```astro
<!-- BAD -->
<InteractiveCarousel client:load />
```

```astro
<!-- GOOD -->
<InteractiveCarousel client:visible />
```

## Do not hydrate static blocks

```astro
<!-- BAD -->
<Footer client:load />
```

```astro
<!-- GOOD -->
<Footer />
```

## Keep i18n content in data modules

```astro
---
// BAD
const title = 'Welcome';
---
<h1>{title}</h1>
```

```astro
---
// GOOD
import { copyrightData } from 'copyright';
const title = copyrightData.en.home.hero.title;
---
<h1>{title}</h1>
```

## Defer non-critical and heavy islands

```astro
<!-- BAD: eager hydration for everything -->
<Tabs client:load />
<ThreeScene client:load />
```

```astro
<!-- GOOD: defer based on interaction profile -->
<Tabs client:idle />
<ThreeScene client:visible />
```

## Avoid pass-through wrappers without behavior

```astro
---
// BAD
import Hero from 'sections/home/hero/index.astro';
const heroData = Astro.props.heroData;
---
<Hero {...heroData} />
```

```astro
---
// GOOD
import Hero from 'sections/home/hero/index.astro';
---
<Hero title={Astro.props.heroData.title} subtitle={Astro.props.heroData.subtitle} />
```

