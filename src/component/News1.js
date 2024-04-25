import React from 'react'
import hero_blog from "./image/hero_blog.jpg"
import blog_in from "./image/blog_in.jpg"
import avtar1 from "./image/avatar1.jpg"
import avatr2 from "./image/avatar2.jpg"

function News1() {
  return (
    <>
      <div className="news1">
        <img src={hero_blog} alt="" className='blog' />
        <div className="news1-con">
          <h1 className='news1-text'>10 OCT 2022 - BY ADMIN</h1>
          <h1 className='news1-text2'>BEST RESTAURANT IN 2022</h1>
        </div>
      </div>
      <div className="news2">
        <h1 className='news2-text'>At vero eos et accusamus et iusto odio dignissimos <br /> ducimus qui blanditiis praesentium</h1>
        <p className='news2-text2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti <br /> atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in <br /> culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga</p>
        <p className='news2-text3'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio <br /> cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis <br /> dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut <br /> et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, <br /> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <img src={blog_in} alt="" className='blog_in' />
        <h1 className='news2-text4'>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque</h1>
        <p className='news2-text5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti <br /> atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in <br /> culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga</p>
        <p className='news2-text6'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio <br /> cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis <br /> dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut <br /> et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, <br /> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </div>
      <div className="news3">
        <h1 className='news3-text'>Comments</h1>
        <img src={avtar1} alt="" className='avtar1' />
        <div className="avtar-con">
          <p className='news3-text2'>By Anna Smith|25/10/2019|Reply</p>
          <p className='news3-text3'>Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. <br />Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis <br /> parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam <br /> vel enim ipsum, et congue ante.</p>
        </div>
        <img src={avatr2} alt="" className='avtar2' />
        <div className="avtar-con2">
          <p className='news3-text4'>By Anna Smith|25/10/2019|Reply</p>
          <p className='news3-text5'>Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. <br />Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis <br /> parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam <br /> vel enim ipsum, et congue ante.
<br /><br />
            Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper <br /> venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec <br /> urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. <br /> Aliquam erat volutpat.
          </p>
        </div>
        <img src={avtar1} alt="" className='avtar3' />
        <div className="avtar-con3">
          <p className='news3-text6'>By Anna Smith|25/10/2019|Reply</p>
          <p className='news3-text7'>Cursus tellus quis magna porta adipiscin</p>
        </div>
      </div>
    </>
  )
}

export default News1;
