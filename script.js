document.getElementById("soup").addEventListener("click", function() {
    setSelectedDish("Elixier der Langlebigkeit");
});

document.getElementById("risotto").addEventListener("click", function() {
    setSelectedDish("Risotto ala Radiologie");
});

document.getElementById("schnitzel").addEventListener("click", function() {
    setSelectedDish("Filet Mignon à la Cardiologie");
});

document.getElementById("surprise").addEventListener("click", function() {
    const dishes = ["Elixier der Langlebigkeit", "Risotto ala Radiologie", "Filet Mignon à la Cardiologie"];
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    setSelectedDish(randomDish);
});

function setSelectedDish(dish) {
    document.getElementById("selectedDish").textContent = "Sie haben gewählt: " + dish;
}
