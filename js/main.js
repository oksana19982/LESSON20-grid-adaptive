window.onload = function() {
    document.getElementById("menu").onclick = function () {
        document.getElementById("header_items").classList.add('open');
    }
    document.querySelectorAll("#header_items > *").forEach((item) => {
        item.onclick = () => {
            document.getElementById('header_items').classList.remove("open");
        }
    })
}