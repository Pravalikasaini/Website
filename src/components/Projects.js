import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your project cards here */}
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl mb-2">Project 1</h3>
            <p className="text-gray-700">Description of Project 1</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl mb-2">Project 2</h3>
            <p className="text-gray-700">Description of Project 2</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl mb-2">Project 3</h3>
            <p className="text-gray-700">Description of Project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
