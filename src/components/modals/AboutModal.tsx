import { useState, useEffect } from "react";

const AboutModal = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const notepadContent = `About Me
=========================================

Hi, I'm Duong Nguyen 👋

A passionate Full-Stack Developer specializing in the MERN stack.
I love building modern web applications that solve real-world problems.

Skills & Expertise:
-------------------
- Frontend: React, TypeScript, Tailwind CSS, GSAP
- Backend: Node.js, Express.js, MongoDB
- Tools: Git, GitHub, VS Code, Vite
- Architecture: MVC, RESTful APIs, Clean Code

What I Do:
----------
I build responsive, user-friendly web applications with a focus on:
- Clean, maintainable code
- Scalable architecture
- Modern UI/UX design
- Performance optimization

Currently Learning:
-------------------
- Three.js & WebGL
- Next.js & Server Components
- Docker & DevOps
- Advanced TypeScript patterns

Education:
----------
Computer Science Student
Passionate about continuous learning and staying updated
with the latest web technologies.

Hobbies & Interests:
--------------------
- Open Source Contributions
- Technical Writing
- Basketball 🏀
- Gaming & Design

Contact:
--------
📧 Email: your.email@example.com
🐙 GitHub: github.com/yourusername
💼 LinkedIn: linkedin.com/in/yourusername
🌐 Website: duongng01.dev

---
"Code is like humor. When you have to explain it, it's bad." 
- Cory House

Last Updated: ${currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
`;

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Notepad Content */}
      <div className="flex-1 overflow-y-auto bg-white p-6">
        <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
          {notepadContent}
        </pre>
      </div>

      {/* Notepad Status Bar */}
      <div className="bg-gray-100 border-t border-gray-200 px-4 py-1 flex items-center justify-between text-xs text-gray-600">
        <span className="font-ubuntu">Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>Windows (CRLF)</span>
        <span>{currentTime.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default AboutModal;
