import React from "react";
import { Button } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function SocialMediaButtons() {
  return (
    <div>
      <div className="container-fluid text-center">
        <Button
          className="mr-1 mb-1"
          href="https://www.linkedin.com/in/robert-cable/"
          target="_blank"
          variant="primary"
          size="lg"
        >
          <FaLinkedin className="mb-1 mr-1" />
          LinkedIn
        </Button>

        <Button
          className="mr-1 mb-1"
          href="https://github.com/R-C-Cable"
          target="_blank"
          variant="primary"
          size="lg"
        >
          <FaGithub className="mb-1 mr-1" />
          Github
        </Button>
      </div>
    </div>
  );
}

export default SocialMediaButtons;
