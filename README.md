# Angular Scroller #
 
Animated Scrolling on anchor tags in AngularJS. Uses jQuery animate to scroll to the corresponding anchor tag.
`window` load listener checks `window.location` to scroll to the correct hash. Most beneficial when working with
fixed banner at the top of a one-page site.

### Application Stack ######

- [Node.js](http://www.nodejs.org)

- [Express](http://www.expressjs.com/)

- [Jade](http://jade-lang.com/)

- [Angular 1.2.4](http://angularjs.org/)

- [jQuery 1.10.2](jquery.com)

### Node Dependencies ######

    cd server
    npm install

### Launch ######

    # in server/
    node server.js

### Scroller Usage ######
  
    <a href="#home" sl-scroller sl-scroller-top-offset="20" sl-scroller-top-offset-el-id="banner"></a>

    <div id="home">My Home</div>
