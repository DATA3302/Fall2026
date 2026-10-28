const d3=window.d3, svg=d3.select('svg'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
const status=document.querySelector('#summary'), up=document.querySelector('#up'), select=document.querySelector('#branch');
try {
    const root=d3.hierarchy(await d3.json('data/hierarchy.json')).sum(d=>d.value||0).sort((a,b)=>b.value-a.value);
    d3.partition().size([2*Math.PI,root.height+1])(root);
    const nodes=root.descendants(), colors=d3.scaleOrdinal(root.children.map(d=>d.data.name),['#a78bc4','#d387ce','#ff92b8','#ffad90','#eed783','#c8f295','#90eca3','#76dfcb','#7fcddd','#a2bce6']);
    const fullName=d=>d.ancestors().reverse().map(a=>a.data.name).join(' / ');
    let focus=root, unit=70;
    nodes.forEach((d,i)=>{d.id=i;d.current={x0:d.x0,x1:d.x1,y0:d.y0,y1:d.y1};});
    const group=svg.append('g');
    const paths=group.selectAll('path').data(nodes.slice(1)).join('path').attr('class',d=>'cell'+(d.children?' branch':''))
        .attr('fill',d=>colors(d.ancestors().find(a=>a.depth===1).data.name))
        .attr('role',d=>d.children?'button':'img').attr('aria-label',d=>`${fullName(d)}, ${d.value.toLocaleString()}${d.children?', expand branch':''}`)
        .on('click',(e,d)=>{if(d.children)zoom(d);}).on('keydown',(e,d)=>{if(d.children && ['Enter',' '].includes(e.key)){e.preventDefault();zoom(d);}});
    paths.append('title').text(d=>`${fullName(d)}: ${d.value.toLocaleString()}`);
    const labels=group.append('g').attr('aria-hidden',true).selectAll('text').data(nodes.slice(1)).join('text').attr('class','label').attr('dy','.35em').text(d=>d.data.name);
    const centerButton=group.append('circle').attr('class','sunburst-center').attr('role','button')
        .on('click',contract).on('keydown',event=>{
            if(['Enter',' '].includes(event.key)){event.preventDefault();contract();}
        });
    const centerTitle=centerButton.append('title');
    const center=group.append('text').attr('class','label').attr('dy','.35em').attr('aria-hidden',true);
    function contract(){if(focus.parent)zoom(focus.parent);}
    const arc=d3.arc().startAngle(d=>d.x0).endAngle(d=>d.x1).padAngle(d=>Math.min((d.x1-d.x0)/2,.003)).padRadius(()=>unit*1.5).innerRadius(d=>Math.max(0,d.y0)*unit).outerRadius(d=>Math.max(0,d.y1)*unit-1);
    const visible=d=>d.y0>=1 && d.y1<=3.001 && d.x1-d.x0>1e-6;
    function draw(){
        paths.attr('d',d=>arc(d.current)).attr('opacity',d=>visible(d.current)?1:0).attr('pointer-events',d=>visible(d.current)?'auto':'none').attr('tabindex',d=>d.children&&visible(d.current)?0:-1).attr('aria-hidden',d=>!visible(d.current));
        labels.attr('opacity',d=>visible(d.current)&&(d.current.x1-d.current.x0)*unit*(d.current.y0+.5)>d.data.name.length*6?1:0)
            .attr('transform',d=>{const a=(d.current.x0+d.current.x1)/2*180/Math.PI;const r=(d.current.y0+d.current.y1)/2*unit;return `rotate(${a-90}) translate(${r},0) rotate(${a<180?0:180})`;});
        centerButton.attr('r',Math.max(1,unit-2));
        center.text(focus.data.name);
    }
    function zoom(node,animate=true){
        svg.interrupt(); focus=node;
        status.textContent=`${fullName(node)} · ${node.value.toLocaleString()} size`;
        up.disabled=!node.parent; select.value=node.id;
        const centerLabel=node.parent?`Return to parent: ${fullName(node.parent)}`:`At root: ${node.data.name}; no parent`;
        centerButton.attr('aria-label',centerLabel).attr('aria-disabled',!node.parent).attr('tabindex',node.parent?0:-1);
        centerTitle.text(centerLabel);
        const start=nodes.map(d=>({...d.current}));
        const target=nodes.map(d=>({x0:Math.max(0,Math.min(1,(d.x0-node.x0)/(node.x1-node.x0)))*2*Math.PI,x1:Math.max(0,Math.min(1,(d.x1-node.x0)/(node.x1-node.x0)))*2*Math.PI,y0:Math.max(0,d.y0-node.depth),y1:Math.max(0,d.y1-node.depth)}));
        const interpolators=start.map((s,i)=>d3.interpolateObject(s,target[i]));
        const frame=t=>{nodes.forEach((d,i)=>d.current=interpolators[i](t));draw();svg.attr('data-progress',t.toFixed(4));};
        if(!animate||reduced.matches)frame(1);
        else svg.transition().duration(1100).ease(d3.easeCubicInOut).tween('zoom',()=>frame);
        // Keyboard activation can hide its own segment. Keep focus on a stable control.
        if(document.activeElement?.tagName.toLowerCase()==='path') (node.parent?up:select).focus();
    }
    select.replaceChildren(...nodes.filter(d=>d.children).map(d=>new Option(fullName(d),d.id)));
    select.onchange=()=>zoom(nodes[+select.value]);
    up.onclick=contract;
    document.querySelector('#reset').onclick=()=>zoom(root,false);
    reduced.addEventListener('change',()=>{if(reduced.matches)zoom(focus,false);});
    new ResizeObserver(entries=>{const {width,height}=entries[0].contentRect;svg.attr('viewBox',`${-width/2} ${-height/2} ${width} ${height}`);unit=Math.max(1,Math.min(width,height)/6.3);draw();}).observe(document.querySelector('main'));
    zoom(root,false);
} catch(error){status.textContent=`Unable to load hierarchy: ${error.message}`;}
