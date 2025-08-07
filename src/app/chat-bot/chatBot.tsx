"use client";
import Image from "next/image";
import { useState, useTransition, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "./components/card";
import { Input } from "./components/input";
import { Button } from "./components/button";
import axios from "axios";

export type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const renderMessage = (text: string) => <ReactMarkdown>{text}</ReactMarkdown>;

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [sessionId, setSessionId] = useState("");
  const [isModelThinking, setTransition] = useTransition();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getSessionId = () => {
    return Math.random().toString(36).substring(2, 14);
  };

  useEffect(() => {
    const sessionId = getSessionId();
    setSessionId(sessionId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".chat-bot")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  async function handleSubmit({
    chatInput,
    sessionId,
  }: {
    chatInput: string;
    sessionId: string;
  }) {
    try {
      const res = await fetch("/api/chat-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput,
          sessionId,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        return data.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSend = async (msg?: string) => {
    if (!input.trim() && !msg) return;

    const userMessage: ChatMessage = { role: "user", text: msg ?? input };
    setHistory((prev) => [...prev, userMessage]);
    setInput("");

    try {
      setTransition(async () => {
        const botReply = await handleSubmit({
          chatInput: input,
          sessionId,
        });
        const botMessage: ChatMessage = {
          role: "model",
          text: botReply,
        };
        setHistory((prev) => [...prev, botMessage]);
      });
    } catch (e) {
      console.log(e, "error");
    }
  };

  return open ? (
    <Card className="chat-bot z-[999] fixed bottom-0 sm:bottom-20 sm:right-10 w-full sm:w-1/4 h-2/3  bg-white rounded-t-lg shadow-lg flex flex-col">
      <CardContent className="p-4 flex flex-col h-full px-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-end justify-center gap-2">
            <Image
              src="/assets/icons/robot.svg"
              width={40}
              height={40}
              alt="Robot icon"
            />
            <h3 className="font-semibold text-lg">FLasH Bot</h3>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Image
              src="/assets/icons/close.svg"
              width={20}
              height={20}
              alt="Close icon"
            />
          </button>
        </div>

        {/* Messages container - takes remaining space and scrolls */}
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto bg-muted rounded p-3 mb-4">
          {history.length === 0 && (
            <span className="text-muted-foreground text-sm">
              Start the conversation...
            </span>
          )}
          {history.map((msg, idx) => {
            return (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 max-w-xs break-words border-2 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground  rounded-br-xl rounded-l-xl"
                      : "bg-secondary text-secondary-foreground rounded-r-xl rounded-bl-xl"
                  } ${msg.role === "model" ? "bg-gray-100" : ""}`}
                >
                  {renderMessage(msg.text)}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        {/* <div className="pb-2 flex gap-2 cursor-pointer chat-bot">
          {history.length < 1 &&
            ["Hai", "About Rishvan"].map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    handleSend(e);
                  }}
                  className="p-1 rounded-lg border w-max"
                >
                  {e}
                </div>
              );
            })}
        </div> */}

        {isModelThinking && (
          <div className="flex items-center space-x-1  p-4 font-extrabold text-gray-300">
            <span className="">Typing . . .</span>
          </div>
        )}

        {/* Input form - fixed at bottom */}
        <form
          className="flex gap-2"
          onSubmit={async (e) => {
            e.preventDefault();
            await handleSend();
          }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isModelThinking}
            className="flex-1"
          />
          <Button type="submit" disabled={isModelThinking || !input.trim()}>
            <Image
              src="/assets/icons/send.svg"
              width={20}
              height={20}
              alt="Close icon"
            />
          </Button>
        </form>
      </CardContent>
    </Card>
  ) : (
    <div
      onClick={() => setOpen(true)}
      className="z-[999] fixed bottom-20 sm:bottom-32 right-4 sm:right-10 w-[60px] h-[60px] bg-white rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
    >
      <Image
        src="/assets/icons/chat.svg"
        width={30}
        height={30}
        alt="Chat icon"
      />
    </div>
  );
};

export default ChatBot;
