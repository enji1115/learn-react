import React from "react";

const Card = ({ imgUrl, itemName, onButtonClick }) => {
  return (
    <div
      className="card"
      style={{
        width: "100%",
        borderRadius: "1em",
        border: "solid 1px #000",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Props 미설정 */}
      {/*
      <img
        src="https://t3.ftcdn.net/jpg/02/74/06/48/360_F_274064877_Tuq84kGOn5nhyIJeUFTUSvXaSeedAOTT.jpg"
        alt="웰시코기 이미지"
        style={{ display: "block", maxWidth: "100%" }}
      />
      <p style={{ margin: "1em" }}>웰시코기 이미지 1</p>
      */}

      {/* Props 설정 */}
      <img
        src={imgUrl}
        alt={itemName + " 이미지"}
        style={{ display: "block", width: "100%" }}
      />
      <p style={{ margin: "1em" }}>{itemName}</p>
      <button
        type="button"
        onClick={() => onButtonClick(itemName)}
        style={{ display: "block", margin: "1em auto 1.5em" }}
      >
        소개 페이지로 가기
      </button>
    </div>
  );
};

export default Card;
