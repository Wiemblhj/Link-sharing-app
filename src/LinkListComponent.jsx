import React from 'react'
import styled from "styled-components";
import logoArrow from "./assets/images/icon-arrow-right.svg";
import { useEffect, useState, useContext } from 'react';
import LinkContext from './context/LinkContext';

const LinkListComponent = ( {platform, input} ) => {
  const [color, setColor] = useState("")
  const [url, setUrl] = useState("")
  const { listArray, setShareUrl } = useContext(LinkContext)
  const [logo, setLogo] = useState("");

  useEffect(() => {
    listArray.forEach(list => {
      if(platform === list.title) {
        setLogo(list.icon)
      }
    })
  }, [platform])

  useEffect(() => {
    listArray.forEach(container => {
      if(container.title === platform) {
        setColor(container.color)
      }
    })
  }, [platform])

  useEffect(() => {
    if(input !== "") {
      setUrl(input)
    } else {
      listArray.forEach(container => {
        setUrl(container.link)
      })
    }
  }, [platform, input])

  const handleClick = () => {
    setShareUrl(url)
    window.open(url)
  }

  return (
    <StyledLink onClick={handleClick} style={{background: `${color}`}}>
      <div className="left--wrapper">
        <div className="logo--container">{logo}</div>
        <p>{platform}</p>
      </div>
      <img src={logoArrow} alt="right arrow" />
    </StyledLink>
  )
}

export default LinkListComponent

const StyledLink = styled.div`
    width: 237px;
    height: 44px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
    color: white;
    margin-top: 15px;

    &:hover {
      cursor: pointer;
    }

    .left--wrapper {
      display: flex;
      align-items: center;
    }
    
    .logo--container {
      fill: white;
      margin-right: 10px;
    }

    img {
        width: 16px;
        height: 16px;
        right: 16px;
        top: 25%;
    }
`

