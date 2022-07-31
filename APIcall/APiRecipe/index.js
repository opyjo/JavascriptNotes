const proxy = "https://cors-anywhere.herokuapp.com/";
const baseEndpoint = "http://www.recipepuppy.com/api/";

function getRecipe(query) {
    fetch(`${proxy}${baseEndpoint}"?q=${query}`)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        });
}
getRecipe("pizza");
