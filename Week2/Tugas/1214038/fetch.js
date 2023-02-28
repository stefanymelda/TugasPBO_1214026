var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AM6CfLJhCFlu92tNvS7cRegIIcR8rhhUG.AN2Ss3OKnMLlBJEwcDELKykDb293dBuH%2FhX1M3mZI2w");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
//Dimas Ardianto
hasil=""

fetch("https://api.tvmaze.com/search/shows?q=girls", requestOptions)
  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

  function tampilkan(result){
    iniJson = JSON.parse(result);
    console.log(iniJson);
    Length = iniJson.length;

    for(i=0; i<Length; i++)
    {
        hasil += "<tr>";
        hasil += "<td 'scope='col' class='px-6 py-4 font-medium text-gray-900'>"+iniJson[i].show.id+"</td>";
        hasil += "<td 'scope='col' class='px-6 py-4 font-medium text-gray-900'>"+iniJson[i].show.name+"</td>";
        hasil += "<td 'scope='col' class='px-6 py-4 font-medium text-gray-900'>"+iniJson[i].show.status+"</td>";
        hasil += "<td 'scope='col' class='px-6 py-4 font-medium text-gray-900'><img src='" +iniJson[i].show.image.original+"'/></td>";
        hasil += "</tr>";
    }
    document.getElementById("inidata").innerHTML = hasil;
  }
  