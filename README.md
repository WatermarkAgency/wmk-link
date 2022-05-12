## Links

### WmkLink

```
const WmkLink = React.forwardRef(
  ({ id, children, target, mailto, tel, style, className, speed }, ref)...
```

```jsx
<WmkLink to={'/page'}>Link Text</WmkLink>
<WmkLink to="http://site.com" target="blank">Link Text</WmkLink>
<WmkLink mailto>email@address.com</WmkLink>
<WmkLink tel>123.456.7890</WmkLink>
```

_target_ any target will trigger external link. It's best to leave target _undefined_ if intended to use Gatsby <Link>.
_to_ can be left blank for _tel_ and _mailto_ if {children} is phone number / email.

### GTM Data Layer

Pass an object (_ToGtmDatalayer_: {event: string, params: {[key: string]: string}[]}) to the **toDataLayer** prop to trigger an event and meta data in Google Tag Manager
