import React from 'react'
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Plus, Building2, MapPin, Users, Axis3D } from 'lucide-react';

import axios from 'axios';
import { toast } from 'sonner';
import { useAuth } from '../context/AuthContext';
import CompanyCard from '../components/shared/CompanyCard';



const MyCompanyPage = () => {
    const {user:authUser} = useAuth();
    const [companies , setCompanies] = useState([]);

    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        fetchMyCompany();
    },[])


    const fetchMyCompany = async ()=>{
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/api/v1/user/my-company" , {
                withCredentials:true
            });

            setCompanies(response.data);
            toast.success("Companies fetched successfully");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
        finally{
            setLoading(false);
        }
    }

    console.log(companies)

  return (
    <main className='container mx-auto  h-screen my-10'>
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
    </main>
     

  )
}

export default MyCompanyPage