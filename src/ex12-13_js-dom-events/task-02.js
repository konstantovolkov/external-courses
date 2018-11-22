var container = document.getElementById('container');
        var selArt;
        
        container.onclick = function(event) {
            var target = event.target;
            while (target != container) {
                if (target.tagName == 'H3') {
                    show(target);
                    return;
                }
                target = target.parentNode;
            }
        }

        function show(node) {
            if (selArt) {
                selArt.parentNode.classList.remove('open')
            }
            selArt = node;
            selArt.parentNode.classList.add('open')
        }