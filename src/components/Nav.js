import React from 'react';
import { Link } from 'react-router-dom';
//import { Globals } from "@/models/api";
import logo from '../assets/logo.svg';

const Globals = { user: null, oAuthUser: null };

export default ()=> (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link class="navbar-brand" to="/" >
            <img src={logo} className="App-logo" alt="logo" height="30" />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <Link class="nav-link" to="/" active-class="active" exact>Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/About" active-class="active">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/MyFriends">My Friends</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link disabled" to="#"  active-class="active">Disabled</Link>
                </li>
            </ul>
            {!Globals.user &&
            <form class="form-inline mt-2 mt-md-0" >
                <Link to="/Login" class="nav-link">Login</Link>
                <Link to="/Register" class="nav-link">Sign Up</Link>
         </form>
            }
            { Globals.user &&
            <span class="navbar-text">
                <img width="30" src={`https://graph.facebook.com/${Globals.oAuthUser.id}/picture`} alt="facebook img" />
                Welcome {Globals.user.FirstName} {Globals.user.LastName}
            </span>
            }

        </div>
    </nav>
    
)