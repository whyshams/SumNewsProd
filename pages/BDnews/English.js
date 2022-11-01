import React from 'react';
import Link from 'next/link';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import { useRouter } from 'next/router';


const Read = () => {
  const router = useRouter();
  return (
    <div>
        <span className='btn btn-matt p-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>




<Link href='/BDnews/Categorical/news'><div className="btn btn-light m-3 p-5 button">National Media</div></Link>
<Link href='/BDnews/International'><div className="btn btn-light m-3 p-5 button">International Media</div></Link>





      </div>
    </div>
  )
}

export default Read