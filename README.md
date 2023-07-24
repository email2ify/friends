# Friends WildLife

* This is a platform for local nature reserves, where lovers of Africa Wildlife meet to air their views and opinoins about the wildlife conservation, and also to know more about African wild animals and countries where it can be found. User can also contribute in their own way by sharing photos and comment about their experince in the wild life of Africa.
  

💻 [Website](https://friendsa.herokuapp.com)

This site was created for Portfolio Project nr 5. 
Diploma in Full Stack Software Development, at the [Code Institute](https://codeinstitute.net/)

![frontview1](https://github.com/email2ify/Projecttest-API/assets/110549305/df44359a-fcba-4bf8-b272-fb3955eef5aa)

## Table of Contents

- [Friends WildLife](<#friends-wildlife>)
    * [The Strategy Plane](<#the-strategy-plane>)
    * [Agile Planning](<#agile-planning>) 
   
- [Epics](<#epics>)
     * [User Stories](<#user-stories>)   
  
- [Responsiveness](<#responsiveness>)

- [DropDown Menu Burgar](#dropdown-menu-burgar)

- [Users](<#users>) 
    * [Logged in Users](<#logged-in-users>)
    * [Logged out Users](<#logged-out-users>)
      
- [Feactures](<#features>)
    * [Home Page](<#home-page>) 
    * [Home Page](<#home-page>)
    * [Species Page](<#species-page>)
    * [Countries Page](<#countries-page>)
    * [Contact Page](<#contact-page>)
    * [Feed Page](<#feed-page>)
    * [Sign In](<#sign-in>)
    * [Sign Up](<#sign-up>)
    * [Sign Out](<#sign-out>)
    * [Get Started](<#get-started>)


- [Validation](<#validation>)
     * [Code Validation](<#code-validation>)
     * [Eslint](<#eslint>)
     * [Chrome Dev Tools Lighthouse](<#chrome-dev-tools-lighthouse>)

- [Reusable React Components](<#reusable-react-components>)

- [Technical Design](<#technical-design>)      
    * [Agile Planning](<#agile-planning>)
    * [Colour-Scheme](<#colour-scheme>)
    * [Typography](<#typography>)
    * [Imagery](<#imagery>)
    * [Wireframes](<#wireframes>)
 
- [Bugs](<#bugs>)
- [Security Features](<#security-features>)
- [Basic Technologies](<#basic-technologies>)
- [Frameworks and Tools](<#frameworks-and-tools>)
- [Testing](<#testing>)
- [Packages](<#packages>) 
- [Deployment](<#deployment>) 
   * [Heroku](<#heroku>)
   * [React Frontend to the API-Backend](<#api-backend>)
   * [Forking the GitHub Repository](<#forking>)
- [Locally](<#locally>)
- [Credits](<#credits>) 
- [Acknowledgements](<#acknowledgements>)



## The Strategy Plane

### Site Goal

* Friends WildLife is aimed to lovers of the wildlife. The site encourages user to share their thought, know more about animals and the countries where they are found. 

<br>

### Users Goal

* User can also contribute in their own way by sharing photos and comment about their experince in the wild life of Africa.

<br>

### Agile Planning

* This project was developed using agile methodologies by delivering small features in incrementally with a three phase loop.

* Stories were assigned to epics, prioritized under the Todo, In progress, and Done. They were assigned to track and monitor the progress of the project and stories allocated accordingly to the complexity. "Todo" stories is where I have listed the 'to do' stories lines, and "In progress" is where I have on-going work work in the tast mangement listed, likewise 'Done list', where I have the task completed.

* The Kanban board was created using github projects and can be located [here](https://github.com/users/email2ify/projects/12) and can be viewed to see more information on the project cards. All stories except the documentation tasks have a full set of acceptance criteria in order to define the functionality that marks that story as complete.

![sn](https://github.com/email2ify/Projecttest-API/assets/110549305/d44838ef-b7bb-44d4-ace1-4a956cba833d)

<hr>

### Epics

**Set Up**

* This Epic covers all the initial setup of the React application and dependencies.

**Posts**

* It covers the frontend creation of the application in regards to posts. This is to allow users to interact with the backend API via the user interface in order to create, read, update and delete their own posts.

**Comments**

* It gives the user the ability to comment on the frontend of the application in regards to comments on posts. This is to allow users to interact with the backend API in order add comments on posts.

**Profiles**

* It covers the frontend application in showing the posts on profiles. This is to allow users owner to manage their own profiles posts.

**Add Post**

* There is where users can add images on the frontend application in regards to add post. This is to allow users to interact with the backend API, to display and delete images

<br>

**Species**

* This aspect of front end application for animal species, it allows users to see variety of animal, names and their story. This is to educate users and to know more about the animal, using the backend API.

<br>

**Countries**

* In this aspect, the front end application for countries, enable users to be able to choose a desired country to know the types of animal or species that are found in that particular country. This is to allow users to know more about the species in that country, using the backend API.

<br>

**Contact form**

* This is also an application in the frontend, where users can send in their queries or enquiries, with the help of the backend API.

<br>

**Feeds**

* This aspect is the front end application in regards to feed. This is to allow users to read comment, view images and like a post,interacting with the backend API.

##### Back to [top](#table-of-contents)

<br>

## User Stories

 Epic:

**Posts**

* As a logged in user I can add images and create posts so that I can share my images
* As a user I can keep scrolling down the images on the feed, and expected to load automatically so that I don't have to click on 'next'.
* As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
* As a logged in user I can view the posts I liked inorder to have a memory of it
* As a logged in user, I can like a post so that I can show my like
* As a user, I can search for posts with keywords, so that I can find the posts I am most interested in.
* Users can not view "/feed" route when not logged in


**Comments**

* As a user I can read comments on posts so that I can read what other users think about the posts
* As a logged in user I can add comments to a post so that I can share my thoughts about the post
* As an owner of a comment I can manage my comment, edit or delete it all

**Species**

* As a user, I would like to be able to see all animal species in order to choose what animal to be curious to know more about.
  
**Country**

* As a user, I would like to check a particular african country to know what types of animal that can be found there.

**ContactForm**

* As a user, I would like to be able to send in enquiries, complaint or any post issues.
  
**Footer**

* As a user, I would like to be able to follow  the site organization on every social media platform in order to show my solidarity.


<br>

**User Story:**

* As a logged out user I can see sign in and sign up options so that I can ether sign in nor sign up
* As a Site User I can view a list of posts and also add posts so that I can select which that interest me to read about and to add my own post
* As a Site User I can click on a post so that I can view the image
* As a Site User I can view comments on a post image so that I can read the written compliments
* As a Site User I can view the number of likes on each post so that I can see which is the most popular with likes
* As a Site User I can register an account so that I can post, comment and like
* As a Site User/Owner I can create, read, update and delete posts so that I can manage my post content
* As a Site User, I can navigate to the search blank space so that I can easily search for a content or images among hundreds of post images.
* As a Site User, I can navigate to the search blank space so that I can easily search for a content or images among hundreds of post images.
* As a user I can view the details of a single post so that I can learn more about it
* As a user can view "/feed" route when logged in


<br>

## Responsiveness


* Responsiveness is a feature which can be seen through the Freinds wildlife. It gives users the ability to view the site on various display sizes while still having an enjoyable user experience.
 
![resp](https://github.com/email2ify/Projecttest-API/assets/110549305/bf35467e-cafd-4204-a7b0-e22146ce020d)


![rep2](https://github.com/email2ify/Projecttest-API/assets/110549305/3e47fee8-69e4-4e4b-bf6c-8f79724d455d)

<br>

## DropDown Menu Burgar

* As a user , I can navigate from any device, like a mobile device and the user will still have a good user experience with the burgar menu option displayed on the device 

![image](https://github.com/email2ify/friends/assets/110549305/6283b063-aef5-4ef3-a7a2-ebb4466297fc)

<br>

![logo](https://github.com/email2ify/friends/assets/110549305/dc653021-7d60-4dcb-96fe-aca800b3937b)

* The site logo is displayed on the left side of the navigation bar at all times
  
<br>

## Users: 

## Logged in users

 
<br>

![Nav11](https://github.com/email2ify/Projecttest-API/assets/110549305/dc37feee-01d5-4c49-ba0a-74322c765100)

When a user is logged in the following navigation items are shown:

* logo
* Add Post
* Home
* Feed
* Sign Out
* Users Icon 


<br>

## Logged out users


<br>

![nav1](https://github.com/email2ify/Projecttest-API/assets/110549305/0f5107a4-c4be-45a2-9b08-681a73958bc9)
 
When a user is logged out the following navigation items are shown:
* logo
* Home
* Sign In
* Sign Up


<hr>
<br>

## Features

## Home Page
* As a user I can view and read what the website is all about and a carousel of images of the wildlife species

<br>

![front1](https://github.com/email2ify/Projecttest-API/assets/110549305/26d3a22a-859e-4232-9861-ebeb73311f0b)

<br>

## Species Page

* As a user I can view and scroll down to any species image of your choice and click on the animal to know more about the animal and countries most often located

<br>

![species3](https://github.com/email2ify/Projecttest-API/assets/110549305/efbfc82a-4181-4e79-a4b2-a07259f13b9b)

<br>

## Countries Page

* As a user I can directly choose from listed countries on the page to know what animals are found there
  
<br>
  
![listcountries](https://github.com/email2ify/Projecttest-API/assets/110549305/1990fa0a-70ed-409a-b847-fba6df690eeb)

<br>

## Country

* As a user I can see from the choosen country from the countries list on the page to know what animal or species that are likely to be found in that specific African country

<br>

![found](https://github.com/email2ify/Projecttest-API/assets/110549305/8671a2a0-b5e7-475e-a5ca-4593d7723d81)

<br>

## Contact Page

* As a user I can contact the organization and submit my reason of complaint as regards 'general enquiery','login issues','report a post' or 'delete account'.
  
![contactus](https://github.com/email2ify/Projecttest-API/assets/110549305/defb8a4c-1e08-4602-83fc-2b0b831cef4a)

<br>

## Feed Page

* As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content<br>

![feed3](https://github.com/email2ify/Projecttest-API/assets/110549305/05c4a386-a043-4dff-8e1d-aad319be3bc5)

<br>

## Sign In

* As a user I can sign in to follow up with recent posts on the feed and activities on the platform<br>

![signi](https://github.com/email2ify/Projecttest-API/assets/110549305/e3443ae7-dd13-4eca-9b36-9e60f97d83ed)

<br>

## Sign Up

* As a user I can register an account with the organization in order to comment, post and follow up with recent posts on the feed and activities on the platform<br>

![signup](https://github.com/email2ify/Projecttest-API/assets/110549305/bf785a4d-5d36-4db6-a477-7beea7214fa4)

<br>

## Sign Out

* As a user I can sign out from my account when done with all recent posts on the feed and activities on the platform<br>

![signout](https://github.com/email2ify/Projecttest-API/assets/110549305/c2ec0ee9-ccad-4c39-98de-33c3cc1e4ccb)

<br>

**None Users**

* Restricted access has been implemented on the Feed posts for users who are not signed in, they will not be able to create a post, like or comment on post

<br>

## Get Started

User Story:

* As a user I can easily get started just by clicking on the Get Started button and it will redirect the user to a SignIn


![getstarted](https://github.com/email2ify/friends/assets/110549305/8864f737-db61-46dd-9140-816c915007ce)


<br>

**Feed for Users**

* As a logged in user I can like a post so that I can show my likes and commemt that interest me
* Logged in users have full access to post, comment, like or unlike. This will help ensure that unregistered users are not allow on the website

<br>

![feedss](https://github.com/email2ify/friends/assets/110549305/b3c4a195-8214-4850-b6d2-2b19342c4b3f)


User Story:

* As a post owner I can edit a post title and description so that I can make corrections or update the post, moreover, Only the user who created the post will be able to edit or delete post. This will ensure that users have full control of their own posts and unauthorized users are unaccepted.

<br>

![edit1](https://github.com/email2ify/Projecttest-API/assets/110549305/fd5f5aed-7610-400f-9fdd-ef6f95d5362d)


User Story:

* As a logged in user I can create posts so that I can share my images
  
![Capture12](https://github.com/email2ify/Projecttest-API/assets/110549305/d36f5218-5951-41c6-9cb0-e4e24a9b6f46)

Implementation:

* A add Post button has been implemented in the nav bar in order for logged in users to create a post when they want to share memory pictures.

![addpost](https://github.com/email2ify/friends/assets/110549305/39cb5c1d-df2d-4e48-ab2a-89490743a52a)


<br>

**Comments**

* Below each post, there will be a comment box available to logged in users. This will allow users to add comments under posts.



* A comment count will also be shown under the post, to allow users to see how many people have commented on each post.

* A comment or updated time will be displayed in either minutes ago or days ago 

* The username and Avatar of the user that created the comment will displayed on each comment

![commm](https://github.com/email2ify/friends/assets/110549305/b97ce1f5-e6ca-46c4-b77b-76e8ef5ce894)


<br>


**Search Bar**

* Search Bar is a feature giving users the ability to search for a users post by users name or based on key word input.
 
![seac](https://github.com/email2ify/Projecttest-API/assets/110549305/0fa6d027-8f0d-44be-851b-8d7f93e47bdb)


<br>

**Search WildLife**

User Story:

* As a user I can search for wild life specie or animal


![image](https://github.com/email2ify/friends/assets/110549305/03c62b20-9681-4e04-ae62-1a5bd33a63dd)


<br>


**PageNotFound**

* specific component, used to display a 404 page made up of an image file and return home button for when the page does not exist.


![6342468](https://github.com/email2ify/Projecttest-API/assets/110549305/756f4514-2fc8-4180-a787-d373ed9d44ca)


<br>

**Profile**

User Story:

* As a user I can view own profiles post , so as to have records of posts, comment and likes

![profipost](https://github.com/email2ify/Projecttest-API/assets/110549305/d6cb92ff-7b0b-4150-8bce-b819d92057f7)

<br>

**Footer**

* Footer image from the landing page
* 
![footer](https://github.com/email2ify/friends/assets/110549305/57a50061-efdc-473f-990c-71f1eed6da08)


##### Back to [top](#table-of-contents)

<br>

## Validation

## Code Validation 


The site url has was passed through the [W3C html Validator](https://validator.w3.org/), the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the [ESLint Validator](https://eslint.org/docs/latest/use/getting-started#next-steps).

**W3C Validation Results**

* No errors found using the URL passed through the W3C HTML validation checker. 
![html](https://github.com/email2ify/friends/assets/110549305/10338037-aaa7-4d3f-916a-6f97ee10fd51)

<br>

![css](https://github.com/email2ify/friends/assets/110549305/47de18e1-01f9-466a-8c2c-c1d9aeb93ac1)

<br>

## Eslint

Eslint was installed and configured locally. No problems were detected in the Problems tab and the terminal when going through the JS files

![image](https://github.com/email2ify/friends/assets/110549305/378e7f54-b149-4d22-9972-6106e177a53a)


## Chrome Dev Tools Lighthouse


The application has been tested with Chrome Dev Tools Lighthouse Testing which tests the application for:

* Performance
* Accessibility
* Best Practices
* SEO
One or two of the pages performanced a slightly low score because of the amount of images. This could be improved by resizing and reducing the mbs of the picture to even a smaller size and compressing before uploading.

<br>

## Home

![Home](https://github.com/email2ify/Projecttest-API/assets/110549305/76f3070c-9ab9-4d7f-affc-652ecd48efb4)

<br>

## Species

![Species](https://github.com/email2ify/Projecttest-API/assets/110549305/96a640e6-fb8c-4e8e-9fae-15c7e68be3e0)

<br>

## Countries

This was tested with incognito mode because the page loaded too slowly to finish within the time limit on a normal chrome extensions.

![Country](https://github.com/email2ify/Projecttest-API/assets/110549305/7ca1be96-fc84-4f71-ab3c-e0635658abbd)

<br>

## Contact

![contact](https://github.com/email2ify/Projecttest-API/assets/110549305/8513a04c-b205-40ec-839d-5c39e1368d11)

<br>

## Signin

![Signin](https://github.com/email2ify/Projecttest-API/assets/110549305/2639e2b4-33b1-4a88-bb18-130c95c21108)

<br>

## Signup

![signup](https://github.com/email2ify/Projecttest-API/assets/110549305/b7d8c5fa-8341-4472-bd79-9e672f5a5b71)

<br>

## Login-user

![Login-user](https://github.com/email2ify/Projecttest-API/assets/110549305/d69b82ac-0143-49f9-9b9b-ef44e3ce2525)

##### Back to [top](<#table-of-contents>)

<br>



## Reusable React Components

**The Navbar in Reusable React Components** 

On the NavBar of my webpage, I have re-usable components on Home,Species,Contact form,Feed,Sign Out and SignIn model, inorder to improve the user experience.
They are all Reusable React Components on the Navbar to provide a consistent user experience, efficient navigation, and code maintainability. It also contributes to a more cohesive and user-friendly application design.

* Navigation for example: The Navbar often contains navigation links that allow users to move between different sections or pages within the application. By placing it on all components, users have easy access to navigate anywhere in the webpage without having to go back to the homepage or use other navigation methods.

* Responsive Design for example: When designing a responsive web application, the Navbar is usually adapted to different screen sizes and devices. Reusing the same Navbar ensures that it scales appropriately and maintains a consistent user experience across various devices.

* Reusable Code: In this aspect,using a reusable Navbar component helps in maintainability. Instead of duplicating the Navbar code on each page or component, you define it once and reuse it wherever needed. This reduces code duplication and makes it easier to manage and update the Navbar's functionality or appearance.

**Delete Comment from a post on reusable React components**

* It provides a user-friendly way to show feedback, success messages, error alerts, or any other relevant information after performing the operations and it
 improves the user experience to validation checks and confirmation with a pop-up message when ever the delete button  or edit a post comment from the three Dots, Edit delete dropdown menu when triggerred, which double checks whether the user wants to continue with their option or not, after having clicked the delete button on the comment post or edit, but with a "customise  modal message", on clicking the 'Confirm Deletion' button the corresponding handleDelete function is called, and the data is removed completely. 

**SignIn and signOut reusable React components**

* Quick Access: In this case"customise  modal message", it provides Sign In message for users to enables users to sign in quickly without losing their context or navigating away from the current page. This is especially beneficial when users need to authenticate to access personalized content or perform specific actions.

* Logout Feedback: In this case"customise  modal message", it is a Sign Out modal that can provide a personalized message, thanking users for their session or informing them of any account-related actions taken during the session, it can also avoid accidental logouts in critical applications or areas where users are performing important tasks, a Sign Out modal can avoid accidental logouts, which might be disruptive to the user's experience or work flow.

**Form React components**

* Feedback and Confirmation: After form submission, a modal message can display feedback or confirmation messages, letting users know that their form was successfully submitted or if any further action is required or a get back message to look into the inquiring as soon as possible. It helps the User to biuld a User-Friendly Interaction and it provide smooth and user-friendly interactions, form validations, making the process of filling out the enquiry form more enjoyable and engaging for users.

<br>


## Wireframes

Balsamiq was used to create wireframes of the sites pages

<details>
<summary>Wireframes</summary>
<img src="docs/wireframes/Sign-Up.png">
<img src="docs/wireframes/Feeds.png">
<img src="docs/wireframes/Sign-In.png">
<img src="docs/wireframes/About.png">
<img src="docs/wireframes/Countries.png">
<img src="docs/wireframes/Home-page.png">
<img src="docs/wireframes/Contact-Us.png">
<img src="docs/wireframes/Species.png">


</details>

##### Back to [top](#table-of-contents)

<br>

## Technical Design

## Colour-Scheme
* The background colour for individual componets is Hex White (#FFFFFF) and for the Logo is Green (#52c5a8)
* The main page background colour is an off shade of white (#f8f8f8).
     * Logo: red (#dc3545)
     * Icons: Gray(#f8f8f8)
     * NarBar: Blue (#007bff)
     * Text: Black(#0a0a0a)
     * Countries page:  Drak Blue (#6c757d), Text White (#FFFFFF)
     * Get Started: Orange (ff6600)


<br>

### Typography

* The main font used on the website is "DM Sans".

<br>

### Imagery

* The images on this website are user uploaded from a free download website on Unplash.com- [click](https://unsplash.com/s/photos/wild-animal) and Pixel [click](https://www.pexels.com) 

while the logo was on Logomaker [click](https://www.logomaker.com) and the Logo was modify and compress using Favicon [click](https://favicon.io/favicon-converter)

<br>

##### Back to [top](<#table-of-contents>)

<br>

### Bugs

On mobile device it has come to my notice that, when ever a user tries to log in, the sign in page keep redirecting the user to sign in , and when sign in, it will redirect again to sign in again.
I later discovered that, it is expected to behave so with iOS devices. It's a bug with the core code itself and to solve this problem, you would need to disable the Safari option called:
"Prevent Cross-Site Tracking" to allow users to log in on an iPhone, for example.
<br>

Other bugs that were found, and with the error codes given, I was able to search on google which provides me with already made answers on same questions by other coders from slack using the exact error code and this method helps me alots on this project and also with help of student tutor

<br>

## Security 

* Unrelated input after the urls page will get a "404 Not Found page" with a "Return Home" button for the user to click to return to the main home page.

* "Unable to log in with provided credentials" for incorrect inputs on sign in form
* "The two password fields didn't match" for incorrect password on sign up form
* "Unable to log in with provided credentials" for incorrect user name or password sign in form


<br>

## Basic Technologies

**Technologies**

* Git
    * Version control software
* Github
    * Repository used to store base code and docs
* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies
* Eslint
    * Linting tool used in order to check best practice coding standards
* Heroku
    * Used for application hosting

<br>

**Coding Languages**
- HTML
- CSS
- Javascript


## Frameworks and Tools

- [React-Bootstrap 1.6.3](https://react-bootstrap-v4.netlify.app/) - I used Bootstrap React library for User Interface for components, styling and responsiveness.
- [Axios](https://axios-http.com/docs/intro) - Axios is a Promise API. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - For routing. I used this library to enable navigation between views of components and on the URL they have accessed in the browser. 
- [JWT](https://jwt.io/) - I used JWT to securely transmit data and to have the ability to verify that the content has not been tampered.
- [React 17](https://17.reactjs.org/) - JavaScript library for building User Interfaces. 
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React library. Is used, as this component load content e.g feed page and users don't need to scrolls towards the bottom of the page without having to jump to the next page.

- [Cloudinary](https://cloudinary.com/) - I used this to store static files
- [Google Fonts](https://fonts.google.com/) - I used this to import fonts
- [Responsive](https://www.responsivedesignchecker.com/) - I used this to create the multi-device mock-up 
- [Gitpod](https://gitpod.io) - I used this to host a virtual workspace
- [Balsamiq](https://balsamiq.com/)  Used to create the wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - Developer tool. I used this for debugging of the code and checking site for responsiveness
- [Font Awesome](https://fontawesome.com/) -I used this to style the site with icons.
- [Git](https://git-scm.com/) - I used this for version control and to push the code to GitHub
- [GitHub](https://github.com/) - I used this as a remote repository to store project code

      
<br>

## Validation:

  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/)  I Used this to validate performance, accessibility, best practice and SEO of the application
  - [WC3 Validator](https://validator.w3.org/) -I used this to validate the applications HTML code
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - I used this to validate the applications CSS code
  - [ESLint](https://eslint.org/) - I used this to validate applications JSX code


### Libraries

#### Installed Libraries

| Package       | Version        |
| ------------- | ------------- |
| axios |1.3.4 |
| bootstrap | 4.6.0 |
| jwt-decode | 3.1.2 |
| react-bootstrap | 1.6.3 |
| react-chartjs-2 | 3.0.4 |
| react-dom | 17.0.2 |
| react-infinite-scroll-component |6.1.0 |
| react-multi-select-component | 4.3.4|
| react-router-dom | 5.3.0 |
| react-scripts | 5.0.1 |
| react-scroll | 1.8.9|


##### Back to [top](<#table-of-contents>)



<br>

## Testing

**Automated and Manuel testing folder on this link** : 

  * [Manuel Testing Folder](https://github.com/email2ify/drf_friends/tree/main/docs/testing/manual)

  * [Automated Testing Folder](https://github.com/email2ify/drf_friends/tree/main/docs/testing/automated)

<br>

## Packages

* "axios": "^0.21.4",
* "bootstrap": "^4.6.0",
* "jwt-decode": "^3.1.2",
* "react": "^17.0.2",
* "react-bootstrap": "^1.6.3",
* "react-dom": "^17.0.2",
* "react-infinite-scroll-component": "^6.1.0",
* "react-responsive-carousel": "3.2.21",
* "react-router-dom": "^5.3.0",
* "react-scripts": "^4.0.3",
* "web-vitals": "^1.1.2",
* "eslint": "^7.32.0",

<br>


## Deployment

## Heroku

The site was deployed to Heroku with the following steps:

* Navigate to heroku and create an account
* Click the new button in the top right corner
* Select create new app
* Enter app name
* Select region and click create app
* Click the resources tab and search for Heroku Postgres
* Select hobby dev and continue
* Go to the settings tab and then click reveal config vars
* Add the following config vars:
* SECRET_KEY: (Your secret key)
* DATABASE_URL: (Available)
* ALLOWED_HOST:
* CLIENT_ORIGIN: url for the client front end react application that wil be making requests to these APIs
* CLIENT_ORIGIN_DEV: address of the local server used to preview and test UI during development of the front end client application
* Click the deploy tab
* Scroll down to Connect to GitHub and sign in , authorize when prompted
* In the search box, find the repositoy you want to deploy and click connect
* Scroll down to Manual deploy and choose the main branch
* Click deploy

##### Back to [top](#table-of-contents)

## API-Backend

**Connecting the react workspace to your API, in order to send data to the API**

* In the Heroku dashboard, go into the API application settings
* In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application, like this https://moments.herokuapp.com.
* Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, without the slash at the end. Gitpod occasionally changes this URL 
 as when working is on progress with your project.
* On the frontend Gitpod workspace, install the Axios library using the command 'npm install axios'.
* Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
* Import axios at the top of the file
* Define your baseURL to a unique URL of your deployed API project.
* Set the content-type header to multi-part/form-data as the API will need to do with images as well as text in it's requests.
* In order to avoid any CORS issues, set withCredentials to True.
* Import this file into App.js to be used on all pages

<br>

## Forking

Make a copy of the original repository on the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

* Navigate to www.github.com and log in.
* Once logged in navigate to the desired [GitHub Repository](https://github.com/email2ify/moments.git) that you would like to fork.
* At the top right corner of the page click on the fork icon.
* There should now be a copy of your original repository in the GitHub account.

<br>

## Locally

Navigate to the GitHub Repository you want to clone to use locally:

* Navigate to www.github.com and log in.
* Once logged in navigate to the desired [GitHub Repository](https://github.com/email2ify/moments.git) that you would like to clone.
* Locate the code button at the top, above the repository file structure.
* Select the preferred clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
* Open Git Bash
* Update the current working direction to the location in which you would like the clone directory to be created(Folder).
* Type `git clone` and paste the previously copied URL 
* `$ clone https://github.com/email2ify/moments.git`
* Press enter and the local clone will be created at the desired local location


<br>

**Install Dependencies:**

<br>
* nvm install 16
* nvm use 16
  <br>
  <br>
Run Application:

* npm start
  
<br>

## Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository .

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

<br>


Install Dependencies:

```npm install```

Run Application:

```npm start```



<br>

## Credits

 Implementation: 
* Home page image carousel - [React responsive carousel](https://www.npmjs.com/package/react-responsive-carousel?fbclid=IwAR1lRdK_fVD_9qm55QXE0KN7H4yUqw_cLnSUv5_zk9QRIwriizKYC5KZWj8) 
 
* Code Institute- [click](https://learn.codeinstitute.net)

<br>

## Acknowledgements

My Mentor Daisy, my family, and most especially my wife  

[Back to top](<#table-of-contents>)
