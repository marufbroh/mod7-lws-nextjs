import React, { Suspense } from "react";
import Posts from "../components/Posts";

const Heavy = () => {
  return (
    <div>
      <h1>Heavy Page</h1>
      <div>
        <Suspense fallback={<h1>Loading posts.....</h1>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
};

export default Heavy;
