import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const CompanyContext = createContext(undefined);


export const CompanyProvider = ({children})=>{
    const [companies , setCompanies] = useState([]);
    const [isCompaniesLoading , setIsCompaniesLoading] = useState(false);


    const getAllCompanies = async ()=>{
        try {
            setIsCompaniesLoading(true);
            const {data} = await axios.get("http://localhost:3000/api/v1/company/" ,{
                withCredentials: true,
            });

            setCompanies(data);
            toast.success('Companies fetched successfully');
        } catch (error) {
            toast.error('Failed to fetch companies');
            throw error;
        }
        finally{
            setIsCompaniesLoading(false);
        }
    }

    return (
        <CompanyContext.Provider value={{companies , getAllCompanies , isCompaniesLoading}}>
            {children}
        </CompanyContext.Provider>
    )

}


export const useCompany = ()=>{
    const context = useContext(CompanyContext);
    if(context === undefined){
        throw new Error('useCompany must be used within a CompanyProvider');
    }
    return context;
}