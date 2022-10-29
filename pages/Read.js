import React from 'react';
import Link from 'next/link';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import { useRouter } from 'next/router';


const Read = () => {
  const router = useRouter();
  return (
    <div>
              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
        <span className='btn btn-matt m-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>


      <Link href='/BDnews/Categorical/news'><div className="btn btn-light m-3 p-5 button">Categorical BD News</div></Link>

     
<Link href='/BDnews/Divisional/Dhaka'><div className="btn btn-light m-3 p-5 button">Divisional BD News</div></Link>

<Link href='/BDnews/International'><div className="btn btn-light m-3 p-5 button">International News of BD</div></Link>

<Link href='/BDnews/BanglaNews/ঢাকা'><div className="btn btn-light m-3 p-5 button">বাংলা সংবাদ(আঞ্চলিক)</div></Link>
<Link href='/BDnews/BanglaCat/খেলাধুলা'><div className="btn btn-light m-3 p-5 button">বাংলা সংবাদ(বিষয়ক)</div></Link>
<Link href='/TopNews/World'><div className="btn btn-light m-3 p-5 button">Top World News</div></Link>
<Link href='/Search'><div className="btn btn-light m-3 p-5 button">Search News</div></Link>



      </div>
    </div>
  )
}

export default Read