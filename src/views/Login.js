import React from 'react';
import { Globals } from "../models/api";
import { Login } from "../models/users";
import * as fb from "../models/facebook";
import toastr from 'toastr';


export default () =>{
  const[email, setEmail ]= React.useState("Shan");
  const[password, setPassword]= React.useState("Shan");



  async function submit(e){
    e.preventDefault();
    try {
      await Login(this.data);
      this.$router.push(Globals.redirectRoute)
      toastr.success("You've logged in successfully!")
    } catch (error) {
      Globals.errors.push(error);
      toastr.error(error.message);
    }
}
async function facebookLogin(){
  const m = await fb.Login();
  Globals.user = { FirstName: m.name, Email: m.email }
}
}

  return(
  <div className="row">
    <div className="col-lg-6">
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link " href="/Register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/Login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h4 className="card-title">Login</h4>
        <div className="card-text">
            <form submit="submit">
                <div classNameName="form-group">
                  <label for="Email">Email</label>
                  <input type="text" v-model="data.email"
                    className="form-control" name="Email" id="Email" aria-describedby="helpEmail" placeholder="Email"/>
                  <small id="helpEmail" className="form-text text-muted">You can use any email that you've use on our site</small>
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input type="password" v-model="data.password"
                    className="form-control" name="Password" id="Password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
            <br />
            <button className="btn btn-primary btn-block" click="facebookLogin">Log in with Facebook</button>
        </div>
      </div>
    </div>
    </div>
</div>

)}


