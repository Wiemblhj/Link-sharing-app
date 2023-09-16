import InfoHeading from "../../../UI/InfoHeading";
import AddNewLinkButton from "./AddNewLinkButton";
import LinksSaveButton from "./LinksSaveButton";
import { useContext } from "react";
import LinkContext from "../../../context/LinkContext";
import LinkComponent from "./LinkComponent";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


const LinksSection = () => {
  const { setButtonPressed, links, setLinks } = useContext(LinkContext);

  const handleClickAddLink = () => {
    setLinks((prev) => [...prev, {id: prev.length + 1, platform: "GitHub", input: ""}])
    setButtonPressed(false);
  };

  const handleClickRemoveLink = (id) => {
    const updatedLinks = links.filter(link => link.id !== id);
    setLinks(updatedLinks)
  };

  const linksInfo = {
    title: "Customize your links",
    text: "Add/edit/remove links below and then share all your profiles with the world!"
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
  
    const updatedLinks = Array.from(links);
    const [removed] = updatedLinks.splice(sourceIndex, 1);
    updatedLinks.splice(destinationIndex, 0, removed);

    setLinks(updatedLinks);
  };

return (
  <>
    <StyledMainSection>
      <InfoHeading info={linksInfo} />
      <AddNewLinkButton addLink={handleClickAddLink} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="linkContainer">
          {(provided) => (
            <StyledLinksContainer ref={provided.innerRef}>
              {links.map((link, index) => (
                <Draggable key={link.id} draggableId={String(link.id)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <LinkComponent
                        id={link.id}
                        platform={link.platform}
                        removeLink={handleClickRemoveLink}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </StyledLinksContainer>
          )}
        </Droppable>
      </DragDropContext>
    
    </StyledMainSection>
    <StyledFooterComponent>
      <LinksSaveButton numberOfLinks={links.length} />
    </StyledFooterComponent>
  </>
)};

export default LinksSection;

const StyledMainSection = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media (min-width: 772px) {
    width: 100%;
    padding: 40px;
    margin-top: 24px;
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    width: 808px;
    padding: 40px;
    margin-top: 24px;
    align-items: flex-start;
  }
`

const StyledFooterComponent = styled.footer`
  width: 343px;
  height: 78px;
  margin-bottom: 16px; 
  background: white;
  border-top: 1px solid #D9D9D9;
  padding: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media (min-width: 772px) {
    width: 721px;
    height: 94px;
    margin-bottom: 24px; 
    padding: 24px 40px;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 1280px) {
    width: 808px;
    height: 94px;
    margin-bottom: 24px; 
    padding: 24px 40px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0px;
    top: 100%;
  }
`

const StyledLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    width: 100%;
`