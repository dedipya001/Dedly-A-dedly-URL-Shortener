let copyButton1 = document.getElementById("copy1");
let newURL = document.getElementById("shorturl");
let newURL2 = document.getElementById("shorturl2");

copyButton1.onclick = ()=>
{
    newURL.select();
    window.navigator.clipboard.writeText(newURL.value);
}

let copyButton2 = document.getElementById("copy2");
copyButton2.onclick = ()=>
{
    newURL2.select();
    window.navigator.clipboard.writeText(newURL2.value);
}
