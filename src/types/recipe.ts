export interface Recipe {
  id: string;
  title: string;
  submittedBy: string;
  submissionDate: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: string;
  budget: string;
  category: string;
  tags: string[];
  difficulty: string;
  nutritionInfo: string;
  storageInfo: string;
  healthBenefits: string;
  sourceUrl: string;
  imageUrl: string | null;
}
