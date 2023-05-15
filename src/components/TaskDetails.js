import { React, useState, useEffect } from "react";
import Header from "./Main/Header";
import { useLocation } from "react-router-dom";
import profile from "../services/GetData.js"

const TaskDetails = (props) => {

  let location = useLocation();
  const propsData = location.state;
  const [user, setUser] = useState()

  useEffect(() => {
    profile
    .getUser(propsData.user)
    .then(res => {
      setUser(Object(res));
    })
  }, [])

    return(
        <div className="background">
        <Header />
        <form input type="submit" className="form">

        <h1 className="h1">Task Details </h1>
          <p>Headline: {propsData.headline}</p>
          <p>Description: {propsData.description}</p>
          <p>Location: {propsData.location}</p>
          <p>Salary: {propsData.salary}</p>
          <p>Duration: {propsData.duration}</p>
          <p>Category: </p>
          
          <br/>
          <h3>Creator</h3>
          <p>Name: {} </p>
          <p>Age: {} </p>
          <p>Description: {} </p>
          <p>Reviews</p>
          <p>Profiilikuva </p>
          <p/>

        </form>
    </div>     
    )
    
}


export default TaskDetails;