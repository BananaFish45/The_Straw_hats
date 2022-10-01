let http = new XMLHttpRequest();
http.open('get', 'sculpturesGallery.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let Scuptures = JSON.parse(this.responseText);
		let output = "";
		for(let item of Scuptures){
			output += `
				<div class="sculpturesGallery">
				<p class="title">${item.Name}</p>
				<p class="description">Location: ${item.Location}</p>
				<img src="${item.Picture}" alt="${item.Name}">
				<p class="description"> </p>
				<p class="description">Price: R${item.Price}</p>
				<p class="description">Creator: ${item.Creator}</p>
				<p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
					</div>
			`;
		}
		document.querySelector(".sculpturesGallerys").innerHTML = output;
	}
}