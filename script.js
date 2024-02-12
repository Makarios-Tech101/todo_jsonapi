
let currentIndex = 0; // Initialize a variable to keep track of the current index

async function fetchUser() {
    
    try{
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        if (!response.ok) {
          throw new Error("Could not fetch resources")
        }

      const data = await response.json();
      console.log("MY DATA",data);

      const Element = document.getElementById("paragraph");

    
      // Check if currentIndex exceeds the length of the data array
      if (currentIndex >= data.length) {
        currentIndex = 0; // Reset the index to display titles from the beginning
      }

    // Display the title at the current index
      // Element.innerHTML = data[currentIndex].title;
      const currentTodo = data[currentIndex];

        // Display all the information of the current todo
        Element.innerHTML = `
            <p>User ID: ${currentTodo.userId}</p>
            <p>ID: ${currentTodo.id}</p>
            <p>Title: ${currentTodo.title}</p>
            <p>Completed: ${currentTodo.completed}</p>
        `;

      currentIndex++; // Increment the index for the next click
      
        //  for (let todo of data){

        //   Element.innerHTML += `${todo.title } <br>` ;
        //  }
      // Element.textContent = paragraph;

      
    }

    catch(error) {
       console.error(error)  
    }
}