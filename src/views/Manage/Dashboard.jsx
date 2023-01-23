import React, { useEffect, useRef } from "react";
import Tableau from "tableau-react";
import GoToTop from "../../GoToTop";

export default function Dashboard() {
  // const options = {
  //   width: 500,
  //   height: 500,
  //   hideTabs: true,
  //   // added interval support - an integer can be passed as milliseconds in the options object and refreshDataAsync() will refresh the data automatically on your preferred interval.
  //   // All other vizCreate options are supported here, too
  //   // They are listed here: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#vizcreateoptions_record
  // };

  // const filters = {
  //   Colors: ["Blue", "Red"],
  //   Sizes: ["Small", "Medium"],
  // };

  // const parameters = {
  //   Param1: "Value",
  //   Param2: "Other Value",
  // };

  const options = {
    hideTabs: true,
    hideToolbar: true,
  };

  return (
    <div
      id="MainDashboard"
      className="h-screen border-r border-gray-200 w-60 p-8 mt-[1rem]"
    >
      <div className="w-[68rem] h-[36rem] bg-green">
        <Tableau
          url="https://public.tableau.com/views/JSAPI-Superstore/Overview?:language=en-US&:display_count=n&:origin=viz_share_link"
          options={options}
        />
      </div>

      {/* <div className="bg-green">
        <TableauReport
          url="http://public.tableau.com/static/images/gl/globalshala6/Sheet1/1_rss.png"
          // filters={filters}
          // parameters={parameters}
          // options={options} // vizCreate options
          // Overwrite default query params
          // defaults to '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
          query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
        />
      </div> */}
      <GoToTop />
    </div>
  );
}
