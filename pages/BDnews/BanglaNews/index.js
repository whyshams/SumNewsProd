import React from 'react';
import Link from 'next/link';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import { useRouter } from 'next/router';


const Bangla = () => {
  const router = useRouter();
  return (
    <div>
        <span className='btn btn-matt p-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>



<Link href='/BDnews/BanglaNews/ঢাকা'><div className="btn btn-light m-3 p-5 button">বিভাগ অনুযায়ী</div></Link>
<Link href='/BDnews/BanglaCat/খেলাধুলা'><div className="btn btn-light m-3 p-5 button">বিষয় অনুযায়ী</div></Link>



      </div>
    </div>
  )
}

export default Bangla