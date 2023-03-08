// Jokes provided from the lovely folks at https://icanhazdadjoke.com
import jokes from './jokes.json';

export const handler = async (event) => {
    // Generates a random index based on the length of the jokes array
    const randomIndex = Math.floor(Math.random() * jokes.length)
    const randomJoke = jokes[randomIndex]
    
    alert("Catch 22 " + "randomIndex.toString()")
    
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify(randomJoke) + " Catch 22 ";
    }
}
