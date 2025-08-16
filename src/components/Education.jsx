import './Education.css';
import { useFadeInOnView } from '../hooks/useFadeInOnView.js';

export default function Education(){
  useFadeInOnView('.education-section');
  return (
    <div className="education-section fade-section" id="education">
      <div className="content-container">
        <h2>Education</h2>
        <div className="timeline-edu">
          <div className="edu-entry">
            <div className="edu-year">2021 - Present</div>
            <div className="edu-details">
              <h3>🏫 Memorial University of Newfoundland</h3>
              <p>🎓 Bachelor of Science in Computer Science</p>
            </div>
          </div>
          <div className="edu-entry">
            <div className="edu-year">Graduated in 2021</div>
            <div className="edu-details">
              <h3>🏫 Canadian International School of Egypt</h3>
              <p>🎓 Ontario Diploma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
