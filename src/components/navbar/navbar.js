import {NavLink,useNavigate} from "react-router-dom";
import styled from "styled-components";
import './navbar.css'

function Navbar() {
    const navigation = useNavigate()
    const onClickhandler = () => {
        navigation("/")
    }
    return (
       <Nav>
        <header>
        <div>
            <ul className="navbar">
                <li>
                    <NavLink className="a" to="/home"><i className="fa-solid fa-house-chimney"></i></NavLink>
                </li>
                <li>
                    <NavLink className="a" to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
                </li>
                <li>
                    <NavLink className="a" to="/profile"><i className="fa-solid fa-user"></i></NavLink>
                </li>
                <li>
                    <button className="btn btn-primary" onClick={onClickhandler} >Logout</button>
                </li>
            </ul>
        </div>
        </header>
        
       </Nav>
       
    );
  }
  
  const Nav = styled.nav`
  padding:10px;
 
  .navbar-list{
    display:flex;
    gap: 2.5rem;
    margin-right:300px;
   
    
    li{

        list-style:none;

        .navbar-links{
            text-decoration:none;
            color:#181818;
            font-family: 'Roboto', sans-serif; 
        }
        
    }

    li a:hover{
        color:#0155ca;
       
    }

    #btn{
        margin-top:-4px;
    }
  
        
    }
    
    

  }
  `;
  export default Navbar;