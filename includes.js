async function loadInclude(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadInclude('header', '/web/includes/header.html');
loadInclude('footer', '/web/includes/footer.html');