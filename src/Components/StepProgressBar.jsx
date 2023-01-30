import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function StepProgressBar(props) {
  return (
    <div>
      <ProgressBar
        percent={((props.step - 1) * 100) / 2}
        filledBackground="linear-gradient(to right, #f7f9fc, #273444)"
      >
        <Step transition="">
          {({ accomplished }) => (
            <div className="flex flex-col justify-center items-center pt-6">
              <div className={`step  ${accomplished ? "completed" : null}`}>
                1
              </div>
              <span className="text-[14px] pt-2 text-gray font-semibold">
                Services
              </span>
            </div>
          )}
        </Step>
        <Step transition="">
          {({ accomplished }) => (
            <div className="flex flex-col justify-center items-center pt-6">
              <div className={`step  ${accomplished ? "completed" : null}`}>
                2
              </div>
              <span className="text-[14px] pt-2 text-gray font-semibold">
                Time & Date
              </span>
            </div>
          )}
        </Step>
        <Step transition="">
          {({ accomplished }) => (
            <div className="flex flex-col justify-center items-center pt-6">
              <div className={`step  ${accomplished ? "completed" : null}`}>
                3
              </div>
              <span className="text-[14px] pt-2 text-gray font-semibold">
                Finished
              </span>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default StepProgressBar;
