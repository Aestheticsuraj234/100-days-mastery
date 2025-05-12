import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  BriefcaseBusiness,
  Search,
  Building2,
  UserCheck,
  BarChart4,
  FileCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useCompany } from "../context/CompanyContext";
import CompanyCard from "../components/shared/CompanyCard";
const Home = () => {
  const {getAllCompanies , isCompaniesLoading , companies} = useCompany();

  useEffect(() => {
    getAllCompanies();
  }, []);


  console.log(companies);


  if(isCompaniesLoading){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-[#f08080] to-[#e57373] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream Job <span className="block">Build Your Career</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Connect with top employers and discover opportunities that match
            your skills and aspirations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link to={"/jobs"} className="flex-1">
              <Button
                size="lg"
                className="w-full bg-white text-[#F08080] hover:bg-gray-100"
              >
                Find Jobs
              </Button>
            </Link>

            <Link to={"/signup"} className="flex-1">
              <Button
                size="lg"
                className="w-full bg-[#333]  hover:bg-[#222] text-white"
              >
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Job Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the latest job openings from top companies across various industries
            </p>
          </div>
          
          {/* Featured Job Cards (would be dynamically populated in a real app) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Job Card 1 */}
           {
            companies.length > 0 ? (
              companies.map((company)=>(
                <CompanyCard key={company._id} company={company} />
              ))

            ) : (
              <p>No companies found</p>
            )
           }
          </div>

          <div className="text-center">
            <Link to="/jobs">
              <Button className="bg-[#F08080] hover:bg-[#E57373] text-white">Browse All Jobs</Button>
            </Link>
          </div>
        </div>
      </section>
         {/* Call to Action */}
         <section className="bg-[#F08080] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of job seekers who have found their dream jobs through JobPortal
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link to="/register" className="flex-1">
              <Button size="lg" className="w-full bg-white text-[#F08080] hover:bg-gray-100">
                Create Account
              </Button>
            </Link>
            <Link to="/jobs" className="flex-1">
              <Button size="lg" className="w-full bg-[#333] hover:bg-[#222] text-white">
                Explore Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
