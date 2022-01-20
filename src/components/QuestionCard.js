import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CommentIcon from "@material-ui/icons/Comment";

import IconButton from "@material-ui/core/IconButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
const QuestionCard = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [counter, setCounter] = useState(0);
  const [showComment, setShowComment] = useState("none");
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([
    {
      name: "abc",
      desc: "Occaecat fugiat et irure est minim.",
    },
    {
      name: "xyz",
      desc: "Occaecat fugiat et irure est minim.",
    },
    {
      name: "wed",
      desc: "Occaecat fugiat et irure est minim.",
    },
  ]);
  const handleLike = () => {
    if(counter <= 0){
    setDislike(0);
    setLike(500);
    setCounter(counter + 1);
    } 
  };
  const handleDislike = () => {
    if (counter > 0) {
      setLike(0);
      setDislike(500);
      setCounter(counter - 1);
    }
  };
  const commentView = () => {
    if (showComment === "none") {
      setShowComment("flex");
    } else {
      setShowComment("none");
    }
  };

  const addComment = () => {
    setCommentArray([
      ...commentArray,
      {
        name: "xyz",
        desc: comment,
      },
    ]);
    setComment("");
    console.log("comment cha array", commentArray);
  };
  useEffect(() => {});
  const CommentMain = styled.div`
    display: ${showComment};
  `;
  const commentKaArray = () => {};
  return (
    <Card>
      <Profile>
        <UserIcon />
        <UserDetail>
          <UserName>JOHN</UserName>
          <UserDesc>FYIT student</UserDesc>
        </UserDetail>
      </Profile>
      <QText>When are we getting our mess rebate for this semester?</QText>
      <ButtonContainer>
        <IconButton onClick={handleLike}>
          <ThumbUpIcon fontSize="medium" style={{ color: red[like] }} />
        </IconButton>
        {counter}
        <IconButton onClick={handleDislike}>
          <ThumbDownIcon fontSize="medium" style={{ color: red[dislike] }} />
        </IconButton>
        <IconButton onClick={commentView}>
          <CommentIcon fontSize="medium" />
        </IconButton>
      </ButtonContainer>

      <div style={{ display: `${showComment}` }}>
        <CommentSection>
          <CommentCont>
            <UserIcon />
            <InputComment
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="enter your answer"
            />
            <Comment onClick={addComment}>Comment</Comment>
          </CommentCont>
          <p style={{ fontSize: "20px" }}>All comments</p>
          <CommentList>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {commentArray.map((item) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "10px 0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <UserIcon />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px",
                        }}
                      >
                        <h4 style={{ margin: 0 }}>{item.name}</h4>
                        <CommentText>{item.desc}</CommentText>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CommentList>
        </CommentSection>
      </div>
    </Card>
  );
};

export default QuestionCard;

const Card = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 600px;
  background: #fff;
  height: auto;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;
const UserIcon = styled.img`
  background: yellow;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const UserDetail = styled.div`
        display: flex
        flex-direction: column;
        margin-left: 8px
    `;
const UserName = styled.h5`
  margin: 0;
`;
const UserDesc = styled.h6`
  margin: 0;
`;
const QText = styled.h3``;
const CommentCont = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;
const InputComment = styled.input`
  padding: 0;
  outline: none;
  border-width: 0;
  border-bottom: 2px solid black;
  width: 70%;
`;
const Comment = styled.button`
  border-width: 0;
  border-radius: 5px;
  background-color: red;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div``;
const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CommentList = styled.div`
  display: flex;
  align-items: center;
`;
const CommentText = styled.h6`
  margin: 0;
`;
