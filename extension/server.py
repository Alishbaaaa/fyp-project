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

# Dictionary to store feature ratings and found/not-found indicators
feature_ratings = {
    'H1': {'Invalid Input': [80, 0], 'Loading Indicator': [20, 0]},
    'H2': {'Skeuomorphic web design': [50, 0], 'Process flows': [50, 0]},
    'H3': {'Back': [50, 0], 'Cancel': [50, 0], 'Close': [50, 0], 'Undo': [50, 0]},
    'H4': {'External Consistency': [50, 0], 'Form Fields': [50, 0]},
    'H5': {'Search Suggestions': [45, 0], 'Confirmation Prompts': [10, 0], 'Form Validation': [45, 0]},
    'H6': {'Search Suggestions': [60, 0], 'Tooltips': [40, 0]},
    'H8': {'minimalistic': [100, 0], 'messy': [50, 0]},
    'H9': {'Form-Validation': [50, 0], 'Error-msg': [50, 0]}
}
# not_present ={}

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

def process_upload(route_name, models_info, file):
    try:
        image_data = file.read()

        results = {}
        for model_path, classify_func in models_info:
            model = load_model(model_path)
            predictions = classify_func(model, image_data)  # Call the classification function directly
            print(f'Result from {model_path}: {predictions}')

            feature_rating = {}
            existing_ratings = feature_ratings.get(model_path[:-3], {})  # Existing feature ratings
            for feature in existing_ratings:
                # Set the value to 1 if the feature is already 1 or predicted, otherwise set it to 0
                feature_rating[feature] = 1 if existing_ratings[feature] == 1 or feature in predictions else 0

            results[model_path[:-3]] = feature_rating

        # Update dynamicresults with model ratings
        dynamicresults[route_name] = results

        # Return the dynamic results as part of the JSON response
        return jsonify({'dynamicresult': results})

    except Exception as e:
        print(f"Error in upload: {e}")
        return jsonify({'result': 'Error'})


@app.route('/upload_e1', methods=['POST'])
def upload_e1():
    models_info = [
        ('H2.h5', classify_image_H2),
        ('H4.h5', classify_image_H4),
        ('H8.h5', classify_image_H8)
    ]
    return process_upload('route1', models_info, request.files['file'])


@app.route('/upload_e2', methods=['POST'])
def upload_e2():
    models_info = [
        ('H5.h5', classify_image_H5),
        ('H6.h5', classify_image_H6)
    ]
    return process_upload('route2', models_info, request.files['file'])


@app.route('/upload_e3', methods=['POST'])
def upload_e3():
    models_info = [
        ('H2.h5', classify_image_H2)
    ]
    return process_upload('route3', models_info, request.files['file'])

# Step 4  
@app.route('/upload_e4', methods=['POST'])
def upload_e4():
    models_info = [
        ('H2.h5', classify_image_H2),
        ('H3.h5', classify_image_H3)
    ]
    return process_upload('route4', models_info, request.files['file'])

# Step 5   
@app.route('/upload_e5', methods=['POST'])
def upload_e5():
    models_info = [
        ('H3.h5', classify_image_H3),
        ('H4.h5', classify_image_H4),
        ('H6.h5', classify_image_H6)
    ]
    return process_upload('route5', models_info, request.files['file'])

# Step 6   
@app.route('/upload_e6', methods=['POST'])
def upload_e6():
    models_info = [
        ('H1.h5', classify_image_H1),
        ('H5.h5', classify_image_H5),
        ('H6.h5', classify_image_H6),
        ('H9.h5', classify_image_H9)
    ]
    return process_upload('route6', models_info, request.files['file'])

# Step 7   
@app.route('/upload_e7', methods=['POST'])
def upload_e7():
    models_info = [
        ('H5.h5', classify_image_H5)
    ]
    return process_upload('route7', models_info, request.files['file'])   
    
# Media and News Websites 
# step 1
@app.route('/upload_i1', methods=['POST'])
def upload_i1():

        # Model paths and corresponding classify functions
        models_info = [
            ('H2.h5', classify_image_H2),
            # ('H4.h5', classify_image_H4),
            # ('H8.h5', classify_image_H8)
        ]

        return process_upload('route1', models_info, request.files['file'])
# Step 2 
@app.route('/upload_i2', methods=['POST'])
def upload_i2():

        # Model paths and corresponding classify functions
        models_info = [
            # ('H5.h5', classify_image_H5),
            ('H6.h5', classify_image_H6)
        ]
        return process_upload('route2', models_info, request.files['file'])

@app.route('/upload_i3', methods=['POST'])
def upload_i3():
 
        # Model paths and corresponding classify functions
        models_info = [
            ('H6.h5', classify_image_H6),
        ]

        return process_upload('route3', models_info, request.files['file'])
    
# Step 4 
@app.route('/upload_i4', methods=['POST'])
def upload_i4():
        # Model paths and corresponding classify functions
        models_info = [
            ('H3.h5', classify_image_H3),
        ]

        return process_upload('route4', models_info, request.files['file'])
# step 5 - for error message detection  
@app.route('/upload_i5', methods=['POST'])
def upload_i5():
        # Model paths and corresponding classify functions
        models_info = [
            ('H9.h5', classify_image_H9),
        ]
        return process_upload('route5', models_info, request.files['file'])


