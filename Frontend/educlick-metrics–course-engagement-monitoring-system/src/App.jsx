import CourseGrid from "./components/CourseGrid";
import Dashboard from "./components/Dashboard";
import dashboard from "./assets/dashboard.png";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f0c29]">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <header className="text-center py-12 md:py-16 relative">
          {/* Decorative gradient highlights behind header */}
          <div className="absolute -top-6 md:-top-10 left-1/2 transform -translate-x-1/2 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-purple-600/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          <div className="absolute -bottom-6 md:-bottom-10 right-1/4 w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 bg-indigo-500/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-300 flex justify-center items-center gap-3 sm:gap-4">
            EduClick Metrics
            <img
              src={dashboard}
              alt="Dashboard Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 animate-bounce hover:scale-110 transition-transform duration-300"
            />
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-purple-200/80 max-w-xl mx-auto px-4">
            Monitor user engagement on course actions
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-6 pb-16">
          {/* Renders dynamic list of available courses */}
          <CourseGrid />
        </main>

        {/* Displays real-time engagement analytics */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;