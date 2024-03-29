import React from 'react';
import Link from 'next/link';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import { useRouter } from 'next/router';
import Head from 'next/head';


const Read = () => {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <>
     <Head>
      <title>Read News</title>
      <meta name="description" content="News catalog of SumNews."/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
        <span className='btn btn-matt p-3 float-left' onClick={() => router.back()}><FaArrowAltCircleLeft/></span>

              <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>



<Link href='/BDnews/BanglaNews'><div className="btn btn-light m-3 p-5 button">বাংলা সংবাদ</div></Link>
<Link href='/BDnews/English'><div className="btn btn-light m-3 p-5 button">English News Of Bangladesh</div></Link>
<Link href='/Newspapers'><div className="btn btn-light m-3 p-5 button">Top Newspapers Of Bangladesh</div></Link>
<Link href='/TopNews/World'><div className="btn btn-light m-3 p-5 button">Latest World News</div></Link>




      </div>
    </>
  )
}

export default Read