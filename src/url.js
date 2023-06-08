const restoreUrl = () => {
    return {
        name: "inject-script", transformIndexHtml(html) {
            return html.replace("</body>", `<script>document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[href], [src]").forEach((function(t){if(t.hasAttribute("href")){let e=t.getAttribute("href");e.startsWith("/")&&t.setAttribute("href",window.location.href+e)}if(t.hasAttribute("src")){let e=t.getAttribute("src");e.startsWith("/")&&t.setAttribute("src",window.location.href+e)}}))}));</script></body>`)
        }
    }
}

export default restoreUrl
