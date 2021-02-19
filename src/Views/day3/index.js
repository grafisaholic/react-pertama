/*
LEARN SIDE EFFECT
*/

import React, {useState, useEffect} from 'react';

const defaultNews = {
  status: 'ok',
  totalResult: 0,
  articles: []
};
const endpoint = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=d4eef434bb2848cca69d497ef7eb2b42';

function NewsFeed() {
  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isRefresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setNews(defaultNews);
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      // error handling
      try {
        let respon = await fetch(`${endpoint}&page=${page}`)
        let result = await respon.json();

        setNews(current => {
          return (
            {
              ...result,
              articles: [...current.articles, ...result.articles],
              totalResult: result.totalResults,
              status: result.status
            }
          )
        });
        
        if (result.status != 'ok') throw new Error('error');
      } catch (error) {
        setError(true);
      };

      setLoading(false);
    };

    fetchData();
  }, [page, isRefresh]);

  return (
    <div className="container">
      <h3> Top Headline News</h3>
      {isLoading && <p> Loading ...</p>}
      {isError && <p> Mohon maaf error !</p>}
      <ol>
        {news.articles.map((r, i) => (
          <li key={i}>{r.title}</li>
        ))}
      </ol>
      {
        news.articles.length < parseInt(news.totalResult) 
        ? ( <button 
              disabled={isLoading}
              onClick={ () => setPage(c => c + 1)}
            >Load More</button> ) 
        : null
      }
      
      {' '}<button onClick={handleRefresh} disabled={isLoading}> Refresh</button>
    </div>
  )
}

export default NewsFeed;