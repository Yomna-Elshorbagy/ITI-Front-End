import React from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "./UI/Card/Card.jsx";
import { Button } from "./UI/Button/Button.jsx";

const blogs = [
  {
    id: 1,
    title: "Mastering React in 2025",
    description:
      "Explore the latest features of React, including concurrent rendering and optimized state management techniques.",
    author: "Jane Doe",
    date: "Sep 12, 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "UI/UX Trends You Can’t Miss",
    description:
      "Discover modern design principles shaping the digital experiences of tomorrow.",
    author: "John Smith",
    date: "Sep 10, 2025",
    image:
      "https://images.unsplash.com/photo-1507209696998-3c532be9b2b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    description:
      "A guide to structuring, securing, and scaling your backend services effectively.",
    author: "Emily Carter",
    date: "Sep 05, 2025",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b892b3f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Latest Blogs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest insights in technology, design, and
          development. Learn from experts and level up your skills.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition rounded-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-5">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User size={16} /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {blog.date}
                  </span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
