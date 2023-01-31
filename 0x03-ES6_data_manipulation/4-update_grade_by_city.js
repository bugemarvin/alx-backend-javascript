/*
 * File: 4-update_grade_by_city.js
 * Auth: Ukonu Divine Chisom
 */

/**
 * updateStudentGradeByCity - Retrieves a list of students by city with their grades.
 * @studentList: A list of students.
 * @city: Student's location.
 * @newGrades:Student's grade.
 * Return: An array of students for a specific city with their new grade.
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((item) => item.location === city)
    .map((student) => {
      const grades = newGrades.filter((item) => item.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
