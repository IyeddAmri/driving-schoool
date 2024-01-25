import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../index1.css';

const DriftLessons = () => {
  const quizData = [
    {
      question: 'What is Feint Drift?',
      options: [
        'Weight transfer for controlled drift initiation.',
        'Quick handbrake application for turns.',
        'Sudden clutch disengagement for wheel spin.',
        'Excessive throttle for oversteer.',
      ],
      correctAnswer: 'Weight transfer for controlled drift initiation.',
    },
    {
      question: 'What is Clutch Kick?',
      options: [
        'Quick initiation of drifts using handbrake.',
        'Rapid clutch disengagement and throttle application.',
        'Utilizing excess engine power for sustained drifts.',
        'Gradual brake modulation for controlled slides.',
      ],
      correctAnswer: 'Rapid clutch disengagement and throttle application.',
    },
    {
      question: 'What is E-Brake Drift?',
      options: [
        'Maintaining drift angles with minimal throttle input.',
        'Locking up rear wheels with handbrake for slides.',
        'Utilizing excess engine power to break traction.',
        'Abrupt steering maneuvers for quick turns.',
      ],
      correctAnswer: 'Locking up rear wheels with handbrake for slides.',
    },
    {
      question: 'What is Power Over Drift?',
      options: [
        'Sustained drifts at higher speeds using excess engine power.',
        'Weight transfer for controlled drift initiation.',
        'Quick handbrake application for turns.',
        'Gradual brake modulation for controlled slides.',
      ],
      correctAnswer: 'Sustained drifts at higher speeds using excess engine power.',
    },
  ];

  const [lessons, setLessons] = useState([]);
  const [newLesson, setNewLesson] = useState({
    title: '',
    content: '',
    videoURL: '',
    lessons: '',
    photos: '',
  });
  const [quizAnswers, setQuizAnswers] = useState(Array(quizData.length).fill(''));
  const [quizScore, setQuizScore] = useState(null);
  const [editingLesson, setEditingLesson] = useState(null);
  const [showAddLessonForm, setShowAddLessonForm] = useState(false);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await axios.get('http://localhost:4000/drift/lesson');
      setLessons(response.data);
    } catch (error) {
      console.error('Error fetching drift lessons:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewLesson({ ...newLesson, [e.target.name]: e.target.value });
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/drift/lesson', newLesson);
      console.log('Lesson added successfully:', response.data);
      fetchLessons();
      setNewLesson({
        title: '',
        content: '',
        videoURL: '',
        lessons: '',
        photos: '',
      });
      setShowAddLessonForm(false);
    } catch (error) {
      console.error('Error adding drift lesson:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received. Check the server.');
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  const handleEditLesson = (lesson) => {
    setEditingLesson(lesson);
    setNewLesson({
      title: lesson.Title,
      content: lesson.Content,
      videoURL: lesson.VideoURL,
      lessons: lesson.Lessons,
      photos: lesson.Photos,
    });
  };

  const handleUpdateLesson = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/drift/lesson/${editingLesson.PageId}`, newLesson);
      fetchLessons();
      setEditingLesson(null);
      setNewLesson({
        title: '',
        content: '',
        videoURL: '',
        lessons: '',
        photos: '',
      });
    } catch (error) {
      console.error('Error updating drift lesson:', error);
    }
  };

  const handleDeleteLesson = async (lessonId) => {
    try {
      await axios.delete(`http://localhost:4000/drift/lesson/${lessonId}`);
      console.log(`Lesson with ID ${lessonId} deleted successfully`);
      fetchLessons();
    } catch (error) {
      console.error('Error deleting drift lesson:', error);
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();

    let score = 0;
    const answers = {};

    quizAnswers.forEach((userAnswer, index) => {
      if (userAnswer === quizData[index].correctAnswer) {
        score++;
        answers[index] = { userAnswer, correct: true };
      } else {
        answers[index] = { userAnswer, correct: false };
      }
    });

    setQuizScore({ score, answers });
  };

  const handleQuizAnswerChange = (index, answer) => {
    setQuizAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const renderLessonBox = (lesson) => {
    return (
      <div key={lesson.PageId} className="lesson-box">
        <strong>{lesson.Title}</strong>
        <p>{lesson.Content}</p>

        {lesson.VideoURL && (
          <div className="box">
            <ReactPlayer url={lesson.VideoURL} controls width="100%" height="auto" />
            <button onClick={() => handleEditLesson(lesson)}>Edit Video</button>
            <button onClick={() => handleDeleteLesson(lesson.PageId)}>Delete Video</button>
          </div>
        )}

        {lesson.Photos && (
          <div className="box">
            <img src={lesson.Photos} alt="Lesson Photos" />
          </div>
        )}

        {lesson.Lessons && (
          <div className="box">
            <p>{lesson.Lessons}</p>
          </div>
        )}

        <button onClick={() => handleEditLesson(lesson)}>Edit Lesson</button>
        <button onClick={() => handleDeleteLesson(lesson.PageId)}>Delete Lesson</button>
      </div>
    );
  };

  const renderQuiz = () => {
    return (
      <div className="quiz">
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          {quizData.map((question, index) => (
            <div key={index} className="quiz-question">
              <p>{question.question}</p>
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleQuizAnswerChange(index, e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit Quiz</button>
        </form>
      </div>
    );
  };

  return (
    <div className="drift-lessons-container">
      <h1>Drift Lessons</h1>

      <button onClick={() => setShowAddLessonForm(!showAddLessonForm)}>
        {showAddLessonForm ? 'Cancel' : 'Add Lesson'}
      </button>

      {showAddLessonForm && (
        <form className="lesson-form" onSubmit={editingLesson ? handleUpdateLesson : handleAddLesson}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={newLesson.title} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea name="content" value={newLesson.content} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Video URL:</label>
            <input type="text" name="videoURL" value={newLesson.videoURL} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Lessons:</label>
            <textarea name="lessons" value={newLesson.lessons} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Photos:</label>
            <input type="text" name="photos" value={newLesson.photos} onChange={handleInputChange} />
          </div>
          <button type="submit">{editingLesson ? 'Update Lesson' : 'Add Lesson'}</button>
        </form>
      )}

      <div className="lesson-container">
        {lessons.map((lesson) => renderLessonBox(lesson))}
      </div>

      {renderQuiz()}

      {quizScore && (
        <div className="quiz-score">
          <h3>Quiz Score: {quizScore.score}</h3>
          <h4>Answers:</h4>
          <ul>
            {Object.entries(quizScore.answers).map(([index, { userAnswer, correct }]) => (
              <li key={index}>
                {`Question ${parseInt(index) + 1}: ${userAnswer} - ${correct ? 'Correct' : 'Incorrect'}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DriftLessons;
