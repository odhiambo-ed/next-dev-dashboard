'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Ruby', level: 75 },
  { name: 'SQL', level: 70 },
];

function SkillBar({ skill, index }) {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.from(barRef.current, {
      width: 0,
      duration: 1,
      ease: 'power2.out',
      delay: index * 0.2,
    });
  }, [index]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          ref={barRef}
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div>
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
