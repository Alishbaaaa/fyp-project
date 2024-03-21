# server.py 
import io
import os
import subprocess
from flask import Flask, request, jsonify
from flask_cors import CORS
from binary import perform_analysis
from test import classify_image_H1,classify_image_H2,classify_image_H3,classify_image_H4,classify_image_H5, classify_image_H6,classify_image_H8,classify_image_H9
from tensorflow.keras.models import load_model
from PIL import Image

app = Flask(__name__)
CORS(app, supports_credentials=True, methods=["GET", "POST"])

# Dictionary to store results
dynamicresults = {}

# Dictionary to store feature ratings
feature_ratings = {
    'H1': {'Invalid Input': 80, 'Loading Indicator': 20},
    'H2': {'Skeuomorphic web design': 50, 'Process flows': 50},
    'H3': {'Back button / arrow': 100, 'Cancel button /arrow': 100, 'Close button / arrow': 100, 'Undo button / arrow': 100},
    'H4': {'External Consistency': 50, 'Form Fields': 50},
    'H5': {'Search Suggestions': 45, 'Confirmation Prompts': 10, 'Form Validation': 45},
    'H6': {'Search Suggestions': 60, 'Tooltips': 40},
    'H8': {'Aesthetic': 100, 'Messy': 0},
    'H9': {'Invalid Input': 50, 'Error message': 50}
}

def run_binary_script(url):

    # Call the perform_analysis function directly
    analysis_result = perform_analysis(url)
    return analysis_result
 
@app.route('/extract', methods=['GET', 'POST'])
def extract():
    if request.method == 'POST':
        data = request.get_json()
        url = data.get('url')

        # Run the binary.py script
        analysis_result = run_binary_script(url)
        print("back in extract function")
        print(f'Result from binary.py: {analysis_result}')

        # Return the result as part of the JSON response
        return jsonify({'result': analysis_result})
    else:
        return "OK", 200


def run_test_script(model, classify_image_func, image_data):
    # Call the classify_image function directly
    predictions = classify_image_func(model, image_data)
    return predictions

# Step 1
@app.route('/upload_e1', methods=['POST'])
def upload_e1():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H2.h5', classify_image_H2),
            ('H4.h5', classify_image_H4),
            ('H8.h5', classify_image_H8)
        ]

        model_ratings = {}
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')

            model_rating = 0
            feature_rating = feature_ratings.get(model_path[:-3], {})  # Get feature ratings for the model
            print(f'Feature ratings for {model_path[:-3]}: {feature_rating}')  # Debugging line
            
            for feature in feature_rating:  # Iterate over feature ratings instead of predictions
                if feature in predictions:  # Check if the feature is predicted
                    model_rating += feature_rating[feature]
                    print(f'Incrementing model rating for {model_path[:-3]} by {feature_rating[feature]}')  # Debugging line

            model_ratings[model_path[:-3]] = model_rating

        # Update dynamicresults with model ratings
        dynamicresults['route1'] = model_ratings
        
        # Return the dynamic results as part of the JSON response
        print(f'Dynamic results: {dynamicresults}')  # Debugging line
        return jsonify({'dynamicresult': dynamicresults})

    except Exception as e:
        # Handle exceptions
        return jsonify({'error': str(e)})

# Step 2   
@app.route('/upload_e2', methods=['POST'])
def upload_e2():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H5.h5', classify_image_H5),
            ('H6.h5', classify_image_H6)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'})   
# Step 3   
@app.route('/upload_e3', methods=['POST'])
def upload_e3():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H2.h5', classify_image_H2)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 
# Step 4  
@app.route('/upload_e4', methods=['POST'])
def upload_e4():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H2.h5', classify_image_H2),
            ('H3.h5', classify_image_H3)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 
# Step 5   
@app.route('/upload_e5', methods=['POST'])
def upload_e5():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H3.h5', classify_image_H3),
            ('H4.h5', classify_image_H4),
            ('H6.h5', classify_image_H6)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'})            
# Step 6   
@app.route('/upload_e6', methods=['POST'])
def upload_e6():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H1.h5', classify_image_H1),
            ('H6.h5', classify_image_H6),
            ('H9.h5', classify_image_H9)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 

#Step 7 
@app.route('/upload_e7', methods=['POST'])
def upload_e7():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H5.h5', classify_image_H5)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        dynamicresults['route7'] = results
        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'})      
    
# Media and News Websites 
# step 1
@app.route('/upload_i1', methods=['POST'])
def upload_i1():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H2.h5', classify_image_H2),
            ('H4.h5', classify_image_H4),
            ('H8.h5', classify_image_H8)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 
    
# Step 2 
@app.route('/upload_i2', methods=['POST'])
def upload_i2():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H5.h5', classify_image_H5),
            ('H6.h5', classify_image_H6)
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'})  
# step 3 - Breadcrumbs one - NEEDS TO BE CHANGED LATER
@app.route('/upload_i3', methods=['POST'])
def upload_i3():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H6.h5', classify_image_H6),
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 
    
# Step 4 
@app.route('/upload_i4', methods=['POST'])
def upload_i4():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H3.h5', classify_image_H3),
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 
# step 5 - for error message detection  
@app.route('/upload_i5', methods=['POST'])
def upload_i5():
    try:
        file = request.files['file']
        image_data = file.read()

        # Model paths and corresponding classify functions
        models_info = [
            ('H9.h5', classify_image_H9),
        ]

        results = []
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')
            results.append(predictions)

        # Return the results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'}) 

# error route 
@app.route('/new_route', methods=['POST'])
def new_route():
    try:
        print(dynamicresults)
        return jsonify(dynamicresults)

    except Exception as e:
        print(f"Error in new_route: {e}")
        return jsonify({'result': 'Error'})

# Final route to return all results
@app.route('/finalresults')
def final_results():
    print(dynamicresults)
    return jsonify(dynamicresults)

if __name__ == '__main__':
    app.run(debug=True)