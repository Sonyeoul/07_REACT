import { useState } from "react";

// 이미지 URL을 설정하는 컴포넌트
export const Box = ({ setImgUrl }) => {
  const onClickHandler = () => {
    console.log("Button clicked!");
    fetch("https://random.dog/woof.json")
      .then((r) => r.json())
      .then((result) => {
        console.log("API 응답:", result); // API 응답 확인
        const imageUrl = result.url; // URL을 변수에 저장
        console.log("이미지 URL:", imageUrl); // URL 로그 출력
        if (imageUrl) {
          setImgUrl(imageUrl); // URL이 존재할 경우만 설정
        } else {
          console.error("Invalid API response: URL이 없습니다."); // URL이 없을 때 로그
        }
      })
      .catch((error) => {
        console.error("Error fetching the image:", error);
      });
  };

  return (
    <>
      <button onClick={onClickHandler}>꿀릭~</button>
    </>
  );
};

// 이미지를 렌더링하는 컴포넌트
const ImageBox = ({ imgUrl }) => {
  console.log("imgUrl:", imgUrl);
  return !!imgUrl ? (
    <img src={imgUrl} alt="랜덤 이미지" style={{ maxWidth: "400px" }} />
  ) : (
    <h1>텅</h1>
  );
};

// 상위 컴포넌트
export const EmojiContainer = () => {
  const [imgUrl, setImgUrl] = useState('');

  console.log("현재 imgUrl 상태:", imgUrl);
  return (
    <>
      <Box setImgUrl={setImgUrl} />
      <br />
      <ImageBox imgUrl={imgUrl} />
    </>
  );
};
