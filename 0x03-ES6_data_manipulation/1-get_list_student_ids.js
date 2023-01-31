/*
 * File: 1-get_list_student_ids.js
 * Auth: Ukonu Divine Chisom
 */

/**
 * getListStudentIds - Retrieves the id of student's list.
 * @studentList: List of students
 * Return: An array of ids from a list of object.
 */
export default function getListStudentIds(studentList) {
  if (studentList instanceof Array) {
    return studentList.map((item) => item.id);
  }
  return [];
}
