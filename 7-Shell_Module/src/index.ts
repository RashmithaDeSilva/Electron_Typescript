const openFolderBtn = document.getElementById("openFolderBtn");
const openFileBtn = document.getElementById("openFileBtn");
const openLinkBtn = document.getElementById("openLinkBtn");


openFolderBtn?.addEventListener("click", () => {
    window.electronAPI.openFolder();;
});

openFileBtn?.addEventListener("click", () => {
    window.electronAPI.openItem();
});

openLinkBtn?.addEventListener("click", () => {
    window.electronAPI.openLink();
});