import React from "react";

// When toggling aria-hidden values, we only want to affect elements
// in the DOM that come from ComponentLibrary, so we track those elements in this
// context value. See FocusedContainer.js
export const RootsContext = React.createContext([]);
