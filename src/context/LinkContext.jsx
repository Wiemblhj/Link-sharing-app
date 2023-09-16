import { createContext, useState } from "react";
import { ReactComponent as LogoGitHub } from "../assets/images/icon-github.svg";
import { ReactComponent as LogoYouTube } from "../assets/images/icon-youtube.svg";
import { ReactComponent as LogoLinkedIn } from "../assets/images/icon-linkedin.svg";
import { ReactComponent as LogoFacebook } from "../assets/images/icon-facebook.svg";
import { useEffect } from "react";

const LinkContext = createContext({})

export const LinkProvider = ({children}) => {
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const [buttonPressed, setButtonPressed] = useState(false);
    const [links, setLinks] = useState([]);
    const [shareUrl, setShareUrl] = useState("https://github.com/");
    const [sharedClicked, setSharedClicked] = useState(false);

    useEffect(() => {
        const storedLinks = localStorage.getItem("links");
        if(storedLinks) {
          setLinks(JSON.parse(storedLinks))
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links))
      }, [links]);

    const listArray = [
        {id: 1, title: "GitHub", icon: <LogoGitHub />, color: "rgba(26, 26, 26, 1)", link: "https://github.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
        {id: 2, title: "YouTube", icon: <LogoYouTube />, color: "rgba(238, 57, 57, 1)", link: "https://www.youtube.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:user\/|c\/)?|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
        {id: 3, title: "LinkedIn", icon: <LogoLinkedIn />, color: "rgba(45, 104, 255, 1)", link: "https://linkedin.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:in|pub|company)\/([a-zA-Z0-9_-]+)(?:\/.*)?$/}, 
        {id: 4, title: "Facebook", icon: <LogoFacebook />, color: "rgba(55, 164, 255, 1)", link: "https://www.facebook.com/", regEx: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:profile\.php\?id=|people\/)?([a-zA-Z0-9._-]+)(?:\/.*)?$/}, 
   ]
    
    const updateList = (id, input, platform) => {
        const isDuplicate = links.some(link => link.id === id)
        if(isDuplicate) {
            const updatedList = [...links];
            updatedList.splice(id -1, 1, {id, input, platform})
            setLinks(updatedList);
        } else {
            setLinks((prev) => [...prev, {id, input, platform}])
        }
    };
  
    const handleClick = () => {
        setButtonPressed(true);
    };

    const updateLinkPlatform = (id, platform) => {
        const newLinks = links.map(link => {
            if(id === link.id) {
                return { ...link, platform}
            }
            return link;
        })
        setLinks(newLinks)
    };

    const contextValue = {
        buttonPressed: buttonPressed,
        linkRegex: linkRegex,
        links: links,
        shareUrl: shareUrl,
        sharedClicked: sharedClicked,
        listArray: listArray,
        handleClick: handleClick,
        updateList: updateList,
        updateLinkPlatform: updateLinkPlatform,
        setLinks: setLinks,
        setButtonPressed: setButtonPressed,
        setShareUrl: setShareUrl,
        setSharedClicked: setSharedClicked,
    }

    return (
        <LinkContext.Provider value={contextValue}> 
            {children}
        </LinkContext.Provider>
    )
}

export default LinkContext