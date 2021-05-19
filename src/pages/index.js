import React from 'react';
import HomeHeader from '../components/Headers/homeheader'
import '../styles/home.scss';
import Card from '../components/card'

const Index = () => {
  return (
    <>
    <HomeHeader />
    <section className="featured">
        <h1>Featured Posts</h1>  {/*TODO: Make into SVG */}
        <Card /> 
        <p id="posts-link">Check out all the posts here</p>
    </section>
      <section className="newsletter">
        <div>
        <h2>Hey</h2>
        <small>want to keep up with new posts?</small>
        <h2>Sign Up for my newsletter</h2>
        <form>
          <div className="form-control">
              <label hmtlFor="name">
                Name
              <input type="text" name="name" id="name" />
            </label>
         </div>
        <div className="form-control">
              <label htmlFor="email">
                Email
            <input type="email" name="email" id="email" />
          </label>
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

