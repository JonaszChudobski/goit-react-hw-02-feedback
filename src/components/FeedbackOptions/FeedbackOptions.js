import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <button key="good" id="good" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button key="neutral" id="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button key="bad" id="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
