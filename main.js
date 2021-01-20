window.onload = () => {
    if (window.location.href === 'https://wybory.online.tvwisla.com.pl/widgets-covid-19/?article=1') {
        
        let init = () => {
            const getCellVal = (tr, i) => tr.children[i].innerText || tr.children[i].textContent;
    
            const comparer = (i, asc) => (a, b) => ((x, y) =>
                x !== '' && y !== '' && !isNaN(x) && !isNaN(y) ? x - y : x.toString().localeCompare(y)
            )(getCellVal(asc ? a : b, i), getCellVal(asc ? b : a, i));
        
            const myTh = document.querySelectorAll('thead td');
        
            myTh.forEach(th => th.addEventListener('click', (() => {
                const table = th.closest('table');
                const tbody = table.querySelector('tbody');
                Array.from(table.querySelectorAll('tbody tr'))
                    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                    .forEach(tr => tbody.appendChild(tr));
            })));
        }

        let checkForTable = () => {
            if(document.querySelectorAll('.mc-header__title')[1] && document.querySelectorAll('.mc-header__title')[1].textContent === "Przypadki koronawirusa w Polsce z podziałem na województwa"){
                clearInterval(checkInterval);
                init();
            };
        }

        let checkInterval = setInterval(checkForTable, 100);
    }
}