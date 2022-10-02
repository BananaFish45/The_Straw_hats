let http = new XMLHttpRequest();
http.open('get', 'profile.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let Profiles = JSON.parse(this.responseText);
        let output = "";
        for(let item of Profiles){
            output += `
            <div class="profile">
            <p class="title">${item.Names}</p>
            <p class="description">Artwork Description: ${item.Artwork_Desc}</p>
            <img src="${item.Owner_Image}" alt="${item.Names}">
            <p class="description"> </p>
            <img src="${item.Picture}" alt="${item.Artwork_Desc}">
            <p class="description"> </p>
            <p class="description">Price: R${item.Price}</p>
            <p class="description">Tax Number: ${item.Tax_Number}</p>
            <p class="description">Contact: ${item.Contact_Details}</p>
            <p class="cart">Contact Seller <i class="bx bx-cart-alt"></i></p>
            </div>
			`;
		}
        for(let k = 0; k<10;k++){
            database.find({}, function(err, databaseOut) {
                if(err) {
                    console.log("Error: " + err.message);
                }
                else {
                    console.log("Loading, Upload to the page!");
                    output += `
                    <div class="profile">
                    <p class="title">${databaseOut[k].Names}</p>
                    <p class="description">Artwork Description: ${databaseOut[k].Artwork_Desc}</p>
                    <img src="${databaseOut[k].Owner_Image}" alt="${databaseOut[k].Names}">
                    <p class="description"> </p>
                    <img src="${databaseOut[k].Picture}" alt="${databaseOut[k].Artwork_Desc}">
                    <p class="description"> </p>
                    <p class="description">Price: R${databaseOut[k].Price}</p>
                    <p class="description">Tax Number: ${databaseOut[k].Tax_Number}</p>
                    <p class="description">Contact: ${databaseOut[k].Contact_Details}</p>
                    <p class="cart">Contact Seller <i class="bx bx-cart-alt"></i></p>
                    </div>
                    `;
                }
            });
        }
		document.querySelector(".profiles").innerHTML = output;
	}
}