# Friends WildLife

This is a platform for local nature reserves, where lovers of wildlife meet to air their views and opinoin about the wildlife conservation, by sharing photos and to comment about their experince in the wild.


![Capture2](https://github.com/email2ify/Projecttest-React/assets/110549305/1998ccc1-71e1-4bd9-af3e-8bb4066ea3d7)
## The Strategy Plane

### Site Goals

Friends WildLife is aimed to lovers of the wildlife. The site encourages user to share their thought, to allow them to showcase their best photo shot of the animals in the wildlife. 
<hr>

### Agile Planning

This project was developed using agile methodologies by delivering small features in incrementally with a three phase loop.

Stories were assigned to epics, prioritized under the Todo, In progress, and Done. They were assigned to track and monitor the progress of the project and stories allocated accordingly to the complexity. "Todo" stories is where I have listed the 'to do' stories lines, and "In progress" is where I have on-going work work in the tast mangement listed, likewise 'Done list', where I have the task completed.

The Kanban board was created using github projects and can be located [here](https://github.com/users/email2ify/projects/12) and can be viewed to see more information on the project cards. All stories except the documentation tasks have a full set of acceptance criteria in order to define the functionality that marks that story as complete.

![Capture3](https://github.com/email2ify/Projecttest-React/assets/110549305/a40561b7-5f5e-458e-bf34-62976188177b)

<hr>

## Epics

**Set Up**

This Epic covers all the initial setup of the React application and dependencies.

**Posts**

It covers the frontend creation of the application in regards to posts. This is to allow users to interact with the backend API via the user interface in order to create, read, update and delete their own posts.

**Comments**

It gives the user the ability to comment on the frontend of the application in regards to comments on posts. This is to allow users to interact with the backend API in order add comments on posts.

**Profiles**

It covers the frontend creation of the application in regards to user profiles. This is to allow users to interact with the backend API via the user interface to manage their own profiles.

**Add Post**

There is where users can add images on the frontend application in regards to add post. This is to allow users to interact with the backend API, to display and delete images

**Feeds**

This aspect is the front end application in regards to feed. This is to allow users to read comment, view images and like a post,interacting with the backend API.
<hr>
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


**Comments**

* As a user I can read comments on posts so that I can read what other users think about the posts
* As a logged in user I can add comments to a post so that I can share my thoughts about the post
* As an owner of a comment I can manage my comment, edit or delete it all


**Follow us**

* As a user, I would like to be able to follow  the site organization on every social media platform in order to show my solidarity.

<hr>
<br

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



**Logged in users:**
When a user is logged in the following navigation items are shown:

* logo
* Add Post
* Home
* Feed
* Sign Out
* Users Icon 

![Capture4](https://github.com/email2ify/Projecttest-React/assets/110549305/3fb0c33e-8623-4190-a46a-1099152f39a0)


**Logged out users:**
When a user is logged out the following navigation items are shown:
* logo
* Home
* Sign In
* Sign Up

![Capture5](https://github.com/email2ify/Projecttest-React/assets/110549305/6a634050-fb46-4d94-9745-bbd7616a0443)

The site logo is displayed on the left side of the navigation at all times.



**Home Page**

As a user I can view and read what the website is all about and the organization behind it

**Feed Page**

* As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content

**None Users**
* Restricted access has been implemented on the Feed posts for users who are not signed in, they will not be able to create a post, like or comment on post

**Feed for Users**
* As a logged in user I can like a post so that I can show my likes and commemt that interest me
* Logged in users have full access to post, comment, like or unlike. This will help ensure that unregistered users are not allow on the website

![Capture6](https://github.com/email2ify/Projecttest-React/assets/110549305/7f079821-6da9-401b-b86f-6753f31e209b)

User Story:

* As a post owner I can edit a post title and description so that I can make corrections or update the post, moreover, Only the user who created the post will be able to edit or delete post. This will ensure that users have full control of their own posts and unauthorized users are unaccepted.


User Story:

* As a logged in user I can create posts so that I can share my images

Implementation:

* A add Post button has been implemented in the nav bar in order for logged in users to create a post when they want to share memory pictures.

![Capture7](https://github.com/email2ify/Projecttest-React/assets/110549305/58d3b9ab-9887-4cf4-be77-688b80fd6988)






**Comments**

Below each post, there will be a comment box available to logged in users. This will allow users to add comments under posts.



A comment count will also be shown under the post, to allow users to see how many people have commented on each post.

A comment or updated time will be displayed in either minutes ago or days ago 

The username and Avatar of the user that created the comment will displayed on each comment


![Capture17](https://github.com/email2ify/Projecttest-React/assets/110549305/0c822f33-5c94-49a7-b13f-c0b6b884595b)



**Profiles**

User Story:

As a user I can view other users profiles so that I can see their posts and learn more about them


* Profile pages have been implemented and can be viewed by clicking on a users Avatar that is displayed on a post.

* To view a users own profile, they can click their icon from the navigation menu.

User Stories:




![profile_edit](https://raw.githubusercontent.com.png)




<br>



<details>

<summary>All Wireframe Images</summary>



Home / Posts

![Home / Posts](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/post.png)

Contact

![Contact](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/Contact.png)

Feed

![Feed](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/Feed.png)

Liked

![Liked](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/Liked.png)

Profiles

![Profiles](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/Profiles.png)


User Profile

![Artist Profile](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/artist-profile.png)


Create Post & Edit Post

![Create Post](https://raw.githubusercontent.com/email2ify/friends/main/readme/wireframes/create-post.png)

Sign In

![Sign In](https://github.com/email2ify/friends/blob/main/readme/wireframes/sign-in.png)

Sign Up

![Sign Up](https://github.com/email2ify/friendss/blob/main/readme/wireframes/sign-up.png)

</details>



## Colour-Scheme

The logo red (#dc3545)
The background colour for individual componenets is black (#000000).

Icon, NarBar, background, colours are blue (#007bff), tea(#20c997), light (#f8f9fa).

Main text is black (#343a40).

The main page background colour is an off shade of white (#f8f8f8).
<hr>
<br>

#### Typography

The main font used on the website is "DM Sans".
<hr>
<br>

#### Imagery

The images on this website are user uploaded from a free download website on Unplash.com- [click](https://unsplash.com/s/photos/wild-animal) 
while the logo was on Logomaker [click](https://www.logomaker.com) and the Logo was modify and compress using Favicon [click](https://favicon.io/favicon-converter)
<hr>
<br>

## Technologies

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


<hr>
<br>

## Testing

Testing can be found in the [TESTING.md file])
<hr>
<br>


## Heroku Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

* Navigate to heroku and create an account
* Click the new button in the top right corner
* Select create new app
* Enter app name
* Select region and click create app
* Click the resources tab and search for Heroku Postgres
* Select hobby dev and continue

* Click the deploy tab
* Scroll down to Connect to GitHub and sign in for authorize when prompted
* In the search box, find the repositoy you want to deploy and click connect
* Scroll down to Manual deploy and choose the main branch
* Click deploy
<hr>
<br>

## Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository .

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.
<hr>
<br>


Install Dependencies:

```npm install```

Run Application:

```npm start```
<hr>
<br>


<hr>
<br>

## Credits

 Implementation of project Carousel component:   
* Free Code Camp- [click](https://www.freecodecamp.org)
 
Architect and resuable code by:
* Code Institute- [click](https://learn.codeinstitute.net)


