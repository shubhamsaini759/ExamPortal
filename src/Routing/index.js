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
import ExamAllDetail from "../Component/Users/Examiner/ExaminerViewPort/ExamDetail/ExamAllDetail/ExamAllDetail";
import QuePaper from "../Component/Users/Examiner/ExaminerViewPort/ExamDetail/ExamAllDetail/QuePaper/QuePaper";
import ShowQuestion from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/SubjectList/CreateExam/ExamQue/CreateQuetions/ShowQuestion/ShowQuestion";
import Student from "../Component/Users/Student/Student";
import ExamStudentQue from "../Component/Users/Student/StudentView/ExamInfo/ExamQue/ExamStudentQue";
import ExamInst from "../Component/Users/Student/StudentView/ExamInfo/ExamInstruction.js/ExamInst";
import AdminEdit from "../Component/Users/Admin/AdminSidebar/AdminEdit/AdminEdit";
import ExaminerEdit from "../Component/Users/Examiner/ExaminerSide/ExaminerEdit/ExaminerEdit";
import DeleteAlert from "../Component/Users/Examiner/ExaminerViewPort/CourseCard/CourseDelete/DeleteAlert";
import ExaminerResult from "../Component/Users/Examiner/ExaminerViewPort/ExamDetail/ExamDetail/ExaminerResult/ExaminerResult";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="/user" element={<User />} />

        <Route path="/admin" element={<Admin />} />
        <Route path='admin/edit' element={<AdminEdit /> } />
        <Route path="admin/pending" element={<Admin />} />
        <Route path="admin/approved" element={<Admin />} />
        <Route path="admin/declined" element={<Admin />} />


        <Route  path="/examiner/dashboard" element={<Examiner />} />
        <Route  path="/examiner/edit" element={<ExaminerEdit />} />
        <Route  path="/examiner/createcourse" element={<Examiner />} />
        <Route  path="/examiner/examdetail/result" element={<ExaminerResult /> } />

        <Route  path="/examiner/coursesubject" element={<AddCourseSubject />} />
        <Route  path="/examiner/addstudent" element={<AddStudent />} />
        <Route  path="/examiner/studentlist" element={<ExaminerStudentList />} />
        <Route  path="/examiner/addsubject" element={<AddSubject />} />
        <Route  path="/examiner/subjectlist" element={<SubjectList />} />
        <Route  path='examiner/course/delete' element={<DeleteAlert />} />
        <Route  path="/examiner/subjectlist/createexam" element={<CreateExam /> } />
        <Route  path="/examiner/subjectlist/exam/questions" element={<ExamQuestions /> } />
        <Route  path="/examiner/subjectlist/exam/showquestions" element={<ShowQuestion /> } />
        <Route  path="/examiner/subjectlist/exam/students" element={<ExamStudents /> } />
        <Route path='/examiner/examdetails' element={<ExamDetail /> } />
        <Route path='/examiner/examalldetail' element={<ExamAllDetail /> } />
        <Route path='/examiner/examdetail/quepaper' element={ <QuePaper /> } />

        <Route path='/student/dashboard' element={ <Student /> } />
        <Route path='/student/viewexam' element={<Student /> } />
        <Route path='/student/result' element={<Student />} />
        <Route  path="/student/examrecords" element={<Student />} />


        <Route path='/student/viewexam/examintsruction' element={ <ExamInst /> } />
        <Route path='/student/viewexam/examque' element={<ExamStudentQue />} />

    </Routes>
  );
};

export default Routing;
