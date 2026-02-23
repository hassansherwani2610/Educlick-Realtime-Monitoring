import { sendClickEvent } from "../api/api";

const CourseCard = ({ course }) => {

  // Handles user action and forwards event data to backend
  const handleClick = (action) => {
    sendClickEvent(course.id, action);
  };

  return (
    <div
      className="
        relative
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl p-6
        shadow-lg shadow-purple-900/40
        hover:-translate-y-2 hover:shadow-purple-800/60
        transition-all duration-300
      "
    >

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                      from-purple-500/10 via-indigo-500/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-100">
            {course.title} 
          </h2>

          <span className="
            text-xs font-semibold
            px-3 py-1 rounded-full
            bg-purple-500/20 text-purple-200
            border border-purple-400/30
          ">
            🟢 {course.level}
          </span>
        </div>

        <p className="text-purple-200/80 text-sm mb-6 leading-relaxed">
          {course.description}
        </p>

        <div className="flex gap-3">

          <button
            // Triggers BUY event tracking when user clicks
            onClick={() => handleClick("BUY")}
            className="cursor-pointer active:scale-91
              flex-1
              bg-gradient-to-r from-yellow-400 to-amber-400
              hover:from-yellow-300 hover:to-amber-300
              text-amber-900 font-semibold
              py-2.5 rounded-xl
              shadow-md hover:shadow-lg
              transition-all duration-300
            "
          >
            💳 Buy Now
          </button>

          <button
            // Triggers ENROLL event tracking when user clicks
            onClick={() => handleClick("ENROLL")}
            className="cursor-pointer active:scale-91
              flex-1
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-400 hover:to-purple-500
              text-white font-semibold
              py-2.5 rounded-xl
              shadow-md shadow-purple-900/40
              hover:shadow-purple-700/60
              transition-all duration-300
            "
          >
            🚀 Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default CourseCard;