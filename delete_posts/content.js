function hideBlocks(wordList) {
    wordList.forEach(wordItem => {
        if (wordItem.checked) {
            
            const elements = document.getElementsByClassName("feed-item-wrap")
            var arr = Array.from(elements);
            for (let i = 0; i < arr.length; i++){
                
                if (arr[i].innerText.includes(wordItem.word)) {
                    console.log(arr[i])
                    arr[i].style.display = 'none'
                }
            }
            
        }
        else{
            const elements = document.getElementsByClassName("feed-item-wrap")
            var arr = Array.from(elements);
            for (let i = 0; i < arr.length; i++){
                
                if (arr[i].innerText.includes(wordItem.word)) {
                    console.log(arr[i])
                    arr[i].removeAttribute('style')
                }
            }
        }
    });
}

function updateHideBlocks() {
    chrome.storage.sync.get("wordList", (data) => {
        if (data.wordList) {
            hideBlocks(data.wordList);
        }
    });
}

// Initial hide blocks
updateHideBlocks();

// Periodically check and hide blocks
setInterval(updateHideBlocks, 500);
