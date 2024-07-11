console.log("This is a popup!")

const tabs = await chrome.tabs.query({
    url: [
      "https://developer.chrome.com/docs/webstore/*",
      "https://developer.chrome.com/docs/extensions/*",
    ]
  });

// sort the tabs in alphabetical order
const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));
  
const template = document.getElementById("li_template");
const elements = new Set();
// loop through all tabs and parse through tabs that we are given permission in host_permission from manifest.json AND the url array provided for the 'tabs' initialization above
for (const tab of tabs) {
    const element = template.content.firstElementChild.cloneNode(true);
  
    const title = tab.title.split("-")[0].trim();
    const pathname = new URL(tab.url).pathname.slice("/docs".length);
  
    element.querySelector(".title").textContent = title;
    element.querySelector(".pathname").textContent = pathname;
    element.querySelector("a").addEventListener("click", async () => {
      // need to focus window as well as the active tab
      await chrome.tabs.update(tab.id, { active: true });
      await chrome.windows.update(tab.windowId, { focused: true });
    });
  
    elements.add(element);
}
document.querySelector("ul").append(...elements); // uses Spread syntax to turn the elements set into arguments for append

// this section handles the tab groupings
// right now it hard codes the found tabs with the settings above into "DOCS"
const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  if (tabIds.length) {
    const group = await chrome.tabs.group({ tabIds });
    await chrome.tabGroups.update(group, { title: "DOCS" });
  }
});