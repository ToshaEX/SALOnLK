import React from "react";
import Tableau from "tableau-react";
import TableauReport from "tableau-react";
import GoToTop from "../../../GoToTop";

const ManageCharts = () => {
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
    <div id="DashboardCharts" className="h-screen w-60 p-10 bg-white">
      <div className="w-[68rem] h-[36rem]">
        <Tableau
          url="https://public.tableau.com/views/SalonManagementSystemDashboard/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          options={options}
          query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
        />
      </div>

      {/* <div className="bg-green">
        <TableauReport
          url="https://public.tableau.com/views/SalonManagementSystemDashboard/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          filters={filters}
          parameters={parameters}
          options={options} // vizCreate options
          // Overwrite default query params
          // defaults to '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
          query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
        />
      </div> */}
      <GoToTop />
    </div>
  );
};

export default ManageCharts;
