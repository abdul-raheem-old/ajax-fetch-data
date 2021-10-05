function fetch_data(query, page, id_name){
    if(query == ""){
        document.getElementById(id_name).innerHTML = "";
        return;
    } else {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if(this.readyState == 0 || this.readyState == 1 || this.readyState == 2 || this.readyState == 3){
                document.getElementById(id_name).innerHTML = '<img src="loading.gif" />';
            }
            if(this.readyState == 4 && this.status == 200){
                document.getElementById(id_name).innerHTML = this.responseText;
            }
        };
        var q = page + "?query=" + query;
        xml.open("GET", q, true);
        xml.send();
    }
}