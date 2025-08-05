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

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: "user", text: input };
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
    <Card className="z-[999]  fixed bottom-0 sm:bottom-20 sm:right-10 w-full sm:w-1/4 h-2/3  bg-white rounded-t-lg shadow-lg flex flex-col">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-sm">Flash Bot</h3>
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
          {history.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {renderMessage(msg.text)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

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
            {isModelThinking ? "Thinking..." : "Send"}
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
