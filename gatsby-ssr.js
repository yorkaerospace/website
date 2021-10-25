import React from "react";

import { getCssText } from "./stitches.config";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
