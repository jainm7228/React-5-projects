import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
} from "react-icons/ai";


const Home = () => {
  return (
    <>
     
      <div className="home" id="home">
        <main>
          <h1>Home</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>

      <div className="home2" id="home">
        <img src={vg} alt="Grapics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quam, animi quidem maiores, quos dolorum magni neque provident, qui accusantium et dolorem enim recusandae optio eaque sint nam repellendus voluptatibus labore unde. Itaque, at? Atque voluptatum harum officia est voluptatibus nam quam? Fugiat soluta culpa omnis sequi, quaerat placeat assumenda.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat laudantium exercitationem laboriosam ratione, molestias dolores ad nobis. Natus placeat earum impedit deserunt recusandae temporibus pariatur maiores consequatur, explicabo ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellat laudantium exercitationem laboriosam ratione, molestias dolores ad nobis. Natus placeat earum impedit deserunt recusandae temporibus pariatur maiores consequatur, explicabo ratione
          </p>
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

        

          </article>
        </div>
      </div>



    

    </>
  );
};

export default Home;
