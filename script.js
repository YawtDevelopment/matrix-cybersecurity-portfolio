// Interactive features for Hannah's portfolio. This is a simulated terminal,
// not a real shell, and it does not execute system commands.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";
    });
  }

  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");

  if (!terminalForm || !terminalInput || !terminalOutput) return;

  const commands = {
    help: () => 'Available commands: <code>help</code>, <code>about</code>, <code>projects</code>, <code>skills</code>, <code>contact</code>, <code>clear</code>.',
    about: () => 'I\'m Hannah Yawt, an Information Technology student concentrating in Cybersecurity. <a href="about.html">Read my bio →</a>',
    projects: () => 'Explore my current and future work on the <a href="projects.html">Projects page →</a>',
    skills: () => 'Current focus: HTML, CSS, responsive layouts, IT foundations, and cybersecurity fundamentals. This list will grow as I learn.',
    contact: () => 'Find contact options on the <a href="contact.html">Contact page →</a>',
    whoami: () => 'guest — visitor to Hannah Yawt\'s cybersecurity portfolio.',
    clear: () => null
  };

  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const rawCommand = terminalInput.value.trim();
    if (!rawCommand) return;

    const command = rawCommand.toLowerCase().split(/\s+/)[0];
    const typedLine = document.createElement("p");
    const prompt = document.createElement("span");
    prompt.className = "terminal-user";
    prompt.textContent = "guest@hannah:~$ ";
    const typedText = document.createElement("span");
    typedText.textContent = rawCommand;
    typedLine.append(prompt, typedText);
    terminalOutput.appendChild(typedLine);

    if (command === "clear") {
      terminalOutput.innerHTML = "";
    } else {
      const response = commands[command];
      const outputLine = document.createElement("p");
      if (response) {
        outputLine.innerHTML = response();
      } else {
        outputLine.textContent = `Command not found: ${command}. Type 'help' to see available commands.`;
      }
      terminalOutput.appendChild(outputLine);
    }

    terminalInput.value = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    terminalInput.focus();
  });
});
