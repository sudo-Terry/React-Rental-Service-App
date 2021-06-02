import React, {useEffect} from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 8rem 0rem;
  background-color: #fff;
  z-index: 0;
`;

const VideoTitle = styled.h1`
  text-align: center;
`;

const VideoWrapper = styled.div`
  display: flex;
  width: 1280px;
  height: 760px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

function VideoSection(props) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <VideoContainer>
      <VideoTitle data-aos="fade-left">About us</VideoTitle>
      <VideoWrapper data-aos="fade-right">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Te1bdN2-gJQ"
          width="80%"
          height="80%"
        />
      </VideoWrapper>
    </VideoContainer>
  );
}

export default VideoSection;
