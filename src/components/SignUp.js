import { useState, React} from "react";
import Header from "./Main/Header";
import profile from "../services/GetData.js"
import { Link } from "react-router-dom";

const SignUp = () => {

    const [user, setUser] = useState({})
    const [newName, setName] = useState()
    const [des, setDes] = useState()
    const [number, setNumber] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const [selectValue, setSelectValue] = useState()
    

    const userObject = {
        name: newName,
        age: age, 
        info: des,
        number: number,
        address: address,
        email: email,
        password: password
      }

      const handleSubmit = () => {
        setUser(userObject)
        profile.addUser(userObject)
      }

      const handleNameChange = (event) => {
        setName(event.target.value)
      }
      const handleDesChange = (event) => {
        setDes(event.target.value)
      }
      const handleEmailChange = (event) => {
        setEmail(event.target.value)
      }
      const handleAgeChange = (event) => {
        setAge(event.target.value)
      }
      const handleAddressChange = (event) => {
        setAddress(event.target.value)
      }
      const handleNumberChange = (event) => {
        setNumber(event.target.value)
      }
      const handlePasswordChange = (event) => {
        setPassword(event.target.value)
      }
      const handleChange = (event) => {
        this.setSelectValue(event.target.value);
        console.log(selectValue)
      }

      let years = []
      let max = 2023
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let days = []
      let maxDays = 31

      const scrollYears = () => {
        while(max > 1920){
          years.push(max)
          max = max - 1
        }
      }

      const scrollDays = () => {
        while(maxDays > 0){
          days.push(maxDays)
          maxDays = maxDays - 1
        }
        console.log(days)
      }

    
    return(
        <div className="background">
        <Header />
        <form input type="submit" className="form">

         <h1 className="h1">Sign up</h1>

            <div className="inputFields">
                    <label for="name">Name</label>
                    <input type="text" name="name" onChange={handleNameChange} required/>

                    <br></br>

                    <label for="email">Email</label>
                    <input type="text" name="email" onChange={handleEmailChange} required/>

                    <br></br>

                    <label for="phone">Phone number</label>
                    <input type="text" name="phone" onChange={handleNumberChange} required/>
                    
                    <label for="des"> Description</label>
                    <input type="text" placeholder=" Write a description about yourself" name="des" onChange={handleDesChange} />

                    <label for="age">Age</label>
                    <input type="text" name="age" onChange={handleAgeChange} required/>

                    <label for="birthday">Date of birth</label>
                    <div class="yearWrapper">
                      {scrollYears()}
                      <div>
                      <label for="years">Year</label>
                      <br/>
                            <select >
                            {years.map(year => 
                              <option onChange={handleChange} value={selectValue}>{year}</option>
                              )}
                            </select>
                      </div>
                    </div>
                    <div class="monthWrapper">
                      <div>
                      <label for="months">Month</label>
                      <br/>
                            <select >
                            {months.map(month => 
                              <option onChange={handleChange} value={selectValue}>{month}</option>
                              )}
                            </select>
                      </div>
                    </div>
                    <div class="dayWrapper">
                      {scrollDays()}
                      <div>
                      <label for="days">Day</label>
                      <br/>
                            <select >
                            {days.map(day => 
                              <option onChange={handleChange} value={selectValue}>{day}</option>
                              )}
                            </select>
                          
                      </div>
                    </div>
                    <br/>

                    <label for="address">Address</label>
                    <input type="text" placeholder=" Address" name="address" onChange={handleAddressChange} required/>

                    <label for="pwd">Password</label>
                    <input type="password" placeholder=" Password" name="pwd" onChange={handlePasswordChange} required/>

                <br/>
                <Link to="/login"> <button type="button" className="button" onClick={handleSubmit}>Sign up</button></Link>
             </div>
        </form>
    </div>     
    )
    
}


export default SignUp;