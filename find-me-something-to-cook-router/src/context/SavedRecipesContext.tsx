import { createContext, useContext, useState } from 'react';
import { Recipe } from '../types';

type SavedRecipesContextType = {
    savedRecipes: Recipe[];
    setSavedRecipes: (recipes: Recipe[]) => void;
};

const SavedRecipesContext = createContext<SavedRecipesContextType | null>(null);

export function SavedRecipesProvider({ children }: { children: React.ReactNode }) {
    const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

    return (
        <SavedRecipesContext.Provider value={{ savedRecipes, setSavedRecipes }}>
            {children}
        </SavedRecipesContext.Provider>
    );
}

export function useSavedRecipes() {
    const ctx = useContext(SavedRecipesContext);
    if (!ctx) throw new Error("useSavedRecipes must be used inside SavedRecipesProvider");
    return ctx;
}
