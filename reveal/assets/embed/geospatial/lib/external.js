const body = document.body;
const stage = document.querySelector('main');
const staticButton = document.querySelector('button[data-mode=static]');
const liveButton = document.querySelector('button[data-mode=live]');
const status = document.querySelector('[role=status]');
let frame = null;

function showStatic() {
    const restoreFocus = frame && document.activeElement === frame;
    frame?.remove(); frame = null;
    body.dataset.mode = 'static';
    staticButton.setAttribute('aria-pressed', 'true');
    liveButton.setAttribute('aria-pressed', 'false');
    status.textContent = 'Static reference figure. No remote page is loaded.';
    if (restoreFocus) staticButton.focus();
}
function showLive() {
    // Re-selecting Live must not reload a map or discard its interaction state.
    if (frame) return;
    if (!navigator.onLine) {
        status.textContent = 'Offline: showing the static reference. Try Live again when connected.';
        return;
    }
    frame = document.createElement('iframe');
    frame.title = body.dataset.liveTitle;
    frame.allow = body.dataset.liveAllow || 'fullscreen';
    frame.src = body.dataset.liveSrc;
    const candidate = frame;
    frame.addEventListener('error', () => {
        if (frame === candidate) status.textContent = 'Remote page could not load. Choose Static for the reference figure or use the new-tab link.';
    });
    body.dataset.mode = 'live';
    staticButton.setAttribute('aria-pressed', 'false');
    liveButton.setAttribute('aria-pressed', 'true');
    status.textContent = 'Live page selected. Choose Static to return to the reference figure; printing still uses the reference.';
    stage.append(frame);
}
staticButton.addEventListener('click', showStatic);
liveButton.addEventListener('click', showLive);
window.addEventListener('offline', () => {
    // Preserve the selected view and iframe state through a connection interruption.
    if (frame) status.textContent = 'Connection lost. Live remains selected; choose Static for the reference figure.';
});
showStatic();
if (new URLSearchParams(location.search).get('mode') === 'live') showLive();
body.dataset.ready = 'true';
