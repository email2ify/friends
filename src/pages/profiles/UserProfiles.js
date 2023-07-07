import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";


const UserProfiles = ({ mobile }) => {
  const {userProfiles} = useProfileData();
  return (
    <Container
      className={`${appStyles.ProfileContent} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {userProfiles.results ? (
        <> 
          {mobile ? (
            <div className="d-flex justify-content-around">
              {userProfiles.results.slice(0, 8).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            userProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};
export default UserProfiles;