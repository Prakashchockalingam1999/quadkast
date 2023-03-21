import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css"


const Register = () => {


    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
  

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { name, password };
            if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/dashboard');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="background">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="cards">
                        <div className="card-header">
                            <h2 >Have an account ?</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">
                              
                              
                                <div className="col-lg-6">
                                    <div className="form-group">
                                    
                                        <input
                                        
                                         value={name} 
                                         onChange={e => namechange(e.target.value)} 
                                         className="form-control"
                                         placeholder="Username"
                                         ></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                      
                                        <input value={password}
                                         onChange={e => passwordchange(e.target.value)} 
                                         placeholder="password" 
                                         type="password" 
                                         className="form-control"></input>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn"><b>Sign In</b></button> 
                           
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;