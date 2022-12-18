# 3D Illumination and Shading

This program is a WebGL application for rendering 3D models with different shading algorithms. It uses the canvas element in HTML to create a WebGL 2 context, which is a hardware-accelerated rendering context for the web. The program also uses the glMatrix library, which provides functions for manipulating 3D matrices and vectors. The program contains multiple shaders, which are small programs that run on the graphics processing unit (GPU) to perform tasks such as rasterizing 3D models and applying lighting and shading effects. The program includes several functions for downloading and compiling the shaders into GPU programs, creating Vertex Array Objects (VAOs) to store the attributes of 3D models, and rendering the models using the selected shading algorithm. The program also includes a scene object that stores the current list of models and lights to be rendered, and a projection matrix, view matrix, and model matrix that are used to transform the models in 3D space. The program allows the user to switch between different shading algorithms and to manipulate the camera and lighting to view the models from different angles.

The program also includes a number of helper functions for downloading and parsing files from the web server, handling errors, and interacting with the user through the HTML interface. For example, the getFile function is used to download a file asynchronously and return a Promise object that resolves with the contents of the file. The createShaderProgram function is used to compile and link a vertex shader and a fragment shader into a GPU program and return a reference to the program. The createVertexArray function is used to create a VAO and store the attributes of a 3D model in the VAO's buffer objects. The drawScene function is used to render the models in the scene object using the selected shading algorithm and the projection, view, and model matrices. The updateCamera function is used to update the view matrix based on the user's input, and the updateLight function is used to update the light position and intensity based on the user's input. Overall, this program provides a powerful and flexible platform for rendering 3D models with different shading algorithms and interactively exploring them in 3D space.
