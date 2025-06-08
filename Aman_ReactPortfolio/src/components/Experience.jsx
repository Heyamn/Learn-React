import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer - PhysicsWallah',
      date: 'Jun 2023 – Present',
      description:
        'Working as a full-time SDE, developing scalable frontend features using React.js and improving user engagement by 25%. Collaborated with cross-functional teams to optimize performance.',
      side: 'left',
    },
    {
      title: 'Software Developer Intern - KDK Software',
      date: 'Dec 2021 – Apr 2022',
      description:
        'Worked in the frontend development team, building features using React.js. Gained hands-on experience in component-based development, UI improvements, and real-world debugging.',
      side: 'right',
    },
  ];

  return (
    <div className="p-6 md:p-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-black mb-12 mt-6">Experience</h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              exp.side === 'left' ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            {exp.side === 'left' && (
              <div className="md:w-1/2 md:pr-8 text-right">
                <div className="bg-blue-100 dark:bg-gray-500 p-4 rounded-lg shadow-lg inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-300">{exp.date}</span>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">{exp.description}</p>
                </div>
              </div>
            )}
            <div className="w-8 h-8  rounded-full z-10 border-4 border-white dark:border-gray-900 mx-4"></div>

            {exp.side === 'right' && (
              <div className="md:w-1/2 md:pl-8 text-left">
                <div className="bg-blue-100 dark:bg-gray-500 p-4 rounded-lg shadow-lg inline-block max-w-md">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-300">{exp.date}</span>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">{exp.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
