import { React, useState } from "react";
import Header from "./Main/Header";
import { Link, useLocation } from "react-router-dom";

const ApplyForTask = (props) => {

  let location = useLocation();
  const propsData = location.state;
  console.log(propsData);
    
  const [salary, setSalary] = useState()
    const [cv, setCv] = useState()

      const handleSalaryChange = (event) => {
        setSalary(event.target.value)
      }
      const handleCVChange = (event) => {
        setCv(event.target.value)
      }

      const submitProposal = () => {

        const loggedUserJSON = window.localStorage.getItem('loggedUser')


        if(loggedUserJSON !== null){
          console.log('submittaa')
        }
        else{
          console.log('jeee')
          alert("You need to be logged in to apply for a task!");
        }
      }


    return(
        <div className="background">
        <Header />
        <form input type="submit" className="form">

        <h1 className="h1">Submit a proposal </h1>

          <h3>Task details</h3>
          <p>Headline: {propsData.headline}</p>
          <p>Description: {propsData.description}</p>
          <p>Location: {propsData.location}</p>
          <Link to='/taskdetails' state={propsData}>view task posting
          </Link>
          <p/>

            <div className="inputFields">
                    <label for="salary">What is the rate you would complete this task for? </label>
                    <input type="text" placeholder={`Original proposal: ${propsData.salary}`} name="salary" onChange={handleSalaryChange} required/>
                    
                    <label for="cv">Cover Letter (optional) </label>
                    <input type="text" name="cv" onChange={handleCVChange} required/>

                    <label for="files">Attach files</label>
                    <input type="text"  name="files"  required/>

                <br/>
                <button type="button" className="button" onClick={() => submitProposal()}>Submit</button>
             </div>
        </form>
    </div>     
    )
    
}


export default ApplyForTask;

 