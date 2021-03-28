# Navigation

This is a documentation about the Navigation-Component. This bottom tab navigaton in React leeds the users through the app pages. It's responsive and based on BrowserRouter and HashRouter. For the icons i have used the fontAwesome-library.

```jsx
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faBookmark,
  faHandHoldingHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

<Router>
  <Navigation />
</Router>;
```
