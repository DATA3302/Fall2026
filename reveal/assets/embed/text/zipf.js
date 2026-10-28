(() => {
  const svg = d3.select('svg');
  const image = document.querySelector('img');
  const slider = document.querySelector('input');
  const select = document.querySelector('select');
  const status = document.querySelector('[role=status]');
  const controls = document.querySelectorAll('.controls label, .caption');
  const buttons = document.querySelectorAll('button[data-mode]');
  const margin = { top: 28, right: 35, bottom: 70, left: 100 };
  function draw() {
    const exponent = Number(slider.value);
    document.querySelector('output').value = exponent.toFixed(2);
    const weights = d3.range(1, 1001).map(rank => ({ rank, weight: rank ** -exponent }));
    const sum = d3.sum(weights, d => d.weight);
    const data = weights.map(d => ({ rank: d.rank, frequency: d.weight / sum }));
    const logarithmic = select.value === 'log';
    const x = (logarithmic ? d3.scaleLog() : d3.scaleLinear()).domain([1, 1000]).range([margin.left, 900 - margin.right]);
    // A fixed log domain makes changes in slope visible rather than rescaling them away.
        const y = (logarithmic ? d3.scaleLog().domain([1e-6, 1]) : d3.scaleLinear().domain([0, data[0].frequency])).range([540 - margin.bottom, margin.top]);
    svg.selectAll('*').remove();
    svg.append('g').attr('class', 'axis').attr('transform', `translate(0,${540 - margin.bottom})`).call(d3.axisBottom(x).ticks(logarithmic ? 4 : 5, '~g'));
    svg.append('g').attr('class', 'axis').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y).ticks(5, logarithmic ? '.0e' : '.1~%'));
    svg.append('path').datum(data).attr('fill', 'none').attr('stroke', 'var(--accent)').attr('stroke-width', 3).attr('d', d3.line().x(d => x(d.rank)).y(d => y(d.frequency)));
    svg.append('text').attr('x', 480).attr('y', 526).attr('text-anchor', 'middle').attr('font-size', 21).text('Word rank');
    svg.append('text').attr('transform', 'translate(24,250) rotate(-90)').attr('text-anchor', 'middle').attr('font-size', 21).text('Normalized term frequency');
    svg.append('text').attr('x', 870).attr('y', 25).attr('text-anchor', 'end').attr('font-size', 20).text(`frequency ∝ rank⁻ˢ; s = ${exponent.toFixed(2)}`);
    status.textContent = `Illustrative model: exponent ${exponent.toFixed(2)}, ${logarithmic ? 'logarithmic' : 'linear'} axes. Not the original book counts.`;
  }
  function setMode(mode) {
    document.body.dataset.mode = mode;
    image.hidden = mode === 'live';
    svg.node().toggleAttribute('hidden', mode === 'static');
    controls.forEach(control => control.hidden = mode === 'static');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
    if (mode === 'live') draw();
    else status.textContent = 'Static reference: original book-frequency plot.';
  }
  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  slider.addEventListener('input', draw);
  select.addEventListener('change', draw);
  setMode('static');
  document.body.dataset.ready = 'true';
})();
