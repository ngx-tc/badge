# About

@ngx-tc/badge is an Angular library that provides developers with a UI component to display badges in their applications. The library is designed to be easy to use and customizable, allowing developers to quickly and easily create badges that fit their specific needs.

The library includes a number of pre-built badge templates, which can be easily customized to fit the specific requirements of your application. These templates include standard badge types such as labels, counters, and statuses.

The library is built using Angular and is designed to be lightweight and easy to use, with minimal setup required to get started. Overall, @ngx-tc/badge is a powerful and flexible library that provides developers with the tools they need to create effective and customizable badges for their Angular applications.

## Usage

Install `@ngx-tc/badge` in your project:

```
npm install @ngx-tc/badge
```

Import `TcBadgeModule` e.g. in your `app.module.ts`:
```typescript
import { TcBadgeModule } from '@ngx-tc/badge';

@NgModule({
  imports: [
    ...
      TcBadgeModule
  ],
})
export class AppModule {}
```

Use the `tc-badge` component in you app:
```html
<tc-badge>
  Badge
</tc-badge>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/badges](http://tc-library.type-code.pro/#/components/badges)
