export default function Feedback({ value, totalFeedback, positiveFeedbacks }) {
  return (
    <ul className="feedback">
      <li className="feedback-item">Good: {value.good}</li>
      <li className="feedback-item">Neutral: {value.neutral}</li>
      <li className="feedback-item">Bad: {value.bad}</li>
      <li className="feedback-item">Total: {totalFeedback}</li>
      <li className="feedback-item">Positive: {positiveFeedbacks}%</li>
    </ul>
  );
}
