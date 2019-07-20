# Tweeter Project

Tweeter is a simple, single-page Twitter clone. The app is built using HTML, CSS, JS, jQuery and AJAX on the front-end, and Node, Express and MongoDB on the back-end. The app is optimized for tablets and desktops.

The app features: 
- tweeter message composting area with a character counter,
- character counter with a limit of 140 characters,
- error messages appearing on above the limit character count and 0 input,
- navigation bar compose button that hides/shows on click the tweet composing box.

## Screenshots
!["Screenshot of tweet's compose section hidden state](https://github.com/jpaulz/tweeter/blob/master/docs/compose-feed-hidden-state.png?raw=true)
*Img. 1: Tweet's compose section hidden state*

!["Screenshot of tweet's error message when compose field is emty](https://github.com/jpaulz/tweeter/blob/master/docs/tweet-error-msg-when-empty.png?raw=true)
*Img. 2: Tweet's error message when compose field is emty*

!["Screenshot of tweet's error message when tweet is over 140 characters](https://github.com/jpaulz/tweeter/blob/master/docs/tweet-error-msg-when-over-the-limit.png?raw=true)
*Img. 3: Tweet's error message when tweet is over 140 characters*

##Getting Started
- Install dependencies using the `npm install` command.
- Start the web server using the `npm run local` command. The app will be served at http://localhost:8080/.
- Go to http://localhost:8080/ in your browser.

## Dependencies
- Express
- Node 5.10.x or above
