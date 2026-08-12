import React, {useEffect,useMemo,useRef,useState} from "react";
import {createRoot} from "react-dom/client";
import {ChevronDown, ChevronLeft, Clock3, Heart, ListMusic, Menu, Music2, Pause, Play, Repeat2, Search, Shuffle, SkipBack, SkipForward, Volume2, X} from "lucide-react";
import {songs, sourceEntryCount} from "./catalogue";
import "./styles.css";

const playlistMeta = [
 {name:"Focus at Work", icon:"◉", desc:"Gentle classics for steady background listening"},
 {name:"Morning Energy", icon:"ϟ", desc:"Bright, lively songs to start the day"},
 {name:"Deep Focus", icon:"◌", desc:"Reflective melodies for quiet concentration"},
 {name:"Motivation", icon:"★", desc:"Uplifting, devotional and inspirational selections"},
 {name:"Relax & Unwind", icon:"◡", desc:"Rain, romance and timeless evening melodies"},
 {name:"Friday Vibes", icon:"✦", desc:"Playful, lively and celebratory favourites"},
 {name:"Marathi Classics", icon:"अ", desc:"Marathi songs from the supplied master list"},
 {name:"Bollywood Favourites", icon:"♪", desc:"The complete supplied Hindi/Marathi catalogue"}
];

