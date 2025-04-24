import { useState } from "react";
import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbackType, setFeedbackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 
  const updateFeedback = (currentFeedback) => {
    setFeedbackType({
      ...feedbackType,
      [currentFeedback]: feedbackType[currentFeedback] + 1,
    });
    console.log(feedbackType);
  };  
  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;
  const positiveFeedbacks = Math.round(
    ((feedbackType.good + feedbackType.neutral) / totalFeedback) * 100);
  
  const resetFeedbacks = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <>
      <Description />
      <Options
        value={feedbackType}
        visibleReset={!!totalFeedback}
        onUpdate={updateFeedback}
        onReset={resetFeedbacks}
      />
      {totalFeedback ? (
        <Feedback
          value={feedbackType}
          totalFeedback={totalFeedback}
          positiveFeedbacks={positiveFeedbacks}
          onUpdate={updateFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
