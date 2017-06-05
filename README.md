# friendfinder

A compatibility-based "FriendFinder" application using **Node and Express Servers** to handle the routing.

This full-stack site will take in results of your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

- This survey has 10 questions of your choosing. Each answer is on a scale of 1 to 5 based on how much the user agrees or           disagrees with a question.

- The ***htmlRoutes.js*** file includes two routes:
    * A GET Route to ***/survey*** which displays the survey page.
    * A default USE route that leads to ***home.html*** which displays the home page.

- The ***apiRoutes.js*** file contains two routes:
    * A GET route with the url ***/api/friends***. This is used to display a JSON of all possible friends.
    * A POST routes ***/api/friends***. This is used to handle incoming survey results and to handle the compatibility logic.

- To determine the user's most compatible friend, the following is used as a guide:
    * Convert each user's results into a simple array of numbers.
    * With that done, compare the difference between current user's scores against those from other users, question by question.
    * Add up the differences to calculate the totalDifference.
    * Use the absolute value of the differences.
    * The closest match will be the user with the least amount of difference.

- Once the current user's most compatible friend is found, a modal pop-up displays the result.
    * The modal displays both the name and picture of the closest match.

    ***https://pippylepew-friendfinder.herokuapp.com/survey***
