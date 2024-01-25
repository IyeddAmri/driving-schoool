// Road.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../index2.css';

const Road = () => {
  const professionalTrackQuizData = [
    {
      question: 'When is Heel Toe Downshifting most effective?',
      options: [
        'Improving grip in tight turns.',
        'Optimizing gear transitions.',
        'Executing quick acceleration maneuvers.',
        'Preferred by automatic transmission drivers.',
      ],
      correctAnswer: 'Optimizing gear transitions.',
    },
    {
      question: 'What is Double Clutching?',
      options: [
        'Enhancing grip in demanding corners.',
        'Synchronizing gear and engine speeds.',
        'Executing strategic speed maneuvers.',
        'Recommended for electric vehicles.',
      ],
      correctAnswer: 'Synchronizing gear and engine speeds.',
    },
    {
      question: 'When should Corner Braking be applied?',
      options: [
        'Maximizing top speed on straight tracks.',
        'Improving grip in tight turns.',
        'Enhancing gear shifting proficiency.',
        'Executing precise drift maneuvers.',
      ],
      correctAnswer: 'Improving grip in tight turns.',
    },
    {
      question: 'What is Left Foot Braking?',
      options: [
        'Delicate brake modulation while maintaining throttle input.',
        'Executing strategic speed maneuvers.',
        'Optimizing gear transitions.',
        'Recommended for off-road driving.',
      ],
      correctAnswer: 'Delicate brake modulation while maintaining throttle input.',
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
  const [quizAnswers, setQuizAnswers] = useState(Array(professionalTrackQuizData.length).fill(''));
  const [quizScore, setQuizScore] = useState(null);
  const [editingLesson, setEditingLesson] = useState(null);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/lessons');
      setLessons(response.data);
    } catch (error) {
      console.error('Error fetching road lessons:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewLesson({ ...newLesson, [e.target.name.toLowerCase()]: e.target.value });
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/api/lessons', newLesson);
      fetchLessons();
      setNewLesson({
        title: '',
        content: '',
        videoURL: '',
        lessons: '',
        photos: '',
      });
    } catch (error) {
      console.error('Error adding road lesson:', error.message);
      console.error('Error details:', error.response.data);
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
      await axios.put(`http://localhost:4000/api/lessons/${editingLesson.PageId}`, newLesson);
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
      console.error('Error updating road lesson:', error);
    }
  };

  const handleDeleteLesson = async (lessonId) => {
    try {
      await axios.delete(`http://localhost:4000/api/lessons/${lessonId}`);
      fetchLessons();
    } catch (error) {
      console.error('Error deleting road lesson:', error);
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();

    let score = 0;
    const answers = {};

    quizAnswers.forEach((userAnswer, index) => {
      if (userAnswer === professionalTrackQuizData[index].correctAnswer) {
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
      </div>
    );
  };

  const renderLessons = () => {
    return (
      <div className="lessons-container">
        {lessons.map((lesson) => renderLessonBox(lesson))}
      </div>
    );
  };

  const renderQuizScore = () => {
    if (quizScore === null) {
      return null;
    }

    return (
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
    );
  };

  const renderQuiz = () => {
    return (
      <div className="quiz">
        <h2>Professional Track Driving Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          {professionalTrackQuizData.map((question, index) => (
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
    <div className="road-lessons-container">
      <h1>Road Lessons</h1>
      <button onClick={() => setEditingLesson(null)}>Add New Lesson</button>

      <form onSubmit={editingLesson ? handleUpdateLesson : handleAddLesson}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={newLesson.title} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea name="content" value={newLesson.content} onChange={handleInputChange} required />
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
          <label>Photos URL:</label>
          <input type="text" name="photos" value={newLesson.photos} onChange={handleInputChange} />
        </div>
        <button type="submit">{editingLesson ? 'Update Lesson' : 'Add Lesson'}</button>
      </form>

      {renderLessons()}
      {renderQuizScore()}
      {renderQuiz()}
    </div>
  );
};

export default Road;
