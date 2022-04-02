const comment = document.getElementsByTagName("halo-comment")[0].shadowRoot;
const dom: HTMLElement = comment.querySelector("#emotion-toggle span");
dom && dom.click();
