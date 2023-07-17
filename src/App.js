import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";

//import MainPage from "./components/MainPage";
import { LandingPage } from "./pages/home/LandingPage";
import Footer from "./components/Footer";
import CountriesList from "./pages/country/CountriesList"; 
import AnimalListByCountry from "./pages/country/AnimalListByCountry";
import SpecieDetails from "./pages/specie/SpecieDetails";
import SpecieList from "./pages/specie/SpecieList";
import ContactForm from './pages/contacts/ContactForm';
import ProfilePage from "./pages/profiles/ProfilePage";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";

import PageNotFound from "./components/PageNotFound";



// current users to search for a post and likes

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      
      
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <LandingPage />
            )}  
          />
          <Route
            exact

            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword."
                
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
          />
            )}
            />
            <Route
              exact
              path="/ContactForm/ContactForm/"
              render={() => (
                <ContactForm />
                
              )}
            />
          <Route exact path="/specie" render={() => <SpecieList />} /> 
          <Route exact path="/specie/:slug" render={() => <SpecieDetails />} /> 
          <Route exact path="/countries" render={() => <CountriesList />} />
          <Route exact path="/countries/:country" render={() => <AnimalListByCountry />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/contact" render={() => <ContactForm />} />        
          <Route exact path="/profiles/:id" render={() => 
              <ProfileDataProvider>
                <ProfilePage />
              </ProfileDataProvider>
           } />
          <Route render={() => <PageNotFound />} />
        </Switch>
        
      </Container>
      <Footer />
    </div>
  );
}

export default App;
