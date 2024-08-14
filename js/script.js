const editor = document.querySelector(".editor");
const iframe = document.querySelector(".iframe");

editor.addEventListener("keyup", () => {
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(editor.value);
});

window.addEventListener("load", () => {
  editor.value = `<P>Hello World</P>`;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(editor.value);
  editor.focus();
});
