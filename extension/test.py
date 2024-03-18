from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
from PIL import Image
import io
import numpy as np
import tensorflow as tf
from io import BytesIO

def classify_image_H1(model, image_data):
    try:
        # Assuming the first class (index 0) is 'Invalid Input' and the second class (index 1) is 'Loading Indicators'
        class_names = ['Invalid Input', 'Loading Indicators']  # Ensure the order matches your training setup

        # Convert the binary data to a bytes stream
        img_stream = BytesIO(image_data)

        # Load the image from the bytes stream
        img = load_img(img_stream, target_size=(224, 224))

        # Convert the image to an array
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
        img_array /= 255.0  # Normalize pixel values

        # Make the prediction
        prediction = model.predict(img_array).flatten()

        # Determine the predicted class index based on the prediction score
        predicted_class_index = int(prediction >= 0.5)

        # Map the predicted class index to its name
        predicted_class_name = class_names[predicted_class_index]

        return predicted_class_name
    except Exception as e:
        print(f"Error in classify_image_H1: {e}")
        return "Error"

    
def classify_image_H2(model, image_bytes):
    # Load the image
    img = Image.open(io.BytesIO(image_bytes))
    
    # Convert image to RGB if it has 4 channels (RGBA)
    if img.mode == 'RGBA':
        img = img.convert('RGB')
    
    # Resize the image to match the input size of the model
    img = img.resize((224, 224))

    # Convert image to array and preprocess
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = img_array / 255.0  # Normalize pixel values

    # Make predictions
    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions)
    
    # Retrieve the corresponding class label from class_labels list
    class_labels = ['Process flows','Skeuomorphic web design']
    predicted_class = class_labels[predicted_class_index]

    return predicted_class

def classify_image_H3(model, image_bytes):

    # Convert the binary data to a PIL Image object and preprocess it
    img = Image.open(BytesIO(image_bytes))
    img = img.convert('RGB')  # Ensure 3 channels
    img = img.resize((224, 224))  # Resize to match model's expected input dimensions

    # Convert the PIL Image to a numpy array
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add a batch dimension
    img_array /= 255.0  # Normalize pixel values to [0, 1]

    # Predict the class
    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions, axis=1)[0]

    # Map the predicted class index to its label
    class_labels = {0: 'Back', 1: 'Cancel', 2: 'Close', 3: 'Undo'}
    predicted_class = class_labels[predicted_class_index]

    return predicted_class

# classify_image_H4 function
def classify_image_H4(model, image_data):
    try:
        # Convert image data to PIL Image
        img = Image.open(BytesIO(image_data))
        
        # Resize the image to match the input size of the model
        img = img.resize((224, 224))
        
        # Convert RGBA images to RGB
        if img.mode == 'RGBA':
            img = img.convert('RGB')

        # Convert image to array and normalize pixel values
        img_array = np.array(img) / 255.0
        
        # Add batch dimension
        img_array = np.expand_dims(img_array, axis=0)

        # Make predictions
        predictions = model.predict(img_array)
        
        # Get the predicted class index
        predicted_class_index = np.argmax(predictions)
        
        # Map the class index to the corresponding label
        class_labels_list = ['External Consistency', 'Form Fields']
        predicted_class = class_labels_list[predicted_class_index]

        return predicted_class
    
    except Exception as e:
        print(f"Error in classify_image_H4: {e}")
        return "Error"

def classify_image_H5(model, image_bytes):
    img = Image.open(io.BytesIO(image_bytes))
    img = img.convert('RGB')  # Convert to RGB mode to ensure 3 channels
    img = img.resize((224, 224))  # Resize the image to fit the model's input size
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Convert to a batch of size 1
    img_array = img_array / 255.  # Normalize the image

    # Predict the class probabilities for the image
    prediction = model.predict(img_array)
    
    # Apply softmax to the prediction
    prediction_softmax = tf.nn.softmax(prediction).numpy()
    
    # Get the predicted class index
    predicted_class_index = np.argmax(prediction_softmax)
    
    # Define the class labels based on the generator's class_indices attribute
    class_labels = {0: 'Search Suggestions', 1: 'Confirmation Prompts', 2: 'Form Validation'}  # Update with your class labels
    
    # Get the predicted class label
    predicted_class = class_labels[predicted_class_index]
    
    return predicted_class

def classify_image_H6(model, image_bytes):
    try:
        # Adjust class names to match the H6 model's training setup
        class_names = ['Search Suggestions', 'Tooltips']  # Update class names accordingly

        # Convert the binary data to a bytes stream
        img_stream = BytesIO(image_bytes)

        # Load the image from the bytes stream
        img = load_img(img_stream, target_size=(224, 224))

        # Convert the image to an array
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
        img_array /= 255.0  # Normalize pixel values

        # Make the prediction
        prediction = model.predict(img_array).flatten()

        # For binary classification, TensorFlow typically assigns the first class to 0 and the second to 1
        # Determine the predicted class index based on the prediction score
        predicted_class_index = int(prediction >= 0.5)

        # Map the predicted class index to its name
        predicted_class_name = class_names[predicted_class_index]

        return predicted_class_name
    except Exception as e:
        print(f"Error in classify_image_H6: {e}")
        return "Error"
    
def classify_image_H8(model, image_bytes):
    try:
        # Convert the binary data to a PIL Image object and preprocess it
        img = Image.open(BytesIO(image_bytes))
        img = img.convert('RGB')  # Ensure 3 channels
        img = img.resize((224, 224))  # Resize to match model's expected input dimensions
        
        # Convert the PIL Image to a numpy array
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)  # Add a batch dimension
        img_array /= 255.0  # Normalize pixel values to [0, 1]
        
        # Predict the class
        predictions = model.predict(img_array)
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        
        # Define class names based on the training order
        class_names = ['messy', 'minimalistic']  # Adjust if your training order was different
        predicted_class_name = class_names[predicted_class_index]
        
        return predicted_class_name
    except Exception as e:
        print(f"Error in classify_image_H8: {e}")
        return "Error"    
 

def classify_image_H9(model, image_bytes):
    try:
        # Convert the binary data to a PIL Image object and preprocess it
        img = Image.open(BytesIO(image_bytes))
        img = img.convert('RGB')  # Ensure 3 channels
        img = img.resize((224, 224))  # Resize to match model's expected input dimensions
        
        # Convert the PIL Image to a numpy array
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)  # Add a batch dimension
        img_array /= 255.0  # Normalize pixel values to [0, 1]
        
        # Predict the class
        predictions = model.predict(img_array)
        
        # Extract the predicted class index
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        
        # Update class names for H9 model categories
        class_names = ['Error-msg', 'Form-Validation']  # Reflect the H9 training categories
        predicted_class_name = class_names[predicted_class_index]
        
        return predicted_class_name
    except Exception as e:
        print(f"Error in classify_image_H9: {e}")
        return "Error"

 



