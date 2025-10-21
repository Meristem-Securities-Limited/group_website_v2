"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  error?: boolean;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string().email("Please enter a valid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[\+]?[0-9\s\-\(\)]{10,}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  message: Yup.string()
    .required("Message is required")
    .test("min-words", "Message must be at least 10 words", (value) => {
      if (!value) return false;
      const words = value.trim().split(/\s+/);
      return words.length >= 10;
    })
    .test("max-words", "Message must not exceed 100 words", (value) => {
      if (!value) return true;
      const words = value.trim().split(/\s+/);
      return words.length <= 100;
    }),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const response = await fetch(
        "https://equitymandateapi-y2zn4.ondigitalocean.app/api/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, type: "MWML" }),
        }
      );

      const result: ApiResponse = await response.json();

      if (response.ok) {
        reset();
        toast.success(result.message || "Your message has been sent successfully!");
        return { success: true };
      } else {
        setError("root.serverError", {
          type: "server",
          message: result.message || "Sorry, there was an error sending your message.",
        });
        toast.error(result.message || "Failed to send message. Please try again.");
        return { success: false };
      }
    } catch (error) {
      console.log(error);
      setError("root.serverError", {
        type: "server",
        message: "Sorry, there was an error sending your message. Please try again.",
      });
      toast.error("Failed to send message. Please try again.");
      return { success: false };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
      <div className="space-y-2 mb-9">
        <h3 className="text-4xl font-bold text-emerald-900">Contact Us</h3>
        <p>
          Your satisfaction is our priority. Let&apos;s make sure you have the best experience with
          us.
        </p>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6">
        {errors.root?.serverError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm">{errors.root.serverError.message}</p>
          </div>
        )}

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={9}
            {...register("message")}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
              errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
            placeholder="Tell us how we can help you..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-green text-white py-3 px-6 font-semibold hover:bg-emerald-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

const MeristemContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-19 items-stretch">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-green leading-tight mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-sm lg:text-lg text-primary-green leading-relaxed max-w-xl">
              We’re here to answer your questions, provide expert guidance, and help you navigate
              your financial journey with confidence. Whether you’re looking to invest, seeking
              advice, or want to learn more about our services, our dedicated team at Meristem
              Securities Limited is ready to connect with you and support your goals. Reach out
              today and let’s start a meaningful conversation about your financial future.
            </p>

            {/* Google Map Goes Here */}
            {/* Google Map Embed */}
            <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-emerald-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.527795847617!2d3.4384132758932204!3d6.454604893536882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2f787d07f3%3A0xf3c10f69e84f90de!2sMeristem%20Securities%20Limited!5e0!3m2!1sen!2sng!4v1761057092600!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeristemContactSection;
