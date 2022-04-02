const menu = {
  menus: [
    {
      id: "main",
      visible: true,
      title: "MAIN",
    },
    {
      id: "open",
      type: "normal",
      visible: true,
      title: "open",
      parentId: "main",
      // onclick: () =>
      //   chrome.tabs.create({
      //     url: `https://jindw.xyz`,
      //   }),
    },
    {
      id: "github",
      visible: true,
      type: "normal",
      title: "github",
      parentId: "main",
      // onclick: () =>
      //   chrome.tabs.create({
      //     url: `https://github.com/jindws/chrome-xyz`,
      //   }),
    },
  ],
};

function toUrl(info) {
  let url;
  switch (info.menuItemId) {
    case "open":
      url = "https://jindw.xyz";
      break;
    case "github":
      url = "https://github.com/jindws/chrome-xyz";
      break;
  }
  chrome.tabs.create({
    url,
  });
}

const createMenu = () => {
  menu.menus.forEach(({ fn, ...data }) => {
    chrome.contextMenus.create(data);
    // fn && chrome.contextMenus.onClicked.addListener(fn);
  });
  chrome.contextMenus.onClicked.addListener(toUrl);
};
createMenu();
