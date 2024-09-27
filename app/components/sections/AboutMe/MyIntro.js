'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MyIntro() {
  const [text, setText] = useState('');
  const fullText = `My Name is EDWARD ODHIAMBO, I am a Software Engineer "Code My Escape"

Full Stack Developer specializing in React, Next.js, and Rails. Experienced in multinational teams with strong communication skills.
Passionate about learning new technologies. Married, father of 3.
I've developed extensive knowledge in:

-> Front-End: JavaScript, React, Redux, JQuery, HTML5, CSS3, Bootstrap, Tailwind, Semantic UI, Material UI
-> Back-End: Ruby on Rails, PostgreSQL
-> Tools & Methods: Git, Github, Heroku, Netlify, Mobile Development, Xcode, TDD, Chrome Dev Tools
-> Professional: Remote Pair-Programming, Teamwork, Mentoring.
`;

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 20); // Adjust typing speed here

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="w-[60%] mx-auto" style={{ fontFamily: "'Playwrite NG Modern', sans-serif" }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <pre className="whitespace-pre-wrap text-green-500 bg-black p-4 rounded-lg overflow-hidden text-sm leading-relaxed">
        {text}
      </pre>
    </motion.div>
    </div>
  );
}
