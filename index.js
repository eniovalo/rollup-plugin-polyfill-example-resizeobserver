const div = document.getElementById('myDIV');
div.innerText = 'My default width is ' + div.offsetWidth;

const resizeObserver = new ResizeObserver(entries => {
    console.log('Something change...');
    div.innerText = 'My new width is ' + entries[0].contentRect.width;
});

resizeObserver.observe(div);
