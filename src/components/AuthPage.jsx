import { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username,setusername] = useState('')
  const [password,setpassword]= useState('')
  const [email,setemail]= useState('')

  const {login,user,isAuthenticated} = useAuth();

  let navigate = useNavigate();
  // console.log(user)

  const handlesubmit = async (e) => {
    e.preventDefault(); // prevent page reload
  
    try {
      const url = isLogin ? "http://localhost:3000/login" : "http://localhost:3000/register";
      const payload = isLogin
        ? { email, password }
        : { username, email, password };
  
      const response = await axios.post(url, payload);
      console.log("Success:", response.data);
      if(response.data.success){
        login(response.data.user)
        navigate("/")
        
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
   

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="mt-1 text-gray-600">
            {isLogin ? 'Login to continue' : 'Sign up to get started'}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Name {username}</label>
              <input
                type="text"
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              onChange={(e)=>{setemail(e.target.value)}}
              value={email}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password {password}</label>
            <input
              type="password"
              onChange={(e)=>{setpassword(e.target.value)}}
              value={password}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            onClick={handlesubmit}
            className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
          >
            {isLogin ? (
              <>
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </>
            )}
          </button>
        </form>
  
        <div className="text-sm text-center text-gray-500">
          {isLogin ? (
            <>
              Don’t have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
