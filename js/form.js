const form = document.querySelector('.sendmessage-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  // Import the mongoose library
  const mongoose = require('mongoose');
  
  // Connect to the MongoDB database
  mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });
  
  // Define the message schema
  const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
  });
  
  // Create a model from the schema
  const Message = mongoose.model('Message', messageSchema);
  
  // Create a new message object
  const newMessage = new Message({ name: name, email: email, message: message });
  
  // Save the message to the database
  newMessage.save((error) => {
    if (error) {
      console.log(error);
    } else {
      alert("message saved to MongoDB!");
    }
  });
});


// This code first imports the Mongoose library, connects to a MongoDB database, then defines a schema for the message object, with properties name, email, and message. Then it creates a model object from the schema, and creates a new message object using the input values. Finally, it uses the save() method to save the new message object to the MongoDB database. If the save is successful, it shows an alert to confirm that the data has been saved.

// Please note that this is a basic example and further security measures should be taken when working with databases, such as user authentication, validation and error handling. Also, it is necessary to have MongoDB running on your local machine and accessible at the URL specified in the mongoose.connect() method.




