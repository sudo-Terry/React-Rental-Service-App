import React, {useEffect} from "react";
import styled from "styled-components";
import {Button} from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #fff;
  z-index: 0;
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

function InfoSection({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos={reverse ? "fade-left" : "fade-right"}
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button primary="true" to="/homes">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse} data-aos="fade-up">
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default InfoSection;
