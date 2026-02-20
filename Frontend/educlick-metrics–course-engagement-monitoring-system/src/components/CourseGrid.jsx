import CourseCard from "./CourseCard";

const courses = [
  {
    id: "CS101",
    title: "Java Programming",
    level: "Beginner",
    description:
      "Learn Java from basics to OOP concepts with hands-on examples."
  },
  {
    id: "CS102",
    title: "Web Development",
    level: "Intermediate",
    description:
      "Master HTML, CSS, JavaScript and modern frontend frameworks like React."
  },
  {
    id: "CS103",
    title: "Spring Boot",
    level: "Advanced",
    description:
      "Learn to build scalable web applications using Spring Boot and related technologies."
  }
];

const CourseGrid = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;