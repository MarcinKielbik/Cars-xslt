function loadXMLDoc(fileName, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", fileName, true);

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status == 200) {
            callback(xhttp.responseXML);
        }
    }


    xhttp.send();

}


function transformXML() {
    loadXMLDoc("cars.xml", (xml) => {
        loadXMLDoc("cars.xsl",(xsl => {
            let xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);

            let resultDocument = xsltProcessor.transformToFragment(xml, document);
            document.querySelector(".content").innerHTML = "";

            document.querySelector(".content").appendChild(resultDocument);
        }));
    });
}

transformXML();