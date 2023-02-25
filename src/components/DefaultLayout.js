import React from "react";

import { AppBar } from "./AppBar";

export function DefaultLayout({ children })
{
  return (
    <div>
      <AppBar/>
      { children }
    </div>
  )
}
