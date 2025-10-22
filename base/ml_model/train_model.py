# # train_model.py
# import pandas as pd
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier
# import joblib
# import os

# # Paths
# model_dir = os.path.join("base", "ml_model")
# os.makedirs(model_dir, exist_ok=True)
# model_path = os.path.join(model_dir, "model.pkl")
# csv_path = os.path.join(model_dir, "crop_data_1000.csv")  # Ensure this path is correct

# # Load dataset
# df = pd.read_csv(csv_path)

# # Strip any extra spaces from column names
# df.columns = df.columns.str.strip()

# # Rename columns to match frontend if needed
# rename_map = {
#     'Nitrogen': 'nitrogen',
#     'Phosphorus': 'phosphorus',
#     'Potassium': 'potassium',
#     'Temperature': 'temperature',
#     'Humidity': 'humidity',
#     'pH': 'ph',
#     'Rainfall': 'rainfall',
#     'Crop': 'Crop'
# }
# df = df.rename(columns=rename_map)

# # Check that all required features exist
# required_features = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall']
# missing = [col for col in required_features if col not in df.columns]
# if missing:
#     raise ValueError(f"Missing columns in CSV: {missing}")

# # Select features and target
# X = df[required_features]
# y = df["Crop"]

# # Split data
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Train RandomForestClassifier
# model = RandomForestClassifier(n_estimators=100, random_state=42)
# model.fit(X_train, y_train)

# # Verify model feature count
# print("Model trained. Number of input features:", model.n_features_in_)  # Should be 7

# # Save model
# joblib.dump(model, model_path)
# print("Model trained and saved successfully at:", model_path)





# base/ml_model/train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

# Load dataset
df = pd.read_csv("base/ml_model/crop_data_1000.csv")

# Features to use
numeric_features = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall']
categorical_features = ['State', 'Soil_Type', 'Season']

# One-hot encode categorical features
df = pd.get_dummies(df, columns=categorical_features)

# Combine numeric and encoded categorical features
X = df.drop(columns=["Crop"])
y = df["Crop"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train RandomForest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model
model_dir = os.path.join("base", "ml_model")
os.makedirs(model_dir, exist_ok=True)
model_path = os.path.join(model_dir, "model.pkl")
joblib.dump(model, model_path)

print("Model trained and saved successfully at:", model_path)
print("Model features:", model.feature_names_in_)
