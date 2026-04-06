# React Islands Best Practices - Examples

## Derive, do not sync

```tsx
// BAD
const [fullName, setFullName] = useState('');
useEffect(() => setFullName(`${first} ${last}`), [first, last]);
```

```tsx
// GOOD
const fullName = `${first} ${last}`;
```

## Browser API placement

```tsx
// BAD
const width = window.innerWidth;
```

```tsx
// GOOD
const [width, setWidth] = useState(0);
useEffect(() => {
  setWidth(window.innerWidth);
}, []);
```

## Stable keys in dynamic lists

```tsx
// BAD
{items.map((item, index) => <Card key={index} item={item} />)}
```

```tsx
// GOOD
{items.map((item) => <Card key={item.id} item={item} />)}
```

## Conditional rendering with numeric values

```tsx
// BAD: renders 0 when count is 0
{count && <Badge>{count}</Badge>}
```

```tsx
// GOOD
{count > 0 ? <Badge>{count}</Badge> : null}
```

## Effect misuse for event workflow

```tsx
// BAD
useEffect(() => {
  if (submitted) createPost();
}, [submitted]);
```

```tsx
// GOOD
const onSubmit = async () => {
  await createPost();
};
```

## Render factory vs component identity

```tsx
// BAD
const renderCard = (item: Item) => <Card item={item} />;
return <>{items.map(renderCard)}</>;
```

```tsx
// GOOD
const ItemCard = ({ item }: { item: Item }) => <Card item={item} />;
return <>{items.map((item) => <ItemCard key={item.id} item={item} />)}</>;
```

## Accessibility for icon-only controls

```tsx
// BAD
<button onClick={onDelete}><TrashIcon /></button>
```

```tsx
// GOOD
<button onClick={onDelete} aria-label="Delete item"><TrashIcon /></button>
```

## Avoid wrapper-only components

```tsx
// BAD
function UserSync() {
  useSyncUser();
  return null;
}
```

```tsx
// GOOD
function HeaderContainer() {
  useSyncUser();
  return <Header />;
}
```
