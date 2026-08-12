import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ChevronDown, ListMusic, Menu, Music2, Pause, Play, Repeat2,
  Shuffle, SkipBack, SkipForward, Volume2, X, Heart, Clock3
} from "lucide-react";
import "./styles.css";

const songs = [
  { id: 1, title: "Phir Le Aya Dil", artist: "Arijit Singh", duration: "04:45", src: "/audio/phir-le-aya-dil.mp3" },
  { id: 2, title: "Ilahi", artist: "Arijit Singh", duration: "03:48", src: "/audio/ilahi.mp3" },
  { id: 3, title: "Zinda", artist: "Bhaag Milkha Bhaag", duration: "03:31", src: "/audio/zinda.mp3" },
  { id: 4, title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", duration: "05:41", src: "/audio/agar-tum-saath-ho.mp3" },
  { id: 5, title: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali", duration: "07:53", src: "/audio/kun-faya-kun.mp3" },
  { id: 6, title: "Safarnama", artist: "Lucky Ali", duration: "04:11", src: "/audio/safarnama.mp3" },
  { id: 7, title: "Aashayein", artist: "KK", duration: "04:24", src: "/audio/aashayein.mp3" },
  { id: 8, title: "Kar Har Maidaan Fateh", artist: "Shreya Ghoshal, Sukhwinder Singh", duration: "05:11", src: "/audio/kar-har-maidaan-fateh.mp3" }
];

const playlists = [
  { name: "Focus at Work", subtitle: "Instrumental & concentration", count: 25 },
  { name: "Morning Energy", subtitle: "Start the day strong", count: 32 },
  { name: "Deep Focus", subtitle: "Calm music for deep work", count: 28 },
  { name: "Motivation", subtitle: "Keep pushing forward", count: 30 },
  { name: "Relax & Unwind", subtitle: "Breathe between meetings", count: 28 },
  { name: "Friday Vibes", subtitle: "Upbeat end-of-week music", count: 40 },
  { name: "Marathi Classics", subtitle: "Timeless Marathi favourites", count: 36 },
  { name: "Bollywood Favourites", subtitle: "Popular Hindi songs", count: 42 }
];

function App() {
  const audio = useRef(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [liked, setLiked] = useState(false);
  const [listeners, setListeners] = useState(635);
  const [time, setTime] = useState(new Date());
  const [audioReady, setAudioReady] = useState(true);

  const song = songs[current];

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setListeners(v => Math.max(520, Math.min(780, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 6500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!audio.current) return;
    audio.current.src = song.src;
    audio.current.volume = volume;
    setProgress(0);
    setAudioReady(true);
    if (playing) audio.current.play().catch(() => setAudioReady(false));
  }, [current]);

  useEffect(() => {
    if (!audio.current) return;
    audio.current.volume = volume;
  }, [volume]);

  const displayTime = useMemo(() => time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), [time]);

  const togglePlay = () => {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      audio.current.play().then(() => {
        setPlaying(true);
        setAudioReady(true);
      }).catch(() => setAudioReady(false));
    }
  };

  const next = () => {
    if (shuffle) {
      let n = Math.floor(Math.random() * songs.length);
      if (songs.length > 1 && n === current) n = (n + 1) % songs.length;
      setCurrent(n);
    } else {
      setCurrent((current + 1) % songs.length);
    }
  };

  const previous = () => setCurrent((current - 1 + songs.length) % songs.length);

  const seek = (e) => {
    const value = Number(e.target.value);
    setProgress(value);
    if (audio.current?.duration) audio.current.currentTime = (value / 100) * audio.current.duration;
  };

  const formatSeconds = (s) => {
    if (!Number.isFinite(s)) return "00:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <main className="app">
      <div className="backdrop" />
      <div className="shade" />
      <header className="topbar">
        <div className="clock">{displayTime}</div>
        <div className="listeners"><span /> {listeners} employees listening</div>
        <button className="mini-icon" onClick={() => setShowPlaylists(true)} aria-label="Open playlists"><ListMusic size={18}/></button>
      </header>

      <section className="hero">
        <img className="logo" src="/assets/acg-logo.svg" alt="ACG World" />
        <div className="eyebrow">ACG EMPLOYEE MUSIC LOUNGE</div>
        <h1>WORK. LISTEN. <em>INSPIRE.</em></h1>
        <p className="quote">Every great idea needs a soundtrack.</p>
        <p className="motto">INSPECT. INNOVATE. IMPACT.</p>
      </section>

      <button className="playlist-pill" onClick={() => setShowPlaylists(true)}>
        <Menu size={17}/> Browse playlists
      </button>

      <section className="player">
        <div className="track">
          <div className="art"><Music2 size={23}/></div>
          <div className="track-text">
            <strong>{song.title}</strong>
            <span>{song.artist}</span>
          </div>
          <button className={`heart ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}><Heart size={17} fill={liked ? "currentColor" : "none"}/></button>
        </div>

        <div className="controls">
          <button className={shuffle ? "active" : ""} onClick={() => setShuffle(!shuffle)} aria-label="Shuffle"><Shuffle size={17}/></button>
          <button onClick={previous} aria-label="Previous"><SkipBack size={18}/></button>
          <button className="play" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause size={20} fill="currentColor"/> : <Play size={20} fill="currentColor"/>}
          </button>
          <button onClick={next} aria-label="Next"><SkipForward size={18}/></button>
          <button className={repeat ? "active" : ""} onClick={() => setRepeat(!repeat)} aria-label="Repeat"><Repeat2 size={17}/></button>
        </div>

        <div className="timeline">
          <span>{formatSeconds(audio.current?.currentTime)}</span>
          <input type="range" min="0" max="100" value={progress} onChange={seek} />
          <span>{audio.current?.duration ? formatSeconds(audio.current.duration) : song.duration}</span>
        </div>

        <div className="volume">
          <Volume2 size={17}/>
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={e => setVolume(Number(e.target.value))}/>
        </div>

        {!audioReady && <div className="audio-note">Add MP3 files to <code>public/audio</code> to enable local demo playback.</div>}
      </section>

      <div className="visualizer" aria-hidden="true">
        {Array.from({length: 32}).map((_, i) => <i key={i} style={{animationDelay: `${i * 45}ms`}} />)}
      </div>

      <audio
        ref={audio}
        onTimeUpdate={() => {
          if (audio.current?.duration) setProgress((audio.current.currentTime / audio.current.duration) * 100);
        }}
        onEnded={() => repeat ? (audio.current.currentTime = 0, audio.current.play()) : next()}
      />

      {showPlaylists && (
        <div className="overlay" onClick={() => setShowPlaylists(false)}>
          <div className="playlist-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-head">
              <div><span className="eyebrow">ACG SOUND</span><h2>Your playlists</h2></div>
              <button onClick={() => setShowPlaylists(false)}><X/></button>
            </div>
            <div className="playlist-grid">
              {playlists.map((p, i) => (
                <button className="playlist-card" key={p.name} onClick={() => { setCurrent(i % songs.length); setPlaying(true); setShowPlaylists(false); }}>
                  <div className="playlist-number">0{i + 1}</div>
                  <div><strong>{p.name}</strong><span>{p.subtitle}</span><small><Clock3 size={12}/> {p.count} songs</small></div>
                  <ChevronDown className="card-arrow" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
