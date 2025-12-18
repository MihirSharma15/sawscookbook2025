const fs = require('fs');

try {
  const content = fs.readFileSync('src/data/recipes.ts', 'utf8');
  const start = content.indexOf('export const recipes: Recipe[] = [');
  const end = content.lastIndexOf('];');
  const dataPart = content.substring(start + 'export const recipes: Recipe[] = ['.length, end);
  const imports = content.substring(0, start);

  // Replace semicolons in nutritionInfo with pipes
  const fixedData = dataPart.replace(/nutritionInfo: `([^`]*)`/g, (match, content) => {
    return 'nutritionInfo: `' + content.replace(/; /g, ' | ') + '`';
  });

  const fixedContent = imports + 'export const recipes: Recipe[] = [' + fixedData + '];';
  fs.writeFileSync('src/data/recipes_fixed.ts', fixedContent);
  console.log('Fixed file written');
} catch (e) {
  console.error('Error:', e.message);
}