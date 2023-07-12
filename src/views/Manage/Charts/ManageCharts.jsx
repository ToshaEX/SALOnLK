import React from "react";
import Tableau from "tableau-react";
import GoToTop from "../../../GoToTop";

const ManageCharts = () => {
  const options = {
    hideTabs: true,
    hideToolbar: true,
  };

  return (
    <div id="DashboardCharts" className="h-full w-full p-2 md:p-10 bg-white">
      <div className="grid grid-cols-1">
        <Tableau
          url="https://public.tableau.com/views/SalonManagementSystemDashboard/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
          options={options}
          query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
        />
      </div>
      <GoToTop />
    </div>
  );
};

export default ManageCharts;
