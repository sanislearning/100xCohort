function App(){
  return <div className="border-2 border-white-500 p-4 rounded-lg shadow-lg h-screen bg-gray-100">
    <div id="header" className="text-left">
      <h1 className="text-3xl font-bold mb-4 ">SANJAY BIJU</h1>
      <p className="text-gray-600 text-[18px]">ML Engineer | Full Stack Dev | Organizer</p>
      <p className="text-red-400 text-[12px] mb-4">+91 7306695754  sanjaybiju10@gmail.com  https://www.linkedin.com/in/sanjaybiju</p>
    </div>
    <div>
      <h2 className="text-left text-gray-600 text-[18px]">Summary</h2>
      <p className="text-[14px]">I am a Machine Learning Engineer with a passion for building innovative solutions. I have experience in full-stack development and enjoy organizing events to foster community engagement. I spend my time learning how to do new cool projects and frameworks. I  enjoy working in a collaborative environment and I enjoy connecting wtih people.
      </p>
      <h2 className="text-left text-gray-600 text-[18px] mt-4">Skills</h2>
      <p className="text-[14px]">ML , Agentic Systems, Backend Engineering, Frontend Engineering, Team Management, Event Organisation, Public Speaking</p>
    </div>

    <div id="experience" className="mt-4">
      <h2 className="text-left text-gray-600 text-[16px]">Experience</h2>
      <h2 className="text-red-800 text-[18px] p-0.3">ML Intern</h2>

      <p className="text-left text-[14px] p-1">
        <ul className="list-disc list-inside">
          <li>Worked on several RAG based projects, especially a few with a focus on getting AutoML done for several key ML algorithms.</li>
          <li>Developed and deployed machine learning models, focusing on improving accuracy and efficiency.</li>
          <li>Automated hyperparameter tuning for several models by utilising Optuna</li>
        </ul>
      </p>

      <h2 className="text-red-800 text-[18px] mt-4 p-0.3">Software Tester</h2>
      <p className="text-left text-[14px] p-1">
        <ul className="list-disc list-inside">
          <li>
            Worked on testing several software products, including web applications and mobile apps.
          </li>
          <li>
            Developed and executed test cases, reported bugs, and collaborated with developers to ensure high-quality software.
          </li>
        </ul>
      </p>
    </div>

    <div id="education" className="mt-4">
      <h2 className="text-left text-gray-600 text-[16px]">Education</h2>
      <h2 className="text-red-800 text-[18px]">Bachelor of Technology in Computer Science (Artificial Intelligence)</h2>
      <p className="text-left text-[14px]">KTU University, 2022</p>
      <p className="text-right">CGPA-8.73</p>
    </div>

    <div>
    </div>
  </div>
}

export default App