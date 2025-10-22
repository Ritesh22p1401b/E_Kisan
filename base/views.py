# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from django.views.decorators.csrf import csrf_exempt
# import numpy as np
# import joblib
# import os


# MODEL_PATH = os.path.join(os.path.dirname(__file__), 'ml_model', 'model.pkl')

# try:
#     model = joblib.load(MODEL_PATH)
#     print("Model loaded successfully.")
# except Exception as e:
#     print(f"Error loading model: {e}")
#     model = None

# @csrf_exempt
# @api_view(['POST'])
# def predict_crop(request):
#     if model is None:
#         return Response({'error': 'Model not loaded'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#     try:
#         data = request.data
#         print("Request data received:", data)  # Debug: see what frontend sends

#         # Convert all inputs to float and handle missing keys
#         temperature = float(data.get('temperature', 0))
#         humidity = float(data.get('humidity', 0))
#         ph = float(data.get('ph', 0))
#         rainfall = float(data.get('rainfall', 0))
#         nitrogen = float(data.get('nitrogen', 0))
#         phosphorus = float(data.get('phosphorus', 0))
#         potassium = float(data.get('potassium', 0))

#         # Prepare input array for model
#         features = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]])

#         # Make prediction
#         predicted_crop = model.predict(features)[0]

#         return Response({'crop': predicted_crop}, status=status.HTTP_200_OK)

#     except Exception as e:
#         print("Prediction error:", e)
#         return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)



# base/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
import joblib
import pandas as pd
import os

# Load trained model
model_path = os.path.join("base", "ml_model", "model.pkl")
model = joblib.load(model_path)

# Allowed categorical values (should match CSV)
ALLOWED_STATES = [
  'Gujarat',
  'West Bengal',
  'Telangana',
  'Kerala',
  'Haryana',
  'Karnataka',
  'Madhya Pradesh',
  'Punjab',
  'Bihar',
  'Rajasthan',
  'Maharashtra',
  'Odisha',
  'Andhra Pradesh',
  'Tamil Nadu',
  'Uttar Pradesh'
]
ALLOWED_SOIL_TYPES = [
  'Alluvial',
  'Red',
  'Arid',
  'Laterite',
  'Mountain',
  'Black'
]
ALLOWED_SEASONS = [
  'Zaid',
  'Kharif',
  'Rabi'
]

@api_view(['POST'])
def predict_crop(request):
    data = request.data
    try:
        # Numeric inputs
        numeric_fields = ['temperature', 'humidity', 'ph', 'rainfall', 'nitrogen', 'phosphorus', 'potassium']
        numeric_data = {}
        for field in numeric_fields:
            value = float(data.get(field))
            numeric_data[field] = value

        # Validate numeric ranges
        if not (0 <= numeric_data['temperature'] <= 60):
            return Response({"error": "Temperature out of range"}, status=400)
        if not (0 <= numeric_data['humidity'] <= 100):
            return Response({"error": "Humidity out of range"}, status=400)
        if not (0 <= numeric_data['ph'] <= 14):
            return Response({"error": "pH out of range"}, status=400)
        if numeric_data['rainfall'] < 0:
            return Response({"error": "Rainfall cannot be negative"}, status=400)

        # Categorical inputs
        state = data.get('state')
        soil_type = data.get('soil_type')
        season = data.get('season')

        if state not in ALLOWED_STATES:
            return Response({"error": f"Invalid state. Allowed: {ALLOWED_STATES}"}, status=400)
        if soil_type not in ALLOWED_SOIL_TYPES:
            return Response({"error": f"Invalid soil type. Allowed: {ALLOWED_SOIL_TYPES}"}, status=400)
        if season not in ALLOWED_SEASONS:
            return Response({"error": f"Invalid season. Allowed: {ALLOWED_SEASONS}"}, status=400)

        # Create DataFrame
        df = pd.DataFrame([{**numeric_data, 'State': state, 'Soil_Type': soil_type, 'Season': season}])

        # One-hot encode categorical features
        df = pd.get_dummies(df, columns=['State', 'Soil_Type', 'Season'])

        # Ensure all columns used in training exist
        for col in model.feature_names_in_:
            if col not in df.columns:
                df[col] = 0

        # Reorder columns to match training
        df = df[model.feature_names_in_]

        # Make prediction
        prediction = model.predict(df)[0]

        return Response({"crop": prediction})

    except Exception as e:
        print("Prediction error:", e)
        return Response({"error": "Invalid input or server error"}, status=400)
