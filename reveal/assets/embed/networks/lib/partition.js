const d3 = window.d3;
const svg = d3.select('svg');
const status = document.querySelector('#summary');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
try {
    const data = await d3.json('data/hierarchy.json');
    const root = d3.hierarchy(data).sum(d => d.value || 0).sort((a,b) => b.value-a.value);
    d3.partition().size([1,1])(root);
    const nodes = root.descendants().slice(1);
    const colors = d3.scaleOrdinal(root.children.map(d => d.data.name), ['#a78bc4','#d387ce','#ff92b8','#ffad90','#eed783','#c8f295','#90eca3','#76dfcb','#7fcddd','#a2bce6']);
    const color = d => colors(d.ancestors().find(a => a.depth === 1).data.name);
    const paths = svg.append('g').selectAll('path').data(nodes).join('path').attr('class','cell').attr('fill',color);
    paths.append('title').text(d => `${d.ancestors().reverse().map(a => a.data.name).join(' / ')}: ${d.value.toLocaleString()}`);
    const labels = svg.append('g').attr('aria-hidden',true).selectAll('text').data(nodes).join('text').attr('class','label').text(d => d.data.name);
    let amount = 0, target = 0, width = 900, height = 500;
    // Bend a strip continuously into a complete annulus. Fixed samples preserve
    // each node's identity; unlike cross-fading two charts, intermediate paths are real geometry.
    function point(u, depth, k) {
        const flatBase = (width-24)/(2*Math.PI);
        const radius = Math.min(width,height)*.47;
        const base = d3.interpolateNumber(flatBase, radius*.22)(k);
        const band = d3.interpolateNumber((height-24)/(root.height+1),radius*.78/root.height)(k);
        const angle = (u-.5)*2*Math.PI*k;
        const v = (depth-1)*band;
        const x = k < 1e-7 ? (u-.5)*(width-24) : (base/k+v)*Math.sin(angle);
        const y = k < 1e-7 ? v : base*(Math.cos(angle)-1)/k + v*Math.cos(angle);
        return [width/2+x, d3.interpolateNumber(12,height/2+base)(k)+y];
    }
    function draw() {
        // Fit the entire bending strip, including the arc's intermediate extrema.
        const bounds = [];
        for(let i=0;i<=200;i++) {
            bounds.push(point(i/200,1,amount),point(i/200,root.height+1,amount));
        }
        const [x0,x1]=d3.extent(bounds,p=>p[0]), [y0,y1]=d3.extent(bounds,p=>p[1]);
        svg.attr('viewBox',`${x0-12} ${y0-12} ${x1-x0+24} ${y1-y0+24}`).attr('data-progress',amount.toFixed(4));
        paths.attr('d',d => {
            const points = [];
            for(let i=0;i<=40;i++) points.push(point(d.x0+(d.x1-d.x0)*i/40,d.depth,amount));
            for(let i=40;i>=0;i--) points.push(point(d.x0+(d.x1-d.x0)*i/40,d.depth+1,amount));
            return `M${points.map(p => p.join(',')).join('L')}Z`;
        });
        labels.attr('x',d => point((d.x0+d.x1)/2,d.depth+.5,amount)[0])
            .attr('y',d => point((d.x0+d.x1)/2,d.depth+.5,amount)[1]+4)
            .attr('opacity',d => (amount < .02 && (d.x1-d.x0)*width > d.data.name.length*6+8) || (amount > .98 && d.depth === 1 && d.x1-d.x0 > .035) ? 1 : 0);
    }
    function setLayout(value, animate=true) {
        target=value;
        document.querySelector('#icicle').setAttribute('aria-pressed',value===0);
        document.querySelector('#sunburst').setAttribute('aria-pressed',value===1);
        status.textContent=`${value ? 'Sunburst' : 'Icicle'} · ${root.leaves().length} classes · ${root.value.toLocaleString()} total size`;
        svg.interrupt();
        if(!animate || reduced.matches) { amount=value; draw(); return; }
        const start=amount;
        svg.transition().duration(1600).ease(d3.easeCubicInOut).tween('bend',() => t => { amount=start+(value-start)*t; draw(); });
    }
    document.querySelector('#icicle').onclick=() => setLayout(0);
    document.querySelector('#sunburst').onclick=() => setLayout(1);
    document.querySelector('#reset').onclick=() => setLayout(0,false);
    reduced.addEventListener('change',() => { if(reduced.matches) setLayout(target,false); });
    new ResizeObserver(entries => { const r=entries[0].contentRect; width=Math.max(1,r.width); height=Math.max(1,r.height); draw(); }).observe(document.querySelector('main'));
    setLayout(0,false);
} catch(error) { status.textContent=`Unable to load hierarchy: ${error.message}`; }
