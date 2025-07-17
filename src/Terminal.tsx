import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";

 const C = {
      reset: "\x1b[0m",
      green: "\x1b[32m",
      cyan: "\x1b[36m",
      yellow: "\x1b[33m",
      red: "\x1b[31m",
    };
const TerminalComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = new Terminal({ cursorBlink: true });
    const fit = new FitAddon();
    term.loadAddon(fit);
    term.open(containerRef.current!);
    fit.fit();

    const commands = {
      help: `${C.green}Commands:${C.reset} help, about, clear`,
      about: `${C.cyan}I'm a React/TS developer.${C.reset}`,
      abo: "I'm a React/TS developer.",
      clear: "__CLEAR__",
    };

    let input = "";
    let history: string[] = [];
    let histIdx = -1;

    const prompt = () => term.write(`${C.red}\r\nabdelouahab@portfolio$> ${C.reset}`);
    term.writeln("Welcome To My Portflio! Type help for more info");
    prompt();

    term.onData((data) => {
      if (data === "\r") { // Enter
        term.write("\r\n");
        const cmd = (input.trim()).toLowerCase();
        if (cmd) history.push(cmd);
        histIdx = -1;
        const output = commands[cmd] ?? `Unknown: ${cmd}`;
        if (output === "__CLEAR__") term.clear();
        else term.writeln(output);
        input = "";
        prompt();
      } else if (data === "\u007f") { // Backspace
        if (input) {
          input = input.slice(0, -1);
          term.write("\b \b");
        }
      } else if (data === "\t") { // Tab
        const matches = Object.keys(commands).filter(c => c.startsWith(input));
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

  return <div ref={containerRef} />;
};
export default TerminalComponent;