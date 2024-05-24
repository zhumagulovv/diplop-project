import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useAppDispatch } from "../../Redux/store";
import { addItem } from "../../Redux/cartSlice/cartSlice";
import { ItemType } from "../../interfaces";

interface DataContextType {
  data: ItemType[] | null;
  loading: boolean;
  error: string | null;
  handleClick: (carId: number) => void;
}

enum contextEnum {
  Error = "API is not a valid string",
  Error_throw = "useData must be used within a DataProvider",
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<ItemType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const apiUrl = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    const fetchData = async () => {
      if (typeof apiUrl !== "string") {
        setError(contextEnum.Error);
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(apiUrl);
        const jsonData: ItemType[] = await res.json();
        setData(jsonData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleClick = (carId: number) => {
    if (data) {
      const foundCar = data.find((car) => car.id === carId);
      if (foundCar) {
        dispatch(
          addItem({
            id: foundCar.id,
            model: foundCar.model,
            price: Number(foundCar.price),
            quantity: 1,
          })
        );
      }
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, error, handleClick }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(contextEnum.Error_throw);
  }
  return context;
};
