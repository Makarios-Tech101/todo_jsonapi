async function generateImg() {
    
    try{
    //   const elButton = document.getElementById("btn-image");
    //   const response = await fetch(`https://jsonplaceholder.typicode.com/photos/20`);
    const randomId = Math.floor(Math.random() * 100) + 1; // Generate a random ID between 1 and 100
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
      if (!response.ok) {
        throw new Error("Could not fetch resources")
      }

      const data = await response.json();
    //   console.log(data[3]);
      const generatedImage = data.url;

      const imgElement = document.getElementById("generatedImage");

      imgElement.src = generatedImage;

      imgElement.style.display = "inline";
      imgElement.style.maxWidth = "300px";
      imgElement.style.marginTop = "10px";
      // imgElement.style.margin = "0px auto";
    }

    catch(error) {
       console.error(error)  
    }
}