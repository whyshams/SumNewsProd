import Link from "next/link"

const index = () => {
  return (
    <div className="">
      <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
      <Link href='/BDnews/National/news'><div className="btn btn-light m-3 p-5 button">National Media</div></Link>

     

<Link href='/BDnews/International'><div className="btn btn-light m-3 p-5 button">International Media</div></Link>

<Link href='/BDnews/BanglaNews/ঢাকা'><div className="btn btn-light m-3 p-5 button">বাংলা সংবাদ(আঞ্চলিক)</div></Link>
<Link href='/BDnews/BanglaCat/খেলাধুলা'><div className="btn btn-light m-3 p-5 button">বাংলা সংবাদ(বিষয়ক)</div></Link>



      </div>
    



    </div>
  )
}

export default index