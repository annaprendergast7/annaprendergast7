const quoteButton = document.querySelector('.generate');
quoteButton.addEventListener('click', getQuote);
const endPoint = new URL("https://dog.ceo/api/breeds/image/random")
const breedButton = document.querySelector('.breed');
breedButton.addEventListener('click', getBreed);
const breedDog = document.querySelector('.breedInput')

async function getQuote(){
    try{
        const response = await fetch(endPoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json)
        // console.log(json['dogs'][0]['strDog']);
        // displayQuote(json['dogs'][0]);
        const dogImage = document.querySelector('.image');
        dogImage.src = json.message
    }
    catch(err) {
        console.log(err);
        alert('failed');
    }
}
async function getBreed(){
    try{
        const dogLink = "https://dog.ceo/api/breed/" + breedDog.value + "/images"
        const breedPoint = new URL(dogLink)

        const response = await fetch(breedPoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json)
        const dogImage = document.querySelector('.image');
        dogImage.src = json.message[0]
    }
    catch(err) {
        console.log(err);
        alert('failed');
    }
}

// To extend my quote machine, which in this case, I did an image machine of different dogs,
// I decided to add a new input button where you can search for a specific dog. I went on  
//the website I got the random dog API pictures and then I found a link to dogs listed by breed. 
//To do this, I copied the code I used for the first button, but had to make this link a string that went through the link,
//Because when you search a breed, around 100 images show up, I decided to use the first that shows up for each breed. So I showed the first image that comes up in an array
//this way, you can generate a random dog, or one that you search
//the biggest issue with this is you have to specifically type in the breed by the way the website