from rest_framework.decorators import api_view
from rest_framework.response import Response
import joblib
import pandas as pd
import os

# Load trained model
model_path = os.path.join("base", "ml_model", "model.pkl")
model = joblib.load(model_path)

# Allowed categorical values
ALLOWED_STATES = [
  'Gujarat', 'West Bengal', 'Telangana', 'Kerala', 'Haryana',
  'Karnataka', 'Madhya Pradesh', 'Punjab', 'Bihar', 'Rajasthan',
  'Maharashtra', 'Odisha', 'Andhra Pradesh', 'Tamil Nadu', 'Uttar Pradesh'
]
ALLOWED_SOIL_TYPES = ['Alluvial', 'Red', 'Arid', 'Laterite', 'Mountain', 'Black']
ALLOWED_SEASONS = ['Zaid', 'Kharif', 'Rabi']

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

        # 🌾 Return full data for frontend display
        response_data = {
            "crop": prediction,
            "temperature": numeric_data["temperature"],
            "humidity": numeric_data["humidity"],
            "ph": numeric_data["ph"],
            "rainfall": numeric_data["rainfall"],
            "nitrogen": numeric_data["nitrogen"],
            "phosphorus": numeric_data["phosphorus"],
            "potassium": numeric_data["potassium"],
            "state": state,
            "soil_type": soil_type,
            "season": season
        }

        return Response(response_data)

    except Exception as e:
        print("Prediction error:", e)
        return Response({"error": "Invalid input or server error"}, status=400)
