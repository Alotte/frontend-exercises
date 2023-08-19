import React, { createContext, useContext, useState } from 'react'


type Theme = 'light' | 'dark';

const ThemeContext = createContext<{theme: Theme; toggleTheme: () => void;} | undefined>(undefined);

type ThemeProviderProps = {
    children: React.ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value= {{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )

}

//The hook for accessing the context (Optional)
const useThemeContext = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
      throw new Error('You are using the useThemeContext outside of a ThemeProvider');
    }
    
    return context;
}

export {ThemeProvider};
export {useThemeContext};

