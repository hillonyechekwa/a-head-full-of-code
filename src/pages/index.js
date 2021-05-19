import React from 'react';
import HomeHeader from '../components/Headers/homeheader'
import '../styles/home.scss';

const Index = () => {
  return (
    <>
    <HomeHeader />
    <section className="featured">
        <h1>Featured Posts</h1>  {/*TODO: Make into SVG */}
        <div className="posts">
          <img src="#" alt="post-thumbnail" />
          <div className="content">
            <h2>Post title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
          </div>
        </div> 
        <p id="posts-link">Check out all the posts here</p>
    </section>
      <section className="newsletter">
        <div>
        <h2>Hey</h2>
        <small>want to keep up with new posts?</small>
        <h2>Sign Up for my newsletter</h2>
        <form>
          <div className="form-control">
          <label hmtlFor="name">Name</label>
          <input type="text" name="name" id="name" />
         </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
          <button type="submit">Send</button>
          </form>
        </div>
        <img src="#" alt="section-illustration" />
      </section>
   </>
  )
}


export default Index

