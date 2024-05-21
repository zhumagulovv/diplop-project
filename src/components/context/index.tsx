import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Features {
  display: string;
  safety_system: string;
  comfort: string;
  interior: string;
}

interface TestResults {
  safety: string;
  reliability: string;
  fuel_efficiency: string;
  driving_experience: string;
}

interface Models {
  id: number;
  model: string;
  image: string;
  year: string;
  color: string;
  body_type: string;
  engine: string;
  power: string;
  transmission: string;
  prive: string;
  price: string;
  features: Features;
  test_results: TestResults;
}

interface DataContextType {
  data: Models[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Models[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/models" || "");

        const jsonData: Models[] = await res.json();
        setData(jsonData);

        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(import.meta.env.VITE_SOME_KEY);
  // console.log(import.meta.env);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
