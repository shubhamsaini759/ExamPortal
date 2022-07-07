import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../Component/Home/Login/Login";
import Signup from "../Component/Home/Signup/Signup";
import User from "../Component/Users/User";
import Admin from "../Component/Users/Admin/Admin";
import Examiner from "../Component/Users/Examiner/Examiner";
import AddStudent from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/AddStudent/AddStudent";
import ExaminerStudentList from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/ExaminerStudentList/ExaminerStudentList";
import AddSubject from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/AddSubject/AddSubject";
import SubjectList from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/SubjectList/SubjectList";
import AddCourseSubject from "../Component/Users/Examiner/ExaminerViewPort/CreateCourse/AddCourseSubject/AddCourseSubject";
import CreateExam from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/SubjectList/CreateExam/CreateExam";
import ExamQuestions from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/SubjectList/CreateExam/ExamQue/ExamQuestions";
import ExamStudents from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/SubjectList/CreateExam/ExamStudents/ExamStudents";
import ExamDetail from "../Component/Users/Examiner/ExaminerViewPort/ExamDetail/ExamDetail";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="/user" element={<User />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="admin/pending" element={<Admin />} />
        <Route path="admin/approved" element={<Admin />} />
        <Route path="admin/declined" element={<Admin />} />


        <Route  path="/examiner/dashboard" element={<Examiner />} />
        <Route  path="/examiner/createcourse" element={<Examiner />} />
        <Route path="/examiner/coursesubject" element={<AddCourseSubject />} />
        <Route  path="/examiner/addstudent" element={<AddStudent />} />
        <Route path="/examiner/studentlist" element={<ExaminerStudentList />} />
        <Route  path="/examiner/addsubject" element={<AddSubject />} />
        <Route  path="/examiner/subjectlist" element={<SubjectList />} />
        <Route path="/examiner/subjectlist/createexam" element={<CreateExam /> } />
        <Route path="/examiner/subjectlist/exam/questions" element={<ExamQuestions /> } />
        <Route path="/examiner/subjectlist/exam/students" element={<ExamStudents /> } />

        <Route path='/examiner/examdetails' element={<ExamDetail /> } />

        
    </Routes>
  );
};

export default Routing;