# Final route to return all results for ecommerce
@app.route('/finalresults')
def final_results():
    print(dynamicresults)

    # Iterate over each route in dynamic_results
    for route, models in dynamicresults.items():
        # Iterate over each model in the current route
        for model, features in models.items():
            # Iterate over each feature in the current model
            for feature, present in features.items():
                # Check if the feature is present in the feature_ratings dictionary
                if feature in feature_ratings.get(model, {}):
                    # Update the feature indicator to 1 if it's found in the current route
                    if present == 1:
                        feature_ratings[model][feature][1] = 1
    # Print the updated feature_ratings dictionary
    print("Updated feature_ratings:")
    print(feature_ratings)
    
    evaluation_result = {}

    # Iterate over each model in the feature_ratings dictionary
    for model, features in feature_ratings.items():
        # Create a new entry in evaluation_result for the current model
        evaluation_result[model] = {}
        
        # Iterate over each feature in the current model
        for feature, rating_list in features.items():
            # Extract the rating from the rating list
            rating = rating_list[1]
            # Assign the rating to the feature in the evaluation_result dictionary
            evaluation_result[model][feature] = rating

    # Print the evaluation_result dictionary
    print("evaluation_result:")
    print(evaluation_result)

    # features_with_0 = [feature_name for features in feature_ratings.values() for feature_name, (_, rating) in features.items() if rating == 0]
    # features_with_1 = [feature_name for features in feature_ratings.values() for feature_name, (_, rating) in features.items() if rating == 1]

    # print("Features with a rating of 0:")
    # print(features_with_0)

    # print("\nFeatures with a rating of 1:")
    # print(features_with_1)

    # Initialize a dictionary to store the model ratings
    model_ratings = {}
    # Iterate over each model in the feature_ratings dictionary
    for model, features in feature_ratings.items():
        total_rating = 0  # Initialize the total rating for the model
        total_possible_rating = 0  # Initialize the total possible rating for the model
        
        # Iterate over each feature and its rating in the current model
        for feature, rating_info in features.items():
            feature_rating, present = rating_info
            total_possible_rating += feature_rating  # Increment total possible rating by the feature rating
            
            # If the feature is present, add its rating to the total rating of the model
            if present == 1:
                total_rating += feature_rating
        # total_possible_rating = 100 
        # Calculate the model rating as a percentage
        if total_possible_rating != 0:
            model_rating = (total_rating / total_possible_rating) * 100
        else:
            model_rating = 0  # If no features are present, set model rating to 0
        
        # Round the model rating to one decimal place
        model_rating = round(model_rating, 1)
        
        # Store the model rating in the model_ratings dictionary
        model_ratings[model] = model_rating

    # Print the individual model ratings
    print("Individual Model Ratings:")
    for model, rating in model_ratings.items():
        print(f"{model}: {rating}%")
        
    # Define the usability principles and their associated models
    usability_principles = {
        'Accessibility': ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H8', 'H9'],
        'Efficiency': ['H1', 'H2', 'H4', 'H5', 'H6'],
        'Memorability': ['H4', 'H6'],
        'Learnability': ['H2', 'H3', 'H4', 'H5', 'H6']
        
    }

    # Initialize dictionaries to store the ratings for each usability principle
    accessibility_rating = 0
    efficiency_rating = 0
    memorability_rating = 0
    learnability_rating = 0
    # Iterate over each usability principle
    for principle, models in usability_principles.items():
        # Extract the individual model ratings for the current usability principle
        principle_model_ratings = [model_ratings[model] for model in models if model in model_ratings]

        # Compute the rating for the current usability principle
        if principle_model_ratings:
            principle_rating = sum(principle_model_ratings) / len(principle_model_ratings)
        else:
            principle_rating = 0  # Default to 0 if no models are present for the principle

        # Round the principle rating to one decimal place
        principle_rating = round(principle_rating, 1)

        # Store the rating in the corresponding variable
        if principle == 'Accessibility':
            accessibility_rating = principle_rating
        elif principle == 'Efficiency':
            efficiency_rating = principle_rating
        elif principle == 'Memorability':
            memorability_rating = principle_rating
        elif principle == 'Learnability':
            learnability_rating = principle_rating

        # # Print the rating
        # print(f"{principle} Rating: {principle_rating}%")

    # Print the ratings for all usability principles
    print(f"Accessibility Rating: {accessibility_rating}%")
    print(f"Efficiency Rating: {efficiency_rating}%")
    print(f"Memorability Rating: {memorability_rating}%") 
    print(f"Learnability Rating: {learnability_rating}%")  
    
    # Append the ratings for each usability principle to the model_ratings dictionary
    model_ratings['Accessibility Rating'] = accessibility_rating
    model_ratings['Efficiency Rating'] = efficiency_rating
    model_ratings['Memorability Rating'] = memorability_rating
    model_ratings['Learnability Rating'] = learnability_rating   

    # Compute the overall usability score as the average of all usability principle ratings
    overall_usability_score = (accessibility_rating + efficiency_rating + memorability_rating + learnability_rating) / 4

    # Round the overall usability score to one decimal place
    overall_usability_score = round(overall_usability_score, 1)

    # Append the overall usability score to the model_ratings dictionary
    model_ratings['Overall Usability Score'] = overall_usability_score
    # Print the overall usability score
    print(f"\nOverall Usability Score: {overall_usability_score}%")

    # Compute the overall score as the average of all model ratings
    overall_score = sum(model_ratings.values()) / len(model_ratings)

    # Round the overall score to one decimal place
    overall_score = round(overall_score, 1)

    # Append the overall score to the model_ratings dictionary
    # model_ratings['Overall Score'] = overall_score

    # Print the overall score
    # print(f"\nOverall Score: {overall_score}%")
    # model_ratings['Not Present'] = not_present
    
    # print("Not Present", model_ratings['Not Present'])
    # model_ratings['Not Present'] =features_with_0
    # model_ratings['Present'] = features_with_1
    model_ratings['Evaluation_Result'] = evaluation_result
    
    # Return the model ratings and overall score as part of the JSON response
    return jsonify(model_ratings)



if __name__ == '__main__':
    app.run(debug=True)