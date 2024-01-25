// // Road.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
// import '../App.css';

// const Road = () => {
//   const professionalTrackQuizData = [
//     { question: 'What is a key element in professional track driving?', options: ['Drifting', 'Straight-line speed', 'Handbrake turns', 'Donuts'], correctAnswer: 'Straight-line speed' },
//     { question: 'What is the purpose of a roll cage in track cars?', options: ['Aesthetic enhancement', 'Increased weight', 'Safety in case of a rollover', 'Improved aerodynamics'], correctAnswer: 'Safety in case of a rollover' },
//     { question: 'Which braking technique is commonly used in professional track driving?', options: ['Threshold braking', 'Emergency braking', 'Cadence braking', 'Trail braking'], correctAnswer: 'Threshold braking' },
//   ];

//   const [lessons, setLessons] = useState([]);
//   const [newLesson, setNewLesson] = useState({
//     title: '',
//     content: '',
//     videoURL: '',
//     lessons: '',
//     photos: '',
//   });
//   const [quizAnswers, setQuizAnswers] = useState(Array(professionalTrackQuizData.length).fill(''));
//   const [quizScore, setQuizScore] = useState(null);
//   const [editingLesson, setEditingLesson] = useState(null);

//   useEffect(() => {
//     fetchLessons();
//   }, []);

//   const fetchLessons = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/lessons');
//       setLessons(response.data);
//     } catch (error) {
//       console.error('Error fetching road lessons:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewLesson({ ...newLesson, [e.target.name.toLowerCase()]: e.target.value });
//   };

//   const handleAddLesson = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:4000/api/lessons', newLesson);
//       fetchLessons();
//       setNewLesson({
//         title: '',
//         content: '',
//         videoURL: '',
//         lessons: '',
//         photos: '',
//       });
//     } catch (error) {
//       console.error('Error adding road lesson:', error.message);
//       console.error('Error details:', error.response.data);
//     }
//   };

//   const handleEditLesson = (lesson) => {
//     setEditingLesson(lesson);
//     setNewLesson({
//       title: lesson.Title,
//       content: lesson.Content,
//       videoURL: lesson.VideoURL,
//       lessons: lesson.Lessons,
//       photos: lesson.Photos,
//     });
//   };

//   const handleUpdateLesson = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:4000/api/lessons/${editingLesson.PageId}`, newLesson);
//       fetchLessons();
//       setEditingLesson(null);
//       setNewLesson({
//         title: '',
//         content: '',
//         videoURL: '',
//         lessons: '',
//         photos: '',
//       });
//     } catch (error) {
//       console.error('Error updating road lesson:', error);
//     }
//   };

//   const handleDeleteLesson = async (lessonId) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/lessons/${lessonId}`);
//       fetchLessons();
//     } catch (error) {
//       console.error('Error deleting road lesson:', error);
//     }
//   };

//   const handleQuizSubmit = (e) => {
//     e.preventDefault();

//     let score = 0;
//     const answers = {};

//     quizAnswers.forEach((userAnswer, index) => {
//       if (userAnswer === professionalTrackQuizData[index].correctAnswer) {
//         score++;
//         answers[index] = { userAnswer, correct: true };
//       } else {
//         answers[index] = { userAnswer, correct: false };
//       }
//     });

//     setQuizScore({ score, answers });
//   };

//   const handleQuizAnswerChange = (index, answer) => {
//     setQuizAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       newAnswers[index] = answer;
//       return newAnswers;
//     });
//   };

//   const renderLessonBox = (lesson) => {
//     return (
//       <div key={lesson.PageId} className="lesson-box">
//         <strong>{lesson.Title}</strong>
//         <p>{lesson.Content}</p>

//         {lesson.VideoURL && (
//           <div className="box">
//             <ReactPlayer url={lesson.VideoURL} controls width="100%" height="auto" />
//             <button onClick={() => handleEditLesson(lesson)}>Edit Video</button>
//             <button onClick={() => handleDeleteLesson(lesson.PageId)}>Delete Video</button>
//           </div>
//         )}

//         {lesson.Photos && (
//           <div className="box">
//             <img src={lesson.Photos} alt="Lesson Photos" />
//           </div>
//         )}

//         {lesson.Lessons && (
//           <div className="box">
//             <p>{lesson.Lessons}</p>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const renderLessons = () => {
//     return (
//       <div className="lessons-container">
//         {lessons.map((lesson) => renderLessonBox(lesson))}
//       </div>
//     );
//   };

//   const renderQuizScore = () => {
//     if (quizScore === null) {
//       return null;
//     }

//     return (
//       <div className="quiz-score">
//         <h3>Quiz Score: {quizScore.score}</h3>
//         <h4>Answers:</h4>
//         <ul>
//           {Object.entries(quizScore.answers).map(([index, { userAnswer, correct }]) => (
//             <li key={index}>
//               {`Question ${parseInt(index) + 1}: ${userAnswer} - ${correct ? 'Correct' : 'Incorrect'}`}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   const renderQuiz = () => {
//     return (
//       <div className="quiz">
//         <h2>Professional Track Driving Quiz</h2>
//         <form onSubmit={handleQuizSubmit}>
//           {professionalTrackQuizData.map((question, index) => (
//             <div key={index} className="quiz-question">
//               <p>{question.question}</p>
//               {question.options.map((option, optionIndex) => (
//                 <label key={optionIndex}>
//                   <input
//                     type="radio"
//                     name={`question-${index}`}
//                     value={option}
//                     onChange={(e) => handleQuizAnswerChange(index, e.target.value)}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           ))}
//           <button type="submit">Submit Quiz</button>
//         </form>
//       </div>
//     );
//   };

//   return (
//     <div className="road-lessons-container">
//       <h1>Road Lessons</h1>
//       <button onClick={() => setEditingLesson(null)}>Add New Lesson</button>

//       <form onSubmit={editingLesson ? handleUpdateLesson : handleAddLesson}>
//         <div className="form-group">
//           <label>Title:</label>
//           <input type="text" name="title" value={newLesson.title} onChange={handleInputChange} required />
//         </div>
//         <div className="form-group">
//           <label>Content:</label>
//           <textarea name="content" value={newLesson.content} onChange={handleInputChange} required />
//         </div>
//         <div className="form-group">
//           <label>Video URL:</label>
//           <input type="text" name="videoURL" value={newLesson.videoURL} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Lessons:</label>
//           <textarea name="lessons" value={newLesson.lessons} onChange={handleInputChange} />
//         </div>
//         <div className="form-group">
//           <label>Photos URL:</label>
//           <input type="text" name="photos" value={newLesson.photos} onChange={handleInputChange} />
//         </div>
//         <button type="submit">{editingLesson ? 'Update Lesson' : 'Add Lesson'}</button>
//       </form>

//       {renderLessons()}
//       {renderQuizScore()}
//       {renderQuiz()}
//     </div>
//   );
// };

// export default Road;
