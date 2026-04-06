# TypeScript Best Practices - Examples

## Avoid `any` leaks

```ts
// BAD
function mapPage(raw: any) {
  return { title: raw.title };
}
```

```ts
// GOOD
type RawPage = { title?: string };
function mapPage(raw: RawPage) {
  return { title: raw.title ?? '' };
}
```

## Parse unknown at boundaries

```ts
// BAD
const stored = JSON.parse(localStorage.getItem('app-state') || '{}') as AppState;
```

```ts
// GOOD
const stored: unknown = JSON.parse(localStorage.getItem('app-state') || '{}');
const appState = isAppState(stored) ? stored : DEFAULT_APP_STATE;
```

## Type-only imports

```ts
// BAD
import { SitePage } from 'data/types';
```

```ts
// GOOD
import type { SitePage } from 'data/types';
```

## Prefer narrowing over assertions

```ts
// BAD
const title = page!.meta!.title as string;
```

```ts
// GOOD
const title = page?.meta?.title ?? '';
```

## Alias consistency

```ts
// BAD
import Header from '../../../../components/common/header';
```

```ts
// GOOD
import Header from 'components/common/header';
```

## Use discriminated unions for async state

```ts
// BAD
type RequestState = { status: string; data?: Data; error?: string };
```

```ts
// GOOD
type RequestState =
  | { status: 'loading' }
  | { status: 'success'; data: Data }
  | { status: 'error'; error: string };
```

## Avoid meaningless generic wrappers

```ts
// BAD
type Entity<TData> = {
  data: TData;
  meta: Record<string, unknown>;
};
```

```ts
// GOOD
type BlogPostEntity = {
  data: BlogPost;
  meta: { source: 'cms' | 'local' };
};
```

## Prefer canonical shared contracts

```ts
// BAD
type PageMeta = { title: string; description?: string };
```

```ts
// GOOD
import type { SitePage } from 'data/types';
type PageMeta = Pick<SitePage, 'title' | 'description'>;
```
