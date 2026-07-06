async function loadInclude(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadInclude('header', 'http://localhost/web/includes/header.html');
loadInclude('footer', 'http://localhost/web/includes/footer.html');