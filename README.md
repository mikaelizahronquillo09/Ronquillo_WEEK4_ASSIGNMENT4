# Ronquillo_WEEK4_ASSIGNMENT4
Advanced Mobile Computing - OBT4 

[Explanation of Architecture]
For this project, it shows a clean and scalable architecture by separating responsibilities into different folders: screens, services, context, and components. The services folder is the one handling all the API communication, ensuring that the networking logic is isolated from UI logic. The context folder manages global state using React Context API, making the product data accessible throughout the application. The screen folder contains container-level components which are resposible for data fetching and rendering states. The components folder contains reusable UI components to keep the code modular and maintanable. This separation improves readability, scalability, and maintainability. It also ensures that the UI reacts to global state changes instead of directly handling API responses.

[Explanation of how Context API manages global state]
The context API is used to store and manage product data globally within the application. The ProductContext provides shared state such as the products, loading, and error. The ProductProvider wraps the application, making this global state accessible to any component inside the tree. Instead of passing props manually through multiple components. When the state is updated inside the context, all components automatically re-render.

[Explanation of why Axios instance is used]
An Axios instance was used to create to centralize API configuration. The instance defines a baseURL, timeout settings, and shared configuration in one place. This avoids repeating the full API URL across multiple files and keeps the code cleaner. If the API base URL changes, it only needs to be updated in one file. The Axios instance also allows easier expansion, such as adding interceptors for authentication or logging. This approach improves maintainability and follows production-level best practices.
