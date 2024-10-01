import { useEffect, useState } from "react";
import './00_question.css'; // CSS 파일 import

export const News = () => {
  const API_KEY = "b2f485cd2f274a5ba62325da31653420"; // 실제 API 키로 교체

  const [articles, setArticles] = useState([]); // 여러 기사 저장할 상태
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 뉴스 항목 인덱스 상태

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("에러 발생!");
        }

        const data = await response.json();
        setArticles(data.articles); 
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [API_KEY]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="news-container">
      {articles.length > 0 ? (
        <NewsItem 
          title={articles[currentIndex].title}
          description={articles[currentIndex].description}
          url={articles[currentIndex].url}
          urlToImage={articles[currentIndex].urlToImage}
        />
      ) : (
        <h2>뉴스 기사가 없습니다.</h2>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={articles.length === 0}>
          이전
        </button>
        <button onClick={handleNext} disabled={articles.length === 0}>
          다음
        </button>
      </div>
    </div>
  );
};

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-item">
      <ImageBox urlImg={urlToImage} />
      <h1>{title}</h1>
      <h3>{description}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        전체 기사 읽기
      </a>
    </div>
  );
};

const ImageBox = ({ urlImg }) => {
  return !!urlImg ? (
    <img src={urlImg} alt="뉴스 이미지" className="news-image" /> 
  ) : (
    <h1>이미지를 가져올 수 없습니다.</h1>
  );
};
