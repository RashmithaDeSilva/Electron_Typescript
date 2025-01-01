const errorBtn = document.getElementById("errorBtn");

errorBtn?.addEventListener("click", () => {
  // Send a request to open the error dialog
  // @ts-ignore
  window.electronAPI.sendErrorDialog();

  // Listen for the response when the dialog is opened
  // @ts-ignore
  window.electronAPI.onErrorDialogOpened((message) => {
    console.log("Main process response:", message);
  });
});
