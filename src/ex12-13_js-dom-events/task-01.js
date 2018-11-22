var listOfElements = {};
var listOfClasses = {};
var textNodes = 0;
const tag = 1;
const text = 3;

function countElements(element) {
    if (element.tagName in listOfElements) {
        listOfElements[element.tagName]++;
    } else {
        listOfElements[element.tagName] = 1;
    }
}

function countClasses(element, classNum) {
    if (element.classList[classNum] in listOfClasses) {
        listOfClasses[element.classList[classNum]]++;
    } else {
        listOfClasses[element.classList[classNum]] = 1;
    }
}

function scanDOM(element) {

    if (element.hasChildNodes()) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            if (child.nodeType === tag) {
                countElements(child);
                if (child.className !== '') {
                    for (let i = 0; i < child.classList.length; i++){
                        countClasses(child, i);
                    }
                }
            } else if (child.nodeType === text) {
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
