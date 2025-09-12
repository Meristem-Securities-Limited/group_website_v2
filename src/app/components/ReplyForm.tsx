"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object({
  comment: yup
    .string()
    .required("Comment is required")
    .min(10, "Comment must be at least 10 characters")
    .max(1000, "Comment must not exceed 1000 characters"),
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email address"),
});

const ReplyForm = ({ isSubmitting = false, submitButtonText = "POST COMMENT" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const handleFormSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Something went wrong");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      reset();

      alert("Form submitted successfully!");
    } catch (error: any) {
      console.error("Form submission error:", error);

      alert(error.message || "Failed to submit the form");
    }
  };

  return (
    <div className={`w-full mt-12`}>
      <div className="mb-8">
        <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold text-gray-900 mb-2">
          Leave a Comment
        </h2>
        <p className="text-sm text-gray-600">Your email address will not be published.</p>
      </div>

      <div className="space-y-6">
        <div>
          <textarea
            {...register("comment")}
            placeholder="Comment"
            rows={8}
            className={`w-full px-4 py-3 border rounded-md resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
              errors.comment
                ? "border-red-300 bg-red-50"
                : "border-gray-300 bg-gray-50 hover:bg-white focus:bg-white"
            }`}
          />
          {errors.comment && <p className="mt-2 text-sm text-red-600">{errors.comment.message}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Name *"
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                errors.name
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300 bg-gray-50 hover:bg-white focus:bg-white"
              }`}
            />
            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                errors.email
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300 bg-gray-50 hover:bg-white focus:bg-white"
              }`}
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmit(handleFormSubmit)}
            disabled={isSubmitting}
            className={`w-full py-4 px-6 text-white font-semibold text-sm tracking-wider rounded-md transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-green-800 focus:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            }`}>
            {isSubmitting ? "POSTING..." : submitButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
