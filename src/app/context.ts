import { createContext, Dispatch, SetStateAction } from "react";

type CodeContextType = { code: string; setCode: Dispatch<SetStateAction<string>>};

export const CodeContext = createContext<CodeContextType>({ code: '', setCode: () => {} }	);