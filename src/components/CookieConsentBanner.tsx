"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const STORAGE_KEY = "meristem-cookie-consent";
const CONSENT_VERSION = 1;
const REOPEN_EVENT = "meristem:open-cookie-preferences";

type CategoryKey = "necessary" | "functional" | "analytics" | "security" | "marketing";

type ConsentPreferences = Record<CategoryKey, boolean>;

type StoredConsent = ConsentPreferences & {
  version: number;
  updatedAt: string;
};

const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  security: true,
  marketing: false,
};

const ALL_ACCEPTED: ConsentPreferences = {
  necessary: true,
  functional: true,
  analytics: true,
  security: true,
  marketing: true,
};

const ESSENTIAL_ONLY: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  security: true,
  marketing: false,
};

const CATEGORY_DETAILS: Array<{
  key: CategoryKey;
  label: string;
  description: string;
  locked: boolean;
}> = [
  {
    key: "necessary",
    label: "Strictly Necessary",
    description:
      "Required for core functionality such as secure sessions and navigation. Always active.",
    locked: true,
  },
  {
    key: "functional",
    label: "Functional",
    description: "Remembers your preferences, such as language and layout, to improve your experience.",
    locked: false,
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Helps us understand how visitors use the Website so we can improve performance and content.",
    locked: false,
  },
  {
    key: "security",
    label: "Security",
    description: "Supports fraud prevention and account protection. Always active.",
    locked: true,
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Used to deliver relevant advertising and measure campaign effectiveness.",
    locked: false,
  },
];

function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function pushConsentUpdate(preferences: ConsentPreferences) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cookie_consent_update",
    cookie_consent: preferences,
  });
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = readStoredConsent();
    if (!stored) {
      setIsVisible(true);
    } else {
      setPreferences({ ...ESSENTIAL_ONLY, ...stored, necessary: true, security: true });
    }

    const handleReopen = () => {
      const current = readStoredConsent();
      setPreferences(
        current ? { ...ESSENTIAL_ONLY, ...current, necessary: true, security: true } : DEFAULT_PREFERENCES,
      );
      setIsManaging(true);
      setIsVisible(true);
    };

    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen);
  }, []);

  const persist = useCallback((next: ConsentPreferences) => {
    const stored: StoredConsent = {
      ...next,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    pushConsentUpdate(next);
    setPreferences(next);
    setIsVisible(false);
    setIsManaging(false);
  }, []);

  const toggleCategory = (key: CategoryKey) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-2xl border border-emerald-900/10 bg-white shadow-2xl overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#154D34" }}
                  aria-hidden="true">
                  <Cookie className="h-5 w-5 text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold text-gray-900">
                    We use cookies on this Website to improve your experience
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    We use cookies and similar technologies to keep your session secure, remember your
                    preferences, understand how you use our site, and — with your consent — deliver
                    relevant marketing. Some cookies are essential for the Website to work; others require
                    your permission under applicable law. Read our{" "}
                    <Link
                      href="/cookie-policy"
                      className="font-medium text-emerald-900 underline underline-offset-2 hover:text-emerald-700">
                      full Cookie Policy
                    </Link>{" "}
                    to learn more about each category and manage your choices.
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isManaging && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">
                      {CATEGORY_DETAILS.map((category) => (
                        <div
                          key={category.key}
                          className="flex items-start justify-between gap-4 rounded-lg bg-gray-50/60 p-3">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900">{category.label}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-gray-600">
                              {category.description}
                            </p>
                          </div>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={preferences[category.key]}
                            aria-label={`Toggle ${category.label} cookies`}
                            disabled={category.locked}
                            onClick={() => toggleCategory(category.key)}
                            className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors ${
                              preferences[category.key] ? "bg-emerald-800" : "bg-gray-300"
                            } ${category.locked ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}>
                            <span
                              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                                preferences[category.key] ? "translate-x-5" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsManaging((prev) => !prev)}
                  className="text-sm font-medium text-emerald-900 underline underline-offset-2 hover:text-emerald-700 sm:mr-auto">
                  {isManaging ? "Hide Preferences" : "Manage Preferences"}
                </button>

                <button
                  type="button"
                  onClick={() => persist(ESSENTIAL_ONLY)}
                  className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                  Reject Non-Essential
                </button>

                {isManaging ?
                  <button
                    type="button"
                    onClick={() => persist(preferences)}
                    className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ backgroundColor: "#154D34" }}>
                    Save Preferences
                  </button>
                : <button
                    type="button"
                    onClick={() => persist(ALL_ACCEPTED)}
                    className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ backgroundColor: "#154D34" }}>
                    Accept All Cookies
                  </button>
                }
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
