with open('src/data/recipes.ts', 'r') as f:
    content = f.read()

# Fix by merging the broken line back into the nutritionInfo string
content = content.replace(
    'Sugars 0g | Protein 31g"\nProtein 31g", storageInfo:',
    'Sugars 0g | Protein 31g", storageInfo:'
)

with open('src/data/recipes.ts', 'w') as f:
    f.write(content)

print('Fixed by merging broken nutritionInfo content')