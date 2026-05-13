import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Gamepad2, GraduationCap, MapPin, Signal, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-bg-main/80 backdrop-blur-xl border-b border-border-subtle"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center p-2">
           <div className="w-full h-full border-2 border-black rotate-45" />
        </div>
        <span className="font-display font-black tracking-tighter text-xl italic">OGAH RUGAI<span className="text-brand">.</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] text-[#666]">
        <a href="#trading" className="hover:text-brand transition-colors uppercase">Trading</a>
        <a href="#education" className="hover:text-brand transition-colors uppercase">Edukasi</a>
        <a href="#gaming" className="hover:text-brand transition-colors uppercase">Gaming</a>
      </div>

      <a href="#trading" className="btn-neon !py-2 !px-4">Join Community</a>
    </motion.nav>
  );
};

const HERO_IMAGES = [
  "https://i.ibb.co.com/rG53BYLw/2ee80e31-544d-4924-850d-bf8178d3bdb2.png",
  "https://i.ibb.co.com/tTNL5tnz/aifaceswap-bb776283f08fbf1937bc183eb2baff66.jpg"
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pt-20 overflow-hidden">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-24">
        <div className="rotate-[-90deg] whitespace-nowrap mono-tag mb-12">ESTABLISHED MMXXIV</div>
        <div className="w-px h-32 bg-border-subtle" />
        <div className="rotate-[-90deg] whitespace-nowrap mono-tag text-brand font-bold">KEMAYORAN PRIDE</div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <span className="mono-tag text-brand mb-6 block">// ANTI BONCOS MOVEMENT // GEN-Z CIRCLE</span>
          <h1 className="heading-massive mb-8">
            OGAH RUGAI <br />
            <span className="text-brand italic underline decoration-4 underline-offset-8">CORPORATION.</span>
          </h1>
          <p className="text-xl text-[#AAA] font-light mb-12 max-w-2xl leading-relaxed">
            Wadah pemuda positif melek financial market tapi tetep cuan. Kita bedah IHSG jam 9, <span className="text-white font-medium">push rank jam 8 malem.</span> Bukan joki, emang hoki tapi pake strategi.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-6 border-t border-border-subtle">
            <div className="flex flex-col">
              <span className="mono-tag mb-1">Orbit Point</span>
              <span className="text-sm font-medium">Utan Panjang, Kemayoran</span>
            </div>
            <div className="w-px h-10 bg-border-subtle mx-4 hidden sm:block" />
            <div className="flex flex-col">
              <span className="mono-tag mb-1">Current Status</span>
              <span className="text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                Live Trading
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="sophisticated-card !p-0 overflow-hidden mb-4 shadow-2xl relative group aspect-[4/5] bg-bg-card">
            <AnimatePresence mode="wait">
              <motion.img 
                key={index}
                src={HERO_IMAGES[index]} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                alt="OR Corp Squad" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {HERO_IMAGES.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === i ? "bg-brand w-6" : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-brand pl-4">
             <span className="mono-tag text-brand text-[8px]">// CORE SQUAD briefed</span>
             <p className="text-xs font-bold leading-tight uppercase italic text-[#888]">Briefing tipis-tipis bareng tim inti OGAH RUGAI CORP sebelum bursa open.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const TradingSection = () => {
  return (
    <section id="trading" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12 mb-12"
        >
           <h2 className="heading-massive lg:text-8xl">9 TO 4 ATTITUDE.</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 sophisticated-card !p-10 flex flex-col justify-between min-h-[400px]"
        >
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="px-3 py-1 bg-brand text-black text-[10px] font-bold rounded-full">MARKET HOURS</span>
              <span className="text-xs font-mono text-[#444]">09.00 - 16.00 WIB</span>
            </div>
            <h3 className="text-3xl font-bold mb-6 italic tracking-tight">FOKUS IHSG & CRYPTO</h3>
            <p className="text-lg text-[#AAA] leading-relaxed mb-10">
              Pantau chart bukan cuma hobi, tapi jalan ninja. Kita bedah emiten blue chip sampe koin micin biar portofolio makin ijo royo-royo. Disiplin adalah kunci cuan maksimal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
             {["$BBCA", "$TLKM", "$BMRI", "$BTC", "$SOL"].map((t) => (
               <div key={t} className="bg-[#1A1A1A] px-4 py-2 rounded-lg border border-border-active text-xs font-bold text-brand uppercase tracking-wider">{t}</div>
             ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 h-full"
        >
          <div className="sophisticated-card h-full flex flex-col items-center justify-center text-center p-12 bg-brand text-black border-none">
            <TrendingUp size={64} strokeWidth={2.5} className="mb-6" />
            <h4 className="text-2xl font-black italic uppercase leading-none mb-4">No Loss <br /> Only Profit</h4>
            <p className="text-sm font-bold opacity-70">Disiplin money management adalah kunci peradaban kita.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const EducationSection = () => {
  const articles = [
    { title: "Psikologi Anti FOMO", desc: "Jangan kemakan hypetrain, tetap tenang meski market gojang ganjing." },
    { title: "Bandarmologi 101", desc: "Cara baca pergerakan big money di balik layar IHSG." },
    { title: "Risk Management", desc: "Seni menjaga portofolio biar gak meledak di tengah jalan." },
  ];

  return (
    <section id="education" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="mono-tag text-brand mb-4 block">// LEARNING CENTER</span>
          <h2 className="heading-massive mb-8 text-4xl leading-tight">EDUKASI <br /> TRADING<span className="text-brand">.</span></h2>
          <p className="text-[#888] italic mb-10 leading-relaxed">
            Pinter itu pilihan, tapi fomo kelamaan itu beban. Upgrade skill biar jari gak gatel asal entry tanpa alasan.
          </p>
          <GraduationCap size={120} className="text-[#111] opacity-50" />
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-4">
          {articles.map((art, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="sophisticated-card flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl font-display font-black text-[#222] group-hover:text-brand transition-colors italic">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-brand transition-colors uppercase">{art.title}</h3>
                  <p className="text-sm text-[#666]">{art.desc}</p>
                </div>
              </div>
              <ArrowUpRight className="text-[#333] group-hover:text-brand transition-all mt-4 md:mt-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GamingSection = () => {
  return (
    <section id="gaming" className="py-32 bg-[#0C0C0C] border-y border-border-subtle relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 blur-[120px]" />
      
      <div className="px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-brand mb-6 mono-tag font-bold">
            <Gamepad2 size={14} /> // NIGHT SESSION ACTIVE
          </div>
          <h2 className="heading-massive mb-8 italic">
            MABAR <br /><span className="text-white">TIME.</span>
          </h2>
          <p className="text-zinc-500 mb-10 leading-relaxed italic border-l-2 border-brand pl-6 text-left">
            "Setelah cuan (atau boncos) di bursa, saatnya push rank di lobi. Karena kesehatan mental butuh victory di Land of Dawn."
          </p>
          
          <div className="bg-[#111] p-8 border border-border-subtle rounded-2xl flex flex-col gap-8 mx-auto text-left">
             <div className="flex justify-between items-center">
               <span className="text-[10px] font-bold bg-white text-black px-3 py-1 rounded">SCHEDULE</span>
               <span className="text-xs font-mono text-white">20.00 - 23.00</span>
             </div>
             <div className="space-y-1">
                <p className="text-xs font-bold mono-tag text-[#444] mb-2 uppercase">Preferred Titles</p>
                <p className="text-xl font-black italic tracking-tight italic uppercase">MLBB / VALO / EA FC</p>
             </div>
             <button className="btn-neon w-full">Gaskeun Sekarang!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 px-8 bg-bg-main border-t border-border-subtle">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="sophisticated-card !p-0 overflow-hidden shadow-2xl border-brand/20">
              <img 
                src="https://i.ibb.co.com/YrtC7vP/2c042adc-5359-465b-8b65-bc61296b4b1f.png" 
                alt="OR Corp Basecamp" 
                className="w-full h-auto object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-6 font-display">
            <span className="mono-tag text-brand mb-4 block">// OUR BASECAMP</span>
            <h3 className="text-4xl font-black italic tracking-tighter mb-6 uppercase">TEMPAT TRADING & MABAR<span className="text-brand">.</span></h3>
            <p className="text-[#888] italic leading-relaxed text-lg border-l-2 border-brand pl-6">
              Inilah markas besar OGAH RUGAI CORP. Di sini kreativitas dan strategi cuan menyatu. 
              Dari jam 9 pagi kita fokus pantau chart IHSG, dan pas jam 8 malem tiba, tempat ini berubah 
              jadi arena tempur buat mabar bareng squad.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-display font-black italic mb-4">OGAH RUGAI <span className="text-brand">CORP.</span></h3>
            <p className="text-xs mono-tag max-w-xs leading-relaxed font-bold">// NO LOSS ONLY PROFIT // NO LOSS ONLY PROFIT //</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="mono-tag">Orbit Office</span>
            <p className="text-sm text-[#888] leading-snug">
              Jln N No. 133 RT 5 / RW 4<br/>
              Utan Panjang, Kemayoran, Jakpus
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-10 w-full md:w-auto">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="mono-tag mb-1">Instagram</span>
              <a href="#" className="font-bold text-sm hover:text-brand transition-colors underline underline-offset-4">@ogahrugai.corp</a>
            </div>
            <div className="flex flex-col">
              <span className="mono-tag mb-1">Discord</span>
              <a href="#" className="font-bold text-sm hover:text-brand transition-colors underline underline-offset-4">OgahRugai_Official</a>
            </div>
          </div>
          
          <div className="pt-10 border-t border-border-subtle w-full md:text-right">
             <p className="text-[10px] font-mono text-[#333] font-bold uppercase tracking-[0.2em]">
               COPYRIGHT © 2026 — ALL RIGHTS RESERVED BY HOKI <br />
               MADE WITH DISCIPLINE IN KEMAYORAN.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
