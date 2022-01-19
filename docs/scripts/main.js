function fixTableCodeLineBreaks() {
    document.querySelectorAll('td > code').forEach(e => {
        if(e.innerHTML.indexOf('<') >= 0) {
            // contains html tags, do nothing
            return
        }
        if(e.innerHTML.length < 16) {
            // string is short, do nothing
            return
        }
        e.innerHTML = e.innerHTML.replace(/([a-z])([A-Z])/g, '$1<wbr>$2')
    })
}

window.onload = () => {
    fixTableCodeLineBreaks()
}
