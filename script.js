const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();

const demos = {
  requirements: {
    task: 'Task: Turn source material into a reviewable requirement set',
    sources: 'Policies, meeting notes, existing requirements',
    agent: 'Requirements analyst workflow',
    review: 'Resolve ambiguity and verify source coverage',
    output: 'Draft requirements with source traceability'
  },
  rules: {
    task: 'Task: Explain how a current business rule actually works',
    sources: 'Process documentation, application code, data model',
    agent: 'Business-rule tracing workflow',
    review: 'Confirm logic, exceptions, and evidence citations',
    output: 'Current-state rule map with unresolved questions'
  },
  impact: {
    task: 'Task: Identify what a proposed change may affect',
    sources: 'Change request, architecture, interfaces, dependencies',
    agent: 'Change-impact analysis workflow',
    review: 'Challenge assumptions and set the decision boundary',
    output: 'Impact brief with affected areas and validation needs'
  },
  incident: {
    task: 'Task: Determine why reported behavior occurred',
    sources: 'Ticket notes, linked records, data, code, configuration',
    agent: 'Incident investigation and evidence workflow',
    review: 'Confirm the classification, confidence, and next step',
    output: 'Triage report with evidence, reasoning, and recommendation'
  }
};

const demoFields = {
  task: document.querySelector('#demo-task'),
  sources: document.querySelector('#demo-sources'),
  agent: document.querySelector('#demo-agent'),
  review: document.querySelector('#demo-review'),
  output: document.querySelector('#demo-output')
};

document.querySelectorAll('.demo-choice').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = demos[button.dataset.demo];
    if (!selected) return;
    document.querySelectorAll('.demo-choice').forEach((choice) => {
      const active = choice === button;
      choice.classList.toggle('is-active', active);
      choice.setAttribute('aria-pressed', String(active));
    });
    Object.entries(demoFields).forEach(([key, element]) => {
      if (element) element.textContent = selected[key];
    });
  });
});