function App(){
 const audio=useRef(null);
 const [current,setCurrent]=useState(0), [playing,setPlaying]=useState(false), [progress,setProgress]=useState(0);
 const [volume,setVolume]=useState(.75), [shuffle,setShuffle]=useState(false), [repeat,setRepeat]=useState(false);
 const [liked,setLiked]=useState(false), [open,setOpen]=useState(false), [playlist,setPlaylist]=useState("Bollywood Favourites");
 const [query,setQuery]=useState(""), [time,setTime]=useState(new Date()), [notice,setNotice]=useState("");
 const song=songs[current];

 useEffect(()=>{const t=setInterval(()=>setTime(new Date()),1000);return()=>clearInterval(t)},[]);
 useEffect(()=>{if(audio.current) audio.current.volume=volume},[volume]);
 useEffect(()=>{ if(!audio.current)return; audio.current.pause(); audio.current.src=`/audio/${slug(song.title)}.mp3`; setProgress(0); setPlaying(false); },[current]);

 function slug(s){return s.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");}
 const filtered=useMemo(()=>{
   const q=query.trim().toLowerCase();
   return songs.filter(s=>{
     const inList=playlist==="Bollywood Favourites" ? true : playlist==="Marathi Classics" ? false : s.playlists.includes(playlist);
     return inList && (!q || s.title.toLowerCase().includes(q));
   });
 },[playlist,query]);

 function selectSong(s){
   const i=songs.findIndex(x=>x.id===s.id); setCurrent(i); setPlaying(true);
   setTimeout(()=>audio.current?.play().catch(()=>{setPlaying(false);setNotice("The song is in the catalogue, but its MP3 file has not been added yet.")}),80);
 }
 function togglePlay(){
   if(!audio.current)return;
   if(playing){audio.current.pause();setPlaying(false);return;}
   audio.current.play().then(()=>setPlaying(true)).catch(()=>setNotice("Add the authorized MP3 for this song to public/audio to enable playback."));
 }
 function next(){
   if(shuffle){let n=Math.floor(Math.random()*songs.length);if(songs.length>1&&n===current)n=(n+1)%songs.length;setCurrent(n);}
   else setCurrent((current+1)%songs.length);
 }
 function previous(){setCurrent((current-1+songs.length)%songs.length)}
 function seek(e){const v=Number(e.target.value);setProgress(v);if(audio.current?.duration)audio.current.currentTime=v/100*audio.current.duration}
 function fmt(s){if(!Number.isFinite(s))return "00:00";return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(Math.floor(s%60)).padStart(2,"0")}`}
 const now=time.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
 return <main className="app">
  <div className="backdrop"/><div className="shade"/>
  <header className="topbar">
   <div className="clock">{now}</div>
   <div className="collection-status"><span/> Lata Mangeshkar · {songs.length} songs</div>
   <button className="icon-btn" onClick={()=>setOpen(true)}><ListMusic size={18}/></button>
  </header>

  <section className="hero">
   <div className="brand-lockup">
    <img src="/assets/acg-logo.svg" alt="ACG logo"/>
    <span>WORLD</span>
   </div>
   <div className="eyebrow">ACG EMPLOYEE MUSIC LOUNGE</div>
   <h1>WORK. LISTEN. <em>INSPIRE.</em></h1>
   <p className="collection-title">The Lata Mangeshkar Collection</p>
   <p className="quote">A timeless soundtrack for every moment at ACG World.</p>
  </section>

  <button className="browse-pill" onClick={()=>setOpen(true)}><Menu size={17}/> Browse playlists</button>

  <section className="player">
   <div className="track">
    <div className="art"><Music2 size={22}/></div>
    <div className="track-info"><strong>{song.title}</strong><span>Lata Mangeshkar · {song.era}</span></div>
    <button className={liked?"heart liked":"heart"} onClick={()=>setLiked(!liked)}><Heart size={17} fill={liked?"currentColor":"none"}/></button>
   </div>
   <div className="controls">
    <button className={shuffle?"active":""} onClick={()=>setShuffle(!shuffle)}><Shuffle size={16}/></button>
    <button onClick={previous}><SkipBack size={18}/></button>
    <button className="play" onClick={togglePlay}>{playing?<Pause size={20} fill="currentColor"/>:<Play size={20} fill="currentColor"/>}</button>
    <button onClick={next}><SkipForward size={18}/></button>
    <button className={repeat?"active":""} onClick={()=>setRepeat(!repeat)}><Repeat2 size={17}/></button>
   </div>
   <div className="timeline">
    <span>{fmt(audio.current?.currentTime)}</span>
    <input type="range" min="0" max="100" value={progress} onChange={seek}/>
    <span>{audio.current?.duration?fmt(audio.current.duration):"—"}</span>
   </div>
   <div className="volume"><Volume2 size={17}/><input type="range" min="0" max="1" step=".01" value={volume} onChange={e=>setVolume(Number(e.target.value))}/></div>
  </section>

  <div className="visualizer">{Array.from({length:32}).map((_,i)=><i key={i} style={{animationDelay:`${i*35}ms`}}/>)}</div>
  {notice && <div className="toast">{notice}<button onClick={()=>setNotice("")}><X size={14}/></button></div>}

  <audio ref={audio}
   onTimeUpdate={()=>audio.current?.duration&&setProgress(audio.current.currentTime/audio.current.duration*100)}
   onEnded={()=>repeat?(audio.current.currentTime=0,audio.current.play()):next()}
   onError={()=>setPlaying(false)}
  />

  {open && <div className="overlay" onClick={()=>setOpen(false)}>
   <div className="library" onClick={e=>e.stopPropagation()}>
    <div className="library-head">
      <div><div className="eyebrow">ACG SOUND · LATA MANGESHKAR</div><h2>Choose your soundtrack</h2><p>{songs.length} unique songs from {sourceEntryCount} supplied list entries</p></div>
      <button className="close" onClick={()=>setOpen(false)}><X/></button>
    </div>
    <div className="playlist-tabs">
      {playlistMeta.map(p=><button key={p.name} className={playlist===p.name?"selected":""} onClick={()=>{setPlaylist(p.name);setQuery("")}}><b>{p.icon}</b><span>{p.name}</span></button>)}
    </div>
    <div className="library-toolbar">
      <div className="search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search songs..."/></div>
      <span>{playlist==="Marathi Classics"?"No language tag was supplied for individual songs in the source list.":`${filtered.length} songs`}</span>
    </div>
    {playlist==="Marathi Classics" ?
      <div className="empty"><div className="empty-icon">अ</div><h3>No songs assigned here</h3><p>The supplied list is headed “Hindi + Marathi”, but it does not identify the language of individual songs. I have not invented Marathi classifications.</p></div>
      :
      <div className="song-list">
       {filtered.map((s,i)=><button className="song-row" key={s.id} onClick={()=>selectSong(s)}>
        <span className="song-no">{String(i+1).padStart(2,"0")}</span>
        <span className="song-name"><strong>{s.title}</strong><small>Lata Mangeshkar · {s.era}</small></span>
        <span className="song-tags">{s.playlists.slice(0,2).map(c=><em key={c}>{c}</em>)}</span>
        <Play size={15}/>
       </button>)}
      </div>
    }
   </div>
  </div>}
 </main>
}
createRoot(document.getElementById("root")).render(<App/>);
