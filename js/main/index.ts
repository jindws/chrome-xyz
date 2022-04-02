const comment = document.getElementsByTagName("halo-comment")[0].shadowRoot;
const dom: HTMLElement = comment.querySelector("#emotion-toggle span");
dom && dom.click();

const tip = document.getElementsByClassName("joe_detail__overdue")[0];
(tip as HTMLElement).style.display = "none";
