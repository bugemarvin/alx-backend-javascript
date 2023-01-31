/*
 * File: 2-get_students_by_loc.js
 * Auth: Ukonu Divine Chisom
 */

/**
 * getStudentsByLocation - Retrieves a list of students by city.
 * @studentList: A list of students.
 * @city: Student's location.
 * Return: An array of objects who are located in a specific city.
 */
export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((item) => item.location === city);
}
