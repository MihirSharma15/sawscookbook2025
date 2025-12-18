import re

with open('src/data/recipes.ts', 'r') as f:
    content = f.read()

# Replace semicolons in nutritionInfo with pipe separators for both backtick and regular quotes
def fix_nutrition_info_backtick(match):
    nutrition_text = match.group(1)
    # Replace semicolons with pipe separators
    fixed_text = nutrition_text.replace('; ', ' | ')
    return f'nutritionInfo: `{fixed_text}`'

def fix_nutrition_info_quotes(match):
    nutrition_text = match.group(1)
    # Replace semicolons with pipe separators
    fixed_text = nutrition_text.replace('; ', ' | ')
    return f'nutritionInfo: "{fixed_text}"'

# Apply the fixes for both types of quotes
fixed_content = re.sub(r'nutritionInfo: `([^`]*)`', fix_nutrition_info_backtick, content)
fixed_content = re.sub(r'nutritionInfo: "([^"]*)"', fix_nutrition_info_quotes, fixed_content)

with open('src/data/recipes.ts', 'w') as f:
    f.write(fixed_content)

print('Fixed nutritionInfo semicolons with pipe separators')