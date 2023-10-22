import React from 'react'
import vg from "../assets/2.webp"
import {AiFillAmazonCircle,AiFillInstagram,AiFillYoutube,AiFillGoogleCircle} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechMech</h1>
            <p>Create you new inovvative idea here</p>
        </main>
    </div>
    <div className="home2" id='about'>
        <img src={vg} alt="graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem laboriosam quos!aajsb
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quas dolores fuga voluptas sequi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, id.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, rerum officia accusamus earum sit corporis velit veritatis provident excepturi omnis perspiciatis et quas harum temporibus nam. Veniam odio quos quam, illum voluptatibus blanditiis aperiam neque reprehenderit aspernatur cupiditate nulla possimus natus nihil eligendi quae. Soluta ipsam facere neque voluptates eligendi dignissimos id exercitationem nihil rerum? Velit nam illum labore aspernatur, autem incidunt, sit inventore rerum, ab consequatur quos laudantium voluptate. Modi voluptate dolorum</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home