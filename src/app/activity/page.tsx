"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import data from "../../data/data.json";

const [{ activities }] = data;

export default function ActivityPage() {
  return (
    <div className="max-h-screen text-white">
      <Header title="Activity" />
      <div className="max-w-5xl mx-auto px-6 py-12 h-[90vh] overflow-y-scroll">
        <h1 className="text-4xl font-bold mb-3">Activities</h1>
        <p className="text-gray-100 mb-10">
          Updates, articles, and side projects that keep me learning.
        </p>

        {activities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg p-5 border border-gray-100"
              >
                <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-2">
                  {activity.tag}
                </span>
                <h2 className="text-xl text-black font-semibold mb-2">
                  {activity.title}
                </h2>
                <p className="text-sm text-gray-800 mb-3">{activity.date}</p>
                <p className="text-gray-800 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-800">
            No updates right now — but exciting things are coming soon!
          </div>
        )}
      </div>
    </div>
  );
}
