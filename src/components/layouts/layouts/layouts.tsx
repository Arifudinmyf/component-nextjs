import * as React from "react";
import Header from "../header";
import Profile from "../profile";
import Content from "../content";

type LayoutsProps = {
  //
};

const Layouts: React.FC<any> = () => {
  return <>
    <Header />
    <div>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 px-6 mt-32 lg:px-12 w-2xl container">
        <Profile />
        <Content />
      </main>
    </div>
  </>;
};

export default Layouts;
