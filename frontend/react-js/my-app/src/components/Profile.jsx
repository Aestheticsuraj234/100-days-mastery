
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
const Profile = () => {
  const {username , setUsername , age} = useContext(GlobalContext);
 
  return (
    <div>
        <h1>My Profile</h1>
        <h2>Welcome back, {username}!</h2>
        <p>Here is your profile information:</p>
        {/* Add more profile details here */}
        <p>age: {age}</p>
    </div>
  )
}

export default Profile