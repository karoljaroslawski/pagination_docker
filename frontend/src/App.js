import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [mode, setMode] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetch_all(){
    setMode(0);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    await fetch('/api/' , requestOptions)
      .then(response => response.json())
      .then(data => {setCount(data.count);setResults(data.rows)});
  }
  async function fetch_pages(){
    setMode(1);
    const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      };
      let res = await (await fetch("/api/page?page_num=0" , requestOptions)).json();
      setCount(res.count);
      setResults(res.rows);
      setPage(1);
  }
  async function load_more() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    let res = await (await fetch("/api/page?page_num="+page , requestOptions)).json();
    setCount(res.count);
    setResults(prev => [...prev, ...res.rows]);
    setPage(page+1);
    setLoading(false);
    console.log(mode);
  }
  const handleScroll = () => {
      const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if(docHeight-scrollTop<200 && loading==false && mode==1){
      setLoading(true);
      console.log("Loading"); 
      load_more();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode, loading, page]); 




  return (
    <div>
      <div id="top">
        <button onClick={fetch_all} className="custom_button">Fetch All</button>
        <button onClick={fetch_pages} className="custom_button">Fetch Paginated</button>
      </div>
      <div id="main">
        {results.map((result) => ( 
            <div className="row" key={result.name}><h2>{result.name}</h2><div className="desc_text">{result.description}</div></div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
