import React from "react";

const Card = ({ imgUrl, itemName }) => {
  return (
    <div
      className="card"
      style={{
        width: "100%",
        "border-radius": "1em",
        border: "solid 1px #000",
        overflow: "hidden",
      }}
    >
      {/* Props 미설정 */}
      {/*
      <img style={{"display":"block", "maxWidth":"100%"}} src="https://t3.ftcdn.net/jpg/02/74/06/48/360_F_274064877_Tuq84kGOn5nhyIJeUFTUSvXaSeedAOTT.jpg" alt="웰시코기 이미지" />
      <p style={{"margin":"1em"}}>웰시코기 이미지 1</p>
      */}

      {/* Props 설정 */}
      <img
        style={{ display: "block", width: "100%" }}
        src={imgUrl}
        alt={itemName + " 이미지"}
      />
      <p style={{ margin: "1em" }}>{itemName + " 이미지"}</p>
    </div>
  );
};

export default Card;
