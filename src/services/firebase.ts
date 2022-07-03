
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyBmVADFzoZhX89y0Ec2SnL05dBKczEC6Ks",
	authDomain: "gb-1992-e7092.firebaseapp.com",
	projectId: "gb-1992-e7092",
	storageBucket: "gb-1992-e7092.appspot.com",
	messagingSenderId: "241754379274",
	appId: "1:241754379274:web:512accb7f82ec36244fbf3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
	await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const signIn = async (email: string, password: string) =>
	await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => signOut(firebaseAuth)

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId: string) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId: string) =>
	ref(db, `messages/${chatId}/messageList/`);