import React, { useState } from "react";
import styled from "styled-components";



const Card = ({ movieData }) => {
 
 
  const [isHovered, setIsHovered] = useState(false);





  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movies"
      />
      {isHovered && (
        <div className="hover">
          <div className="info-container flex column">
            <h3 className="name" >
              {movieData.name}
            </h3>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: 100%;
    width: 230px;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;

    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      display: none;
    }
  }
  @media (max-width: 900px) {
    max-width: 230px;
    width: 150px;
    height: 100%;
    cursor: pointer;
    position: relative;
    img {
      border-radius: 0.2rem;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
    .hover {
      z-index: 99;
      height: max-content;
      width: 150px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
      background-color: #181818;
      transition: 0.3s ease-in-out;

      .info-container {
        padding: 1rem;
        gap: 0.5rem;
      }
      .icons {
        .controls {
          display: flex;
          gap: 0rem;
          display: none;
        }
        svg {
          font-size: 2px;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: #b8b8b8;
          }
        }
      }
      .genres {
        ul {
          gap: 1rem;
          li {
            padding-right: 0.7rem;
            &:first-of-type {
              list-style-type: none;
            }
          }
        }
      }
    }
  }
`;
