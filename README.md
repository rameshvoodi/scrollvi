# Hero Animation

This project is a React application that includes a component named `Hero`. The `Hero` component uses the `framer-motion` library to animate a logo and some text based on the user's scroll position.

## Features

- The logo and text start at the center of the screen.
- When the user scrolls down, the logo and text move to the top left and top right corners, respectively.
- The animation is done using the `motion` component from the `framer-motion` library.

## How It Works

- A state variable `scrollStarted` is used to track whether the user has started scrolling.
- The `useEffect` hook is used to add a scroll event listener when the component mounts, which updates the `scrollStarted` state variable based on the user's scroll position.
- The logo image is imported from a file named `logo.svg`, and the `motion` component from `framer-motion` is used to animate the logo and text.

## installing dependencies

```bash

npm install framer-motion

```

## Usage

To use this component in your project, simply import it and include it in your JSX:

```jsx
import Hero from './Hero';

function App() {
  return (
    <div>
      <Hero />
      {/* Your other components */}
    </div>
  );
}

```