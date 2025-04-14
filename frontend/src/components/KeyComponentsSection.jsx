import { ArrowDown } from "lucide-react";

const KeyComponentsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-5 tracking-tight">
          Key Components
        </h2>
        <p className="text-xl !mb-10 text-center">
          Arcadia’s methodology revolves around fostering a continuous cycle of
          dialogue, knowledge sharing, and innovation, to empower stakeholders
          and drive meaningful sustainability outcomes. Our key pillars include:
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Component 1 */}
          <div className="bg-white overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-2xl rounded-none">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661769800950-a36da6a69d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Sustainable Innovation"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Events & Collaboration
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Arcadia serves as a platform that brings together youth,
                businesses, researchers, governments, and industry experts
                through forums, summits, workshops, and hackathons.
              </p>
              <div className="flex justify-center">
                <button className="border-2 border-emerald-600 bg-transparent hover:bg-emerald-50 text-emerald-600 px-6 py-2 rounded-none flex items-center justify-center">
                  Read More
                  <ArrowDown className="h-5 w-5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>

          {/* Component 2 */}
          <div className="bg-white overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-2xl rounded-none">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a25vd2xlZGdlfGVufDB8fDB8fHww"
                alt="Collaborative Ecosystem"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Knowledge Hub
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Arcadia serves as a centralized resource for cutting-edge
                research, actionable insights, and real-world case studies that
                drive the transition to a circular economy
              </p>
              <div className="flex justify-center">
                <button className="border-2 border-emerald-600 bg-transparent hover:bg-emerald-50 text-emerald-600 px-6 py-2 rounded-none flex items-center justify-center">
                  Read More <ArrowDown className="h-5 w-5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>

          {/* Component 3 */}
          <div className="bg-white overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-2xl rounded-none">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbHV0aW9ufGVufDB8fDB8fHww"
                alt="Knowledge Sharing"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Innovation & Solution Exchange
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Arcadia collaborates with forward-thinking companies to showcase
                cutting-edge solutions and technologies that accelerate the
                transition to a circular economy
              </p>
              <div className="flex justify-center">
                <button className="border-2 border-emerald-600 bg-transparent hover:bg-emerald-50 text-emerald-600 px-6 py-2 rounded-none flex items-center justify-center">
                  Read More
                  <ArrowDown className="h-5 w-5 animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyComponentsSection;
