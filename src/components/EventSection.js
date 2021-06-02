import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {CardDataOne} from "../data/EventData";
import Aos from "aos";
import "aos/dist/aos.css";

const CardsSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8rem 0rem;
  background-color: #fff;
  z-index: 0;
`;

const CardTitle = styled.h1`
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

const CardItems = styled.ul`
  display: flex;
  margin-bottom: 24px;
  list-style: none;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const CardItem = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const CardLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

const CardImgWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;

const CardImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardItemInfo = styled.div`
  padding: 20px 30px 30px;
`;

const CardItemText = styled.h5`
  color: #252e48;
  font-size: 18px;
  line-height: 24px;
`;

function EventSection() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <CardsSection>
      <CardTitle data-aos="fade-down">Check out for ongoing Events!</CardTitle>
      <CardContainer>
        <CardWrapper>
          <CardItems>
            {CardDataOne.map((item, index) => (
              <CardItem data-aos="fade-up" id={index}>
                <CardLink>
                  <CardImgWrap data-category={item.label}>
                    <CardImg src={item.src} alt="House" />
                  </CardImgWrap>
                  <CardItemInfo>
                    <CardItemText>{item.text}</CardItemText>
                  </CardItemInfo>
                </CardLink>
              </CardItem>
            ))}
          </CardItems>
        </CardWrapper>
      </CardContainer>
    </CardsSection>
  );
}

export default EventSection;
