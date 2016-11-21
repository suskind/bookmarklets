(function(){
    Array.prototype.slice.apply(document.querySelectorAll('table'), null).forEach(function(elmTable, idxTable) {
        var str=''; 
        var thead = elmTable.querySelector('thead');
        var aTh;
        if(thead) {
            aTh = thead.querySelectorAll('th');
        } else {
            aTh = elmTable.querySelectorAll('th');
        }
        var aLine = [];
        if(aTh.length > 0) {
            Array.prototype.slice.apply(aTh, null).forEach(function(elTh) {
                aLine.push('"'+elTh.textContent.replace(/\n/ig, '').replace(/\s\s+/ig, ' ').trim().replace(/\"/ig, '\"')+'"'); 
            });
            str += aLine.join(',');
            str += "\n";
        }
        var hasTds = false;
        Array.prototype.slice.apply(elmTable.querySelectorAll('tr'), null).forEach(function(elm) {
            if(!elm) {
                return;
            }
            hasTds = false; 
            aLine = [];
            var aTds = elm.querySelectorAll('td');
            Array.prototype.slice.apply(aTds, null).forEach(function(elTd, idxTd) {
                hasTds = true;
                aLine.push('"'+elTd.textContent.replace(/\n/ig, '').replace(/\s\s+/ig, ' ').trim().replace(/\"/ig, '\"')+'"');          
            });
            if(hasTds) {
                str += aLine.join(',')+"\n";
            }
        });
        var win = window.open('table_'+idxTable);
        if(win) {
            win.document.open();
            win.document.write('<pre>'+str+'</pre>');
            win.document.close();
        }
    });
})();
