## Create React App
```bash
$ npx create-react-app <NAME>
```

#### Run the App and visit http://localhost:3000
```bash
$ npm start
```


#### Create a components folder in the /src directory where you put your components

#### Let's restructure it and add a Header component that we reference in the App.js

#### Remove the content from the App.js render() and put it into a Header component
#### Also change the heading text - we also have to change the path to the logo

```js
//src/components/Header.js
import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Welcome Ironhacker</h1>
                    <h3>You are ready to take this to the next level!</h3>
                </header>
            </div>
        )
    }
}
```

#### And inside App.js
```js
// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
```

### Adding Images, Fonts and Files
With Webpack, using static assets like images and fonts works similarly to CSS.
You can import a file right in a JavaScript module. 
Like we did with the logo.svg in the Header component. The import statement returns a path or, for files less than 10k bytes, excluding svgs, a data URI.

```js
//src/components/Header.js
import logo from '../logo.svg';

//
<img src={logo} className="App-logo" alt="logo" />
```

### The logo svg could also be imported like that and turned directly into a React component

```js
//src/components/Header.js
import { ReactComponent as Logo } from '../logo.svg';

<Logo className="App-logo" />
``` 

#### https://create-react-app.dev/docs/adding-a-stylesheet