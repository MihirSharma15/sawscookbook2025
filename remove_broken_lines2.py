with open('src/data/recipes.ts', 'r') as f:
    lines = f.readlines()

# Remove lines 7, 8, 9 (0-indexed as 6, 7, 8)
if len(lines) > 8:
    del lines[6:9]  # Remove lines 7, 8, 9

with open('src/data/recipes.ts', 'w') as f:
    f.writelines(lines)

print('Removed more broken lines')