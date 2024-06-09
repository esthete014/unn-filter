document.addEventListener('DOMContentLoaded', () => {
    const wordInput = document.getElementById('wordInput');
    const addWordButton = document.getElementById('addWordButton');
    const wordListElement = document.getElementById('wordList');

    function renderWordList(wordList) {
        wordListElement.innerHTML = '';
        wordList.forEach((wordItem, index) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');

            //
            const div = document.createElement('div');
            div.className = 'checkbox-wrapper-8' + index;
            // Создаем input элемент
            checkbox.className = 'tgl' + index + ' tgl-skewed' + index;
            checkbox.id = 'cb3-8-' + index;
            // Создаем label элемент
            var label = document.createElement('label');
            label.className = 'tgl-btn' + index;
            label.setAttribute('data-tg-off', 'OFF');
            label.setAttribute('data-tg-on', 'ON');
            label.htmlFor = 'cb3-8-' + index;
            // Добавляем input и label в div
            div.appendChild(checkbox);
            div.appendChild(label);
            var style = document.createElement('style');
            style.innerHTML = `
            .checkbox-wrapper-8` + index + ` .tgl` + index + ` {
                display: none;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + `,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:after,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:before,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *:after,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *:before,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + ` {
                box-sizing: border-box;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + `::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:after::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:before::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *:after::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *:before::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + `::-moz-selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `::selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:after::selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:before::selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *::selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *:after::selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` *:before::selection,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + `::selection {
                background: none;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + ` {
                outline: 0;
                display: block;
                width: 4em;
                height: 2em;
                position: relative;
                cursor: pointer;
                -webkit-user-select: none;
                   -moz-user-select: none;
                    -ms-user-select: none;
                        user-select: none;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + `:after,
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + `:before {
                position: relative;
                display: block;
                content: "";
                width: 50%;
                height: 100%;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + `:after {
                left: 0;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + ` + .tgl-btn` + index + `:before {
                display: none;
              }
              .checkbox-wrapper-8` + index + ` .tgl` + index + `:checked + .tgl-btn` + index + `:after {
                left: 50%;
              }
            
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + ` {
                overflow: hidden;
                transform: skew(-10deg);
                -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                transition: all 0.2s ease;
                font-family: sans-serif;
                background: #888;
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + `:after,
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + `:before {
                transform: skew(10deg);
                display: inline-block;
                transition: all 0.2s ease;
                width: 100%;
                text-align: center;
                position: absolute;
                line-height: 2em;
                font-weight: bold;
                color: #fff;
                
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + `:after {
                left: 100%;
                content: attr(data-tg-on);
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + `:before {
                left: 0;
                content: attr(data-tg-off);
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + `:active {
                background: #888;
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + ` + .tgl-btn` + index + `:active:before {
                left: -10%;
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + `:checked + .tgl-btn` + index + ` {
                background: #86d993;
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + `:checked + .tgl-btn` + index + `:before {
                left: -100%;
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + `:checked + .tgl-btn` + index + `:after {
                left: 0;
              }
              .checkbox-wrapper-8` + index + ` .tgl-skewed` + index + `:checked + .tgl-btn` + index + `:active:after {
                left: 10%;
              }
`;
            //


            checkbox.type = 'checkbox';
            checkbox.checked = wordItem.checked;
            checkbox.addEventListener('change', () => {
                wordItem.checked = checkbox.checked;
                saveWordList(wordList);
            });

            const text = document.createTextNode(wordItem.word);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'DELETE';
            deleteButton.addEventListener('click', () => {
                wordList.splice(index, 1);
                saveWordList(wordList);
            });

            li.appendChild(div);
            li.appendChild(text);
            li.appendChild(deleteButton);
            li.appendChild(style);
            wordListElement.appendChild(li);
        });
    }

    function saveWordList(wordList) {
        chrome.storage.sync.set({ wordList }, () => {
            renderWordList(wordList);
        });
    }

    addWordButton.addEventListener('click', () => {
        const word = wordInput.value.trim();
        if (word) {
            chrome.storage.sync.get('wordList', (data) => {
                const wordList = data.wordList || [];
                wordList.push({ word, checked: false });
                saveWordList(wordList);
                wordInput.value = '';
            });
        }
    });

    chrome.storage.sync.get('wordList', (data) => {
        if (data.wordList) {
            renderWordList(data.wordList);
        }
    });
});
