import Link from "next/link";
import { useRouter } from 'next/router';
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Menu from "./Menu";
import { IoSearchCircle } from "react-icons/io5";

const NavBar = () => {
  
  const [menuOpen,setMenuOpen] = useState(false)
 
  const router = useRouter();
  return (
    <>
   
    <div className='row header'>
      <div className='col-md-12 d-flex'>
        <div className=' menuicon' onClick={() => setMenuOpen(!menuOpen)}>
          {
            !menuOpen && 
            <div  className='btn btn-light button' >
            <BiMenu />
            </div>
            
        
          }
       
          
         
        </div>
        <div className='logo'>
        <Link href='/'>

          <img className="image" src='/logo.png' />
        </Link>

       </div>
       <div className="menuicon">
       <Link href='/Search'>
          <div className="btn btn-light button searchicon"><IoSearchCircle/></div>
        </Link>
       </div>
       
        
     

      </div>
      <div className="col-md-12">
      
      {
            menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          }

      </div>
  </div>
  
 
    </>
  )
}

export default NavBar