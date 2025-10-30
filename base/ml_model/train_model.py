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
