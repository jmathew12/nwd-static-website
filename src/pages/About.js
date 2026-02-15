import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title> Next Wave Dev - About </title>
      </Helmet>
      <Navbar />

      <div 
        style={{
          padding: "5rem 5vw",
          maxWidth: "2200px",
          margin: "0 auto",
        }}>
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem", color:"#004da8" }}>
                      About Next Wave Dev
                    </h1>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                 <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Mission: Launching Tech Careers</h2>
                        <p className="text-lg text-gray-600 mb-12 text-center">
                            At Next Wave Dev, our core purpose is to solve the classic conundrum of the tech world: Graduates need experience to get a job, but they need a job to get experience.
                            <br/><br/>
                            We are a dynamic platform dedicated to bridging this gap. We connect highly motivated and skilled recent graduates with real-world company projects, providing them with the vital professional experience, mentorship, and portfolio-building opportunities they need to successfully launch their careers in the technology field.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">For Graduates: Your Launchpad</h3>
                                <p className="text-gray-600 mb-6">You’ve put in the work, earned the degree, and mastered the theory. Now, it’s time to build your professional portfolio.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Gain Real Experience:</span> Work on tangible, in-production company projects, not simulated ones.</span>
                                    </li>
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Build Your Portfolio:</span> Accumulate impressive case studies and references that hiring managers look for.</span>
                                    </li>
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Access Mentorship:</span> Learn best practices, industry workflows, and professional communication from experienced developers and project managers.</span>
                                    </li>
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Increase Employability:</span> Graduates from our program are significantly more prepared and marketable for entry-level and junior roles.</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">For Companies: Unlocking Future Talent</h3>
                                <p className="text-gray-600 mb-6">Tap into a pool of fresh, enthusiastic, and academically current talent ready to contribute immediately.</p>
                                <ul className="space-y-4">
                                     <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Cost-Effective Support:</span> Get project assistance from bright, motivated talent while they gain essential experience.</span>
                                    </li>
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Pipeline for Hiring:</span> Identify and evaluate potential full-time employees directly through their project performance.</span>
                                    </li>
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Fresh Perspectives:</span> Benefit from the latest methodologies and innovative thinking brought by recent graduates.</span>
                                    </li>
                                    <li className="flex items-start">
                                        {/* <CheckIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" /> */}
                                        <span><span className="font-semibold">Impactful Contribution:</span> Invest in the future of the tech industry by providing invaluable opportunities to the next generation of developers.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 text-center border-t pt-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We envision a tech ecosystem where the path from graduation to a successful, fulfilling career is clear, efficient, and accessible to everyone. Next Wave Dev is more than just a platform; we are the dedicated accelerator for the next generation of tech leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
      <Footer />
    </>
  );
}

const flexChild = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
