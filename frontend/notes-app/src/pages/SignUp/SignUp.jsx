import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/Helper";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name) {
      SetError("Please enter your name.");
      return;
    }
    
    if (!validateEmail(email)) {
      SetError("Please enter a valid email.");
      return;
    }
    
    if (!password) {
      SetError("Please enter the password.");
      return;
    }
    
    SetError("");
    
    // SignUp API call
    
  };

  return (
    <>

    <Navbar />
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSignUp}>
          <h4 className="text-2xl mb-7">SignUp</h4>

          <input 
            type="text"
            placeholder="Name" 
            className="input-box" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            type="text"
            placeholder="Email" 
            className="input-box" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

          <button type="submit" className="btn-primary">
            Create Account
          </button>

            <p className="text-sm text-center mt-4">
              Already have an Account?{" "}
              <Link to="/login" className="font-medium text-primary underline">
              Login
              </Link>
            </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp
