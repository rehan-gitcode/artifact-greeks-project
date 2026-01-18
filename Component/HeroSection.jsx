import { Clock, TrendingUp, Monitor, Calendar, Briefcase, Award, Users, BookOpen, GraduationCap, Star } from 'lucide-react';
export default function HeroSection(){
    return (
      <>
        {/* Why Enroll Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Enroll With Us?
              </h2>
              <p className="text-gray-600">
                Experience learning excellence with industry-leading benefits
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  100% Placement Support
                </h3>
                <p className="text-gray-600">
                  Dedicated career assistance with guaranteed interview opportunities
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Real-World Projects
                </h3>
                <p className="text-gray-600">
                  Build 10+ industry-grade projects for your portfolio
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Lifetime LMS Access
                </h3>
                <p className="text-gray-600">
                  Access course materials and updates forever
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  One-on-One Mentorship
                </h3>
                <p className="text-gray-600">
                  Personal guidance from industry experts
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Certification Included
                </h3>
                <p className="text-gray-600">
                  Industry-recognized certificate upon completion
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Job Interview Training
                </h3>
                <p className="text-gray-600">
                  Mock interviews and resume building workshops
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Training You Will Receive From Industry Expert
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-40 h-40 bg-gray-300 rounded-lg shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold">
                    MA
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Michael Anderson
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Senior Full Stack Developer at Google
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                    <div>
                      <span className="text-blue-600 font-bold text-xl">12+</span>
                      <span className="text-gray-600 ml-1">Years Experience</span>
                    </div>
                    <div>
                      <span className="text-green-600 font-bold text-xl">500+</span>
                      <span className="text-gray-600 ml-1">Students Trained</span>
                    </div>
                    <div>
                      <span className="text-orange-600 font-bold text-xl">4.9/5</span>
                      <span className="text-gray-600 ml-1">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What Our Students Say
              </h2>
              <p className="text-gray-600">
                Real feedback from students who transformed their careers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Student 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  This bootcamp completely changed my career trajectory. The hands-on projects and mentorship were invaluable. I landed a job at Microsoft within 2 months!
                </p>
              </div>

              {/* Student 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    DC
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">David Chen</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Best investment I've made in my education. The curriculum is up-to-date with industry standards and the instructors are genuinely passionate about teaching.
                </p>
              </div>

              {/* Student 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    ER
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Emily Rodriguez</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  From zero coding knowledge to full stack developer in 6 months. The placement support was exceptional - got multiple job offers even before graduating!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}