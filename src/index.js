import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "@/components/nav";
import "@/styles/index.less";
import "normalize.css";

const Popular = lazy(() => import("@/pages/Popular"));
const Battle = lazy(() => import("@/pages/Battle"));
const Result = lazy(() => import("@/components/result"));

ReactDOM.render(
  <HashRouter>
    <Nav />
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Popular} />
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/result" component={Result} />
      </Suspense>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
