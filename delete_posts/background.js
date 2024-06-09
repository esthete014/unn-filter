chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ wordList: [] }, () => {
        console.log("Word list initialized.");
    });
});
