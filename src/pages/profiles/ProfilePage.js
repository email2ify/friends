import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import UserProfiles from "./UserProfiles";
import { axiosReq } from "../../api/axiosDefaults";
import {
  ProfileDataProvider,
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";



const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const { id } = useParams();
  const { setProfileData } = useSetProfileData();
  const { userProfiles: pageProfile } = useProfileData();
  const [profile] = pageProfile.results;


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profilePosts }] = await Promise.all([
          axiosReq.get(`/posts/?owner__profile=${id}`),
        ]);

        setProfilePosts(profilePosts);
        try {

        } catch (err) {
          ;

        }
        setHasLoaded(true);
      } catch (err) {
        ;

      }
    };
    handleMount();
  }, [id, setProfileData]);



  const mainProfilePosts = (
    <>
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row className="d-flex justify-content-center">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p className="text-center">Profile Posts</p>
        <ProfileDataProvider>
          <UserProfiles />
        </ProfileDataProvider>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
};

export default ProfilePage;