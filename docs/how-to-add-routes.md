# How to add routes

To add Routes, you need to create a new component in _/app/components_

example:

```
  // app/components/new-component.tsx
  import React, {SFC} from 'react';
  interface NewComponentProps {
    name: string
  }
  export const NewComponent: SFC<NewComponentProps> = (props: NewComponentProps) => <div>Hello {props.name} !</div>
```

```
// app/components/index.ts
...
export * from './new-component.tsx'
```

You then need to import it in the router component, and create a new route:

```
// app/router.tsx
...
import { NewComponent } from './components';
...

export const AppRouter: SFC<{}> = () => (
  <Router>
    <div>
      <Route component={App} />
      <Switch>
        // Other routes here
        <Route path="/new-route" component={NewComponent} />
      </Switch>
    </div>
  </Router>
);
```

And you're done for the routing part ! If you want to add your route to the navbar, just add it to header.tsx and make sure the link you pass is the same as defined in the router component

```
// app/components/header.tsx

const MENU_LINKS = [
  // Other links here
  {link: "/new-route", label: "New Route"}
]

...
```
