import React, { Component } from "../../../node_modules/react";

class Image extends Component {
  render() {
    return(
        <article class="athelas">
        <div class="vh-50 dt w-100 tc cover " style={{background:'url(https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80) no-repeat center'}}>
          <div class="dtc v-mid">
            <h1 class="f1 f-headline-l fw1 i white-70">Nabed Haya</h1>
            <blockquote class="ph0 mh0 measure f4 lh-copy center">
              <p class="fw1 white-70">
                It's the space you put between the notes that make the music.
              </p>
            </blockquote>
          </div>
        </div>
      </article>
      
    )
  }
}

export default Image;