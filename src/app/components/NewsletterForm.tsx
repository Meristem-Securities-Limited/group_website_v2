"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object({
  email: yup.string().required("Email is required").email("Please enter a valid email address"),
});

const NewsletterForm = ({ isSubmitting = false, submitButtonText = "SUBMIT" }) => {
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
    <div className={`lg:w-2xl mx-auto relative`}>
      <div className="flex lg:flex-row flex-col items-center gap-4 relative">
        <div className="w-full">
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className={`w-full px-4 py-4 border focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors ${
              errors.email
                ? "border-red-300 bg-red-50"
                : "border-gray-300 bg-gray-50 hover:bg-white focus:bg-white"
            }`}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div className="w-auto">
          <button
            onClick={handleSubmit(handleFormSubmit)}
            disabled={isSubmitting}
            className={`py-4 px-9 text-white font-semibold text-sm transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-900 hover:bg-green-800 focus:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            }`}>
            {isSubmitting ? "SUBMITTING..." : submitButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
