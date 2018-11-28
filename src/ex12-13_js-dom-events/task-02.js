var container = document.getElementById('container');
        var selArt;
        
        container.onclick = function(event) {
            var target = event.target;
            while (target != container) {
                if (target.tagName == 'ARTICLE') {
                    show(target);
                    return;
                }
                target = target.closest('ARTICLE');
            }
        }

        function show(node) {
            if (selArt) {
                selArt.classList.remove('open')
            }
            selArt = node;
            selArt.classList.add('open')
        }