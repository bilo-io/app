import React from 'react';
import './StepProgress.scss'; // Assuming the styles are in a Sass file

interface StepProgressProps {
    totalSteps: number;
    currentStep: number;
    isVertical?: boolean;
    fillFromEnd?: boolean;
    fillColor?: string;
    defaultColor?: string;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  totalSteps,
  currentStep,
  isVertical = false,
  fillFromEnd = false,
  fillColor = '#0067FF', // Default active color
  defaultColor = '#ddd', // Default inactive color
}) => {
  const steps = Array.from({ length: totalSteps });

  const calculateStepStyle = (index: number): React.CSSProperties => {
    const percentage = ((index + 1) / totalSteps) * 100;
    const isActive = (index + 1) / totalSteps <= currentStep / totalSteps;

    if (isVertical) {
      return {

        backgroundColor: isActive ? fillColor : defaultColor,

        bottom: fillFromEnd ? 0 : 'auto',
        // height: `${percentage}%`,
        height: `${percentage}rem`,
        top: fillFromEnd ? 'auto' : 0,
        width: `${percentage}rem`,
      };
    }

    const result = {
      backgroundColor: isActive ? fillColor : defaultColor,
      left: fillFromEnd ? 'auto' : 0,
      right: fillFromEnd ? 0 : 'auto',
      width: `${percentage}%`,
    };

    // console.log(`Step style ${index}`, result)

    return result;
  };

  return (
    <div className={`bg-red-500 step-progress ${isVertical ? 'vertical' : 'horizontal'}`}>
      {steps.map((_, index) => (
        <div key={index}
          className={`step ${calculateStepStyle(index).height ? 'vertical' : 'horizontal'}`}
          style={calculateStepStyle(index)}
        />
      ))}
    </div>
  );
};

export default StepProgress;
