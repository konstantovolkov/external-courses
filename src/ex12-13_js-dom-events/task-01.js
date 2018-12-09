var listOfElements = {};
var listOfClasses = {};
var textNodes = 0;

function count(element, classNum) {
    if (element.tagName in listOfElements) {
        listOfElements[element.tagName]++;
    } else {
        listOfElements[element.tagName] = 1;
    }
    if (element.className !== '') {
        for (let i = 0; i < element.classList.length; i++){
            if (element.classList[i] in listOfClasses) {
                listOfClasses[element.classList[i]]++;
            } else {
                listOfClasses[element.classList[i]] = 1;
            }
        }
    }
}  

function scanDOM(element) {

    if (element.hasChildNodes()) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            
            if (child.nodeType === 1) {
                count(child);
            } else if (child.nodeType === 3) {
                textNodes++;
            }
        }
        scanDOM(child);

    } else {

        for (var elemName in listOfElements) {
            console.log('Тегов ' + elemName + ': ' + listOfElements[elemName])
        }
        for (var className in listOfClasses) {
            console.log('Элементов с классом ' + className + ': ' + listOfClasses[className])
        }

        console.log('Текстовых узлов : ' + textNodes);

    }
};

scanDOM(document.querySelector('body'))
