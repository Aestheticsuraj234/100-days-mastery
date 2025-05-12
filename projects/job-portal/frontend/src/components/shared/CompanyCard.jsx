import React from 'react'
import { formatDistanceToNow } from "date-fns"
import { Building2, Mail, MapPin, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const CompanyCard = ({company}) => {
   const timeAgo = formatDistanceToNow(new Date(company.createdAt), { addSuffix: true })
  return (
       <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
          <Building2 className="text-blue-600 h-6 w-6" />
        </div>
        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
          {company.companySize} employees
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2">{company.name}</h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="truncate">{company.location}</span>
        </div>

        {company.emails.length > 0 && (
          <div className="flex items-center text-gray-500 text-sm">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{company.emails[0]}</span>
          </div>
        )}

        <div className="flex items-center text-gray-500 text-sm">
          <Users className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>Added {timeAgo}</span>
        </div>
      </div>

     
        <Link href={`/companies/${company._id}`}>
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      
    </div>
  )
}

export default CompanyCard