class Cards {
    constructor(_id, _name, _value) {
        this.id = _id;
        this.name = _name;
        this.value = _value;
    }

    addToHtml() {
        var newDiv = document.createElement("div");
        newDiv.className = "cards";
        id_MyCard.appendChild(newDiv);

        var newImg = document.createElement("img");
        newImg.src = "images/" + this.id + ".jpg";
        newDiv.appendChild(newImg);

        newDiv.onclick = function() {
            if (this.value > OpponentCards[randomCard].value) {
                alert("win");
            } else {
                alert("lose");
            }
        }.bind(this);

    }
}