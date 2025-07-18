import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { WebLinksAddon } from "@xterm/addon-web-links";
import "@xterm/xterm/css/xterm.css";

 const C = {
      reset: "\x1b[0m",
      green: "\x1b[32m",
      cyan: "\x1b[36m",
      yellow: "\x1b[33m",
      red: "\x1b[31m",
    };
const underline = "\x1b[4m";
const reset = "\x1b[0m";
const TerminalComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      });
    const fit = new FitAddon();
    const webLinksAddon = new WebLinksAddon();
    term.loadAddon(fit);
    term.loadAddon(webLinksAddon);
    term.open(containerRef.current!);
    fit.fit();

    const commands = {
      help: `\n${C.green}Available Commands:${C.reset}
                      \r\n${C.red}help${C.reset} \t\t ${C.yellow}- List The Available Commands.${C.reset}
                      \r\n${C.red}about${C.reset} \t\t ${C.yellow}- Learn more about me.${C.reset}
                      \r\n${C.red}projects${C.reset} \t ${C.yellow}- View a list of projects I've worked on.${C.reset}
                      \r\n${C.red}skills${C.reset} \t\t ${C.yellow}- See the tools and languages I specialize in.${C.reset}
                      \r\n${C.red}contact${C.reset} \t ${C.yellow}- Find out how to get in touch with me.${C.reset}
                      \r\n${C.red}clear${C.reset} \t\t ${C.yellow}- Clear The Terminal.${C.reset}`,
      about: `\nHi, I'm ${C.red}AOURAR ABDELOUAHAB${C.reset}, Second Year Student At ${C.green}ENSIA${C.reset},${C.cyan} Graphic Designer${C.reset} And ${C.cyan}Web Developer${C.reset}.\r\nI enjoy crafting interactive user interfaces and building ${C.green}fast${C.reset}, ${C.green}accessible${C.reset}, and ${C.green}maintainable${C.reset} web applications.\r\nI focus on writing ${C.yellow}clean${C.reset}, ${C.yellow}efficient code${C.reset} and continuously learning ${C.yellow}new tools${C.reset} and ${C.yellow}best practices${C.reset}.\r\nWhen I'm not coding, you'll find me exploring ${C.cyan}new tech trends${C.reset}, or improving ${C.cyan}my personal portfolio.${C.reset}`,
      projects: `\n${C.red}RedVolt Gear${C.reset} \t\t\t - RedVolt Gear is a sleek, animated ${C.yellow}React-based e-commerce website${C.reset} built to showcase and sell high-quality ${C.yellow}laptop accessories${C.reset}.\r\n\n${C.red}Tic Tac Toe GUI${C.reset} \t\t - Tic Tac Toe ${C.yellow}Game${C.reset} implemented using ${C.yellow}C++${C.reset} with a ${C.yellow}graphical user interface${C.reset} using the library ${C.yellow}SDL2${C.reset}, Co-Created with TRARI MOHAMMED EL MEHDI (${C.red}His Github:${C.reset}${C.green}${underline}https://github.com/arialCoding${reset}${C.reset}).\r\n\n${C.red}Portfolio (Terminal Theme)${C.reset} \t - A developer portfolio built using ${C.yellow}React${C.reset}, ${C.yellow}TypeScript${C.reset}, and ${C.yellow}xterm.js${C.reset}.Styled with ${C.yellow}TailwindCSS${C.reset}, this terminal interface mimics a command-line experience for showcasing my work and skills in a fun, interactive way.
      \r\n${C.cyan}RedVolt Gear Repo${C.reset}\t ${C.green}${underline}https://github.com/Abdelouahab-aourar/RedVolt-Gear${reset}${C.reset}
      \r\n${C.cyan}Tic Tac Toe Repo${C.reset}\t ${C.green}${underline}https://github.com/Abdelouahab-aourar/TicTacToeGui${reset}${C.reset}
      \r\n${C.cyan}My Portfolio Repo${C.reset}\t ${C.green}${underline}https://github.com/Abdelouahab-aourar/My-Portfolio${reset}${C.reset}`,
      skills: `\n${C.green}Here are the tools and technologies I work with:${C.reset}\n
\r${C.cyan}Languages:${C.reset}\n
\r${C.yellow}- C++${C.reset}
\r${C.yellow}- TypeScript${C.reset}
\r${C.yellow}- JavaScript${C.reset}
\r${C.yellow}- HTML5 & CSS3${C.reset}
\r${C.yellow}- Latex${C.reset}\n
\r${C.cyan}Frontend Libraries & Frameworks:${C.reset}\n
\r${C.yellow}- React${C.reset}
\r${C.yellow}- Tailwind CSS${C.reset}
\r${C.yellow}- Framer Motion${C.reset}
\r${C.yellow}- Swiper${C.reset}
\r${C.yellow}- xterm.js${C.reset}
\r\n${C.cyan}Backend & Database:${C.reset}\n
\r${C.yellow}- Node.js${C.reset}
\r${C.yellow}- Express${C.reset}
\r${C.yellow}- MongoDB${C.reset}
\r${C.yellow}- MySQL${C.reset}
\r\n${C.cyan}Tools & Platforms:${C.reset}\n
\r${C.yellow}- Git & GitHub${C.reset}
\r${C.yellow}- LINUX${C.reset}
\r${C.yellow}- Vercel & Netlify${C.reset}
\r\n${C.cyan}Graphic Design:${C.reset}\n
\r${C.yellow}- Figma${C.reset}
\r${C.yellow}- Adobe Photoshop${C.reset}
\r${C.yellow}- Adobe Illustrator${C.reset}`,
      contact: `\n${C.green}Feel free to reach out! Here’s how you can contact me:${C.reset}\n

\r${C.cyan}${underline}Email${reset}${C.reset}\t\t${C.yellow}${underline}abdelouahab.aourar@gmail.com${reset}${C.reset}
\r${C.cyan}${underline}GitHub${reset}${C.reset}\t\t${C.yellow}${underline}https://github.com/Abdelouahab-aourar${reset}${C.reset}
\r${C.cyan}${underline}LinkedIn${reset}${C.reset}\t${C.yellow}${underline}https://www.linkedin.com/in/aourar-abdelouahab${reset}${C.reset}
\r${C.cyan}${underline}Instagram${reset}${C.reset}\t${C.yellow}${underline}https://www.instagram.com/abdelouahab_aourar/profilecard/?igsh=NnpmNGJ5b3M0YXhi${reset}${C.reset}\n
\rType ${C.red}about${C.reset} or ${C.red}projects${C.reset} to learn more about what I do.`,
      clear: "__CLEAR__",
    };
    let input = "";
    let history: string[] = [];
    let histIdx = -1;

    const prompt = () => term.write(`${C.red}\r\nabdelouahab${C.reset}${C.yellow}@${C.reset}${C.cyan}portfolio${C.reset}${C.green}$> ${C.reset}`);
    term.writeln(`Welcome To My Portflio! Type ${C.red}help${C.reset} for more information`);
    prompt();

    term.onData((data) => {
      if (data === "\r") { // Enter
        term.write("\r\n");
        const cmd = (input.trim()).toLowerCase();
        if (cmd){
          history.push(cmd);
          histIdx = -1;
          const output = commands[cmd] ?? `Unknown: ${cmd}`;
          if (output === "__CLEAR__") term.clear();
          else term.writeln(output);
        }
        input = "";
        prompt();
      } else if (data === "\u007f") { // Backspace
        if (input) {
          input = input.slice(0, -1);
          term.write("\b \b");
        }
      } else if (data === "\t") { // Tab
        const matches = Object.keys(commands).filter(c => c.startsWith(input.toLowerCase()));
        if (matches.length === 1) {
          const rest = matches[0].slice(input.length);
          input = matches[0];
          term.write(rest);
        } else if (matches.length > 1) {
          term.write("\r\n" + matches.join("  "));
          prompt();
          term.write(input);
        }
      } else if (data === "\u001b[A") { // Arrow Up
        if (history.length) {
          histIdx = Math.min(histIdx + 1, history.length - 1);
          clearInput();
          input = history[history.length - 1 - histIdx];
          term.write(input);
        }
      } else if (data === "\u001b[B") { // Arrow Down
        if (histIdx > 0) {
          histIdx--;
          clearInput();
          input = history[history.length - 1 - histIdx];
          term.write(input);
        } else {
          clearInput();
          input = "";
          histIdx = -1;
        }
      } else {
        input += data;
        term.write(data);
      }
    });

    const clearInput = () => {
      const erase = "\b \b".repeat(input.length);
      term.write(erase);
    };

    window.addEventListener("resize", fit.fit);
    return () => {
      window.removeEventListener("resize", fit.fit);
      term.dispose();
    };
  }, []);

  return <div ref={containerRef} className="h-full w-[98%]"/>;
};
export default TerminalComponent;