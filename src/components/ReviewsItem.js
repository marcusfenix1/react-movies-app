import React, { useState, useRef } from "react";
import styled from "styled-components";

const StyledReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledAuthor = styled.p`
  margin: 0px 0px 15px 0px;
  font-weight: bold;
  text-decoration: underline;
`;

const StyledOpenReviewButton = styled.button`
  width: 75px;
  background-color: #3f51b5;
  border: 0px;
  border-radius: 12px;
  display: block;
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  margin: 0 0px 10px 0px;

  &:hover {
    transition-duration: 0.25s;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

const StyledReviewContent = styled.span`
  max-height: 100px;
  overflow: hidden;
`;

const StyledOpenedReviewContent = styled(StyledReviewContent)`
  max-height: none;
  height: auto
  overflow: visible;
`;

//TODO fix button styles; fix scroll to author
const ReviewsItem = ({ author, content }) => {
  const [opened, setOpened] = useState(false);
  const authorRef = useRef(null);

  const handleRef = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <StyledReviewContainer>
      <StyledAuthor ref={authorRef}>Author: {author}</StyledAuthor>
      {content.length > 600 && (
        <StyledOpenReviewButton
          onClick={() => {
            handleRef(authorRef);
            setOpened(!opened);
          }}
        >
          Full text
        </StyledOpenReviewButton>
      )}
      {!opened ? (
        <StyledReviewContent>{content}</StyledReviewContent>
      ) : (
        <StyledOpenedReviewContent>{content} </StyledOpenedReviewContent>
      )}
    </StyledReviewContainer>
  );
};

// const ReviewsItem = ({ author, content }) => {
//   const [review, setReview] = useState(content.substr(0, 1000));
//   const authorRef = useRef(null);

//   const handleRef = (ref) => {
//     ref.current.scrollIntoView();
//   };

//   return (
//     <StyledReviewContainer>
//       <StyledAuthor ref={authorRef}>Author: {author}</StyledAuthor>
//       {content.length > 400 && (
//         <StyledOpenReviewButton
//           onClick={() => {
//             handleRef(authorRef);
//             setReview(content);
//           }}
//         >
//           Full text
//         </StyledOpenReviewButton>
//       )}
//       <span>
//         {review}
//         {content.length > 400 && <span>...</span>}
//       </span>
//     </StyledReviewContainer>
//   );
// };

export default ReviewsItem;
