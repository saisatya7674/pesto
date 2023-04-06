import React, { Component } from 'react'
import "./index.css"


class BecomeaDeveloper extends Component {
  render() {
    return (
       <>
          <div className='main-div-2'>
              <h1 className='developer-head'>A fellowship for developers to build <br/> a global career in product engineering</h1>
              <p className='developer-para'>Become a remote-ready product engineer to unlock a global career trajectory.</p>

              
                <form className='form-div'>
                    <div className='input-div'>
                      <input className='inputs' placeholder='   Name' type='search'/>
                      <input className='inputs' placeholder='   *e-mail' type='search'/>
                    </div>
                    <div className='input-div'>
                      <input placeholder='   *Phone No.' className='inputs' type='search'/>
                      <select className='inputs'>
                        <option>Graduation Year</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                      </select>
                    </div>
                    <input className='btn btn-primary btn-lg btn-block shadow-lg' type='submit'/>
                    <p className='para34'>Application deadline is 8 April 2023</p>
                </form>
              
          </div>
       </>
    )
  }
}

export default BecomeaDeveloper