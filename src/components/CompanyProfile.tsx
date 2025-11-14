import { Building2, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function CompanyProfile() {
  const achievements = [
    "Licensed & Insured Construction Company",
    "ISO 9001:2015 Quality Management Certified",
    "RERA Registered Construction Firm",
    "Member of Builders Association of India",
    "Awarded Best Construction Company 2023",
    "Zero Safety Incidents in Last 5 Years"
  ];

  const milestones = [
    { year: "1999", title: "Company Founded", description: "Started as a small construction firm with a vision to build quality structures" },
    { year: "2005", title: "First Major Project", description: "Completed our first commercial complex, establishing our reputation" },
    { year: "2010", title: "Expansion Phase", description: "Expanded operations to multiple cities across Chhattisgarh" },
    { year: "2015", title: "Technology Integration", description: "Adopted modern construction technologies and 3D modeling" },
    { year: "2020", title: "Green Building Initiative", description: "Launched sustainable construction practices and green building projects" },
    { year: "2024", title: "Digital Transformation", description: "Implemented digital project management and client communication systems" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Company Profile
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hanuman Constructions is a leading construction company based in Raipur, Chhattisgarh, 
                with over 25 years of experience in delivering high-quality construction solutions. 
                We specialize in residential, commercial, industrial, and institutional projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our company is built on the foundation of trust, quality, and innovation. We believe 
                in building not just structures, but lasting relationships with our clients and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized in all types of construction projects with modern techniques and quality materials.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Team</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Experienced professionals including engineers, architects, and skilled craftsmen.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/hanumanbestsecond.png"
              width={600}
              height={400}
              alt="Construction site with modern equipment"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Team Member 1 - Pankaj Tiwari (MD) */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/pankaj.jpg"
                  width={300}
                  height={300}
                  alt="Pankaj Tiwari - MD Hanuman Group"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Pankaj Tiwari</h4>
                <p className="text-orange-600 font-semibold text-sm mb-3">MD Hanuman Group</p>
                <p className="text-gray-600 text-xs">
                  Leading the organization with strategic vision and excellence in construction management.
                </p>
              </div>
            </div>

            {/* Team Member 2 - Satyam Mishra */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/satyam.jpg"
                  width={300}
                  height={300}
                  alt="Satyam Mishra - Site Incharge & Quality Consultant"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Satyam Mishra</h4>
                <p className="text-orange-600 font-semibold text-sm mb-3">Site Incharge & Quality Consultant</p>
                <p className="text-gray-600 text-xs">
                  Expert in ensuring construction quality standards and site supervision.
                </p>
              </div>
            </div>

            {/* Team Member 3 - Vikash Singh */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/vikash.jpg"
                  width={300}
                  height={300}
                  alt="Vikash Singh - Engineer & Site Management"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Vikash Singh</h4>
                <p className="text-blue-600 font-semibold text-sm mb-3">Engineer & Site Management</p>
                <p className="text-gray-600 text-xs">
                  Specialized in project engineering and efficient execution management.
                </p>
              </div>
            </div>

            {/* Team Member 4 - Sachindar Paswan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/sachindar.jpg"
                  width={300}
                  height={300}
                  alt="Sachindar Paswan - Director Fabrication"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sachindar Paswan</h4>
                <p className="text-purple-600 font-semibold text-sm mb-3">Director - Fabrication & Consultant</p>
                <p className="text-gray-600 text-xs">
                  Leading plant shed department and fabrication operations with expertise.
                </p>
              </div>
            </div>

            {/* Team Member 5 - Rajendra Shukla */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/rajendra.jpg"
                  width={300}
                  height={300}
                  alt="Rajendra Shukla - Head Plant & Materials Management"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Rajendra Shukla</h4>
                <p className="text-green-600 font-semibold text-sm mb-3">Head - Plant & Materials Management</p>
                <p className="text-gray-600 text-xs">
                  Managing plant operations, materials, and security with precision.
                </p>
              </div>
            </div>

            {/* Team Member 6 - Maya Verma */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/maya.jpg"
                  width={300}
                  height={300}
                  alt="Maya Verma - Property & Marketing Manager"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Maya Verma</h4>
                <p className="text-pink-600 font-semibold text-sm mb-3">Property, Marketing & Customer Relations Manager</p>
                <p className="text-gray-600 text-xs">
                  Building strong customer relationships and driving marketing initiatives.
                </p>
              </div>
            </div>

            {/* Team Member 7 - Deepak Shandilya */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/deepak.jpg"
                  width={300}
                  height={300}
                  alt="Deepak Shandilya - Architect Structure"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Deepak Shandilya</h4>
                <p className="text-indigo-600 font-semibold text-sm mb-3">Architect - Structure</p>
                <p className="text-gray-600 text-xs">
                  Creating innovative structural designs with architectural excellence.
                </p>
              </div>
            </div>

            {/* Team Member 8 - Eng. Deepshikha Gupta */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center pt-8 px-8">
                <Image
                  src="/deepshikha.jpg"
                  width={300}
                  height={300}
                  alt="Eng. Deepshikha Gupta - Interior & Architect"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Eng. Deepshikha Gupta</h4>
                <p className="text-teal-600 font-semibold text-sm mb-3">Interior & Architect</p>
                <p className="text-gray-600 text-xs">
                  Specializing in interior design and architectural planning with creativity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-8 h-8 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}></div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-2xl font-bold text-orange-600">{milestone.year}</span>
                        <h4 className="text-xl font-semibold text-gray-900">{milestone.title}</h4>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}