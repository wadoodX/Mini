// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { AuthContextType, AuthContextProviderProps } from "../types/AuthContextTypes";

// Provide a default value for the context
const defaultAuthContext: AuthContextType = {
	user: null,
	loading: true,
	error: null,
	createUser: async () => {
		throw new Error("Error occured while creating user");
	},
	signIn: async () => {
		throw new Error("Error occured while signing in");
	},
	logout: async () => {
		throw new Error("Error occured while logging out");
	},
	setError: () => {},
	clearError: () => {},
};

const UserContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const createUser = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = async (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	const clearError = () => {
		setError(null);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider
			value={{
				createUser,
				user,
				logout,
				signIn,
				loading,
				error,
				clearError,
				setError,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
