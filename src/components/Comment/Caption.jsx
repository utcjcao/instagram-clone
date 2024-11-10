import React from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";
import { timeAgo } from "../../utils/timeAgo";
import useProfileStore from "../../storage/profileStore";

const Caption = ({ post }) => {
  const userProfile = useProfileStore((state) => state.userProfile);

  return (
    <Row className="align-items-center mb-3">
      <Col xs="auto">
        <Link to={`/${userProfile.username}`}>
          <Image
            src={userProfile.profilePicURL}
            roundedCircle
            width={40}
            height={40}
            alt="User Profile Picture"
          />
        </Link>
      </Col>
      <Col>
        <Row className="align-items-center">
          <Col xs="auto">
            <Link
              to={`/${userProfile.username}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>{userProfile.username}</strong>
            </Link>
          </Col>
          <Col>
            <span>{post.caption}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <small className="text-muted">{timeAgo(post.createdAt)}</small>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Caption;
