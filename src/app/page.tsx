import { Metadata } from "next";
import ChatBot from "./chat-bot/chatBot";
import HomePage from "./home/home";

export default function Home() {
  return (
    <>
      <HomePage />
      <ChatBot />
    </>
  );
}
