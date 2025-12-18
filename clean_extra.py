with open('src/data/recipes.ts', 'r') as f:
    content = f.read()

# Remove the extra content after the nutritionInfo
content = content.replace(
    'nutritionInfo: "Calories 330 | Calories from fat 190 | Total fat 21g | Cholesterol 85mg | Sodium 90mg | Carbohydrate 1g | Dietary Fiber 0g | Sugars 0g | Protein 31g", Calories from fat 190',
    'nutritionInfo: "Calories 330 | Calories from fat 190 | Total fat 21g | Cholesterol 85mg | Sodium 90mg | Carbohydrate 1g | Dietary Fiber 0g | Sugars 0g | Protein 31g"'
)

with open('src/data/recipes.ts', 'w') as f:
    f.write(content)

print('Cleaned extra content after nutritionInfo')