# CHALLENGES WEB & CTV

## CHALLENGE #1

Implement a basic app (with react and react router) which is expected to navigate between an home page and a details page, by using a navigation bar. Please, check the design inside folder STEP_001.
- Home page (placeholder): use a container with an image as carousel placeholder (no logic, just a static image placed as design shows). When clicking the carousel placeholder, it will bring to the details page (/details/id), implement navigation with react-router-dom (use hardcoded value for id)
- Details page (placeholder): style the page showing a poster img and the media description (no logic, just a static image placed as design shows).
- Navigation bar: Create a basic navigation bar (beside the home button, fill with some placeholder options like: movies, series, etc). You can hardcode the action of every navigation link to bring to the same details page.

## CHALLENGE #2

Once a basic application is created, let's start to build logic to fetch data from TMDB api and get info from there in order to populate the app.

- TMDB API: use the TMDB API by using the getPopular async method (to check if you succeed at using it, print the result with a console.log within a useEffect)
- Carousel (1): transform the carousel placeholder img into a carousel component, which can accept a variable amount of images, and when the user clicks on one the app will go the relative details page for that item. In order to implement the carousel component, that can be done from scratch or by using this library: https://github.com/akiran/react-slick. Looking at the slick library, the carousel should be similar to the “Single Item” component.
- Carousel (2): fill the carousel with 5 items randomly taken from the TMDB (movies and tv shows).
- Details Page: transform the placeholder details page into an actual details page, so fill the details page with the item info.
- Swimlane (BONUS): Implement a Swimlane component, then add 2 of them to the home page, one with popular movies and the other one with popular tv shows (use themoviedb.org API). In order to implement the swimlane component, that can be done from scratch or by using this library: https://github.com/akiran/react-slick. Looking at the slick library, the swimlane should be similar to the “Data Attribute Settings” component.

## CHALLENGE #3

The main goal of this challenge is to get some confidence with a video player library, we can use for example HLSJS.

- Player page: add a player page to the routes (/player/id)
- Video Player: 
    - prepare the Player component and add a video element to it
    - install hlsjs and read instructions for use (https://github.com/video-dev/hls.js/)
    - import hlshs and use it to play the placeholder bunny video ("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")
    - use default video ui controls ("controls" inside <video> tag)
- Details page: add logic to the "play trailer" button in details page that brings to (player/id) page, ignore the id field (which is supposed to be the tmdb content id) and always load the bunny video

## CHALLENGE #4

With this challenge we improve the usage of the player by implementing a custom UI on top of it.

- Custom Player Controls: implement custom player controls that allows to:
    - play/pause
    - rewind / fast forward
    - go full screen / exit full screen
    - exit (back) button in the top left corner

## CHALLENGE #5

Let's make our app more efficient and reduce the number of calls to the back end by storing the retrieved elements from TMDB in React Context or Redux.

- Store TMDB results: instead of calling the TMDB API at every home page landing, use react context (or Redux) to store the API result and save calls.
