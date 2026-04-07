"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  formId: string;
  locale: string;
  compact?: boolean;
  emailOnly?: boolean;
  theme?: "light" | "dark";
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  companyStatus: "I want to open a new company",
  companyName: "",
  note: "",
  consent: false,
};

export function LeadForm({
  formId,
  locale,
  compact = false,
  emailOnly = false,
  theme = "light",
  title = "Book your first call",
  description = "Share a few details and the GMAP Associates team will contact you to arrange the next step.",
  buttonLabel = "Book your first call",
}: LeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState(initialState);

  const isDark = theme === "dark";
  const shellClassName = isDark
    ? "border-white/12 bg-white/6 text-white backdrop-blur"
    : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-soft)]";
  const controlClassName = isDark
    ? "border-white/12 bg-white/8 text-white placeholder:text-white/45 focus:border-white/30"
    : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] focus:border-[var(--accent)]";
  const mutedClassName = isDark ? "text-white/68" : "text-[var(--muted-foreground)]";
  const consentClassName = isDark
    ? "border-white/12 bg-white/8"
    : "border-[var(--border)] bg-[var(--surface-muted)]";
  const isEmailOnlyCompact = emailOnly;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div
        id={formId}
        className={
          isEmailOnlyCompact
            ? "mx-auto max-w-[32rem] text-left"
            : `rounded-[var(--radius-lg)] border p-6 sm:p-7 ${shellClassName}`
        }
      >
        <p className={`text-sm font-medium uppercase tracking-[0.16em] ${mutedClassName}`}>
          Thank you
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          Your request has been received
        </h3>
        <p className={`mt-4 text-base leading-7 ${mutedClassName}`}>
          Thank you. We will contact you to schedule the first call and guide you
          through the next steps.
        </p>
        <p className={`mt-6 text-sm ${mutedClassName}`}>Locale: {locale.toUpperCase()}</p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className={
        isEmailOnlyCompact
          ? "mx-auto max-w-[32rem]"
          : `rounded-[var(--radius-lg)] border p-5 sm:p-7 ${shellClassName}`
      }
    >
      {isEmailOnlyCompact ? null : (
        <div className="mb-6">
          <p className={`text-sm font-medium uppercase tracking-[0.16em] ${mutedClassName}`}>
            Lead form
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>
          <p className={`mt-3 text-sm leading-6 ${mutedClassName}`}>{description}</p>
        </div>
      )}

      <div className={`grid ${compact ? "gap-4" : "gap-4"}`}>
        {!emailOnly ? (
          <label className="grid gap-2">
            <span className="text-sm font-medium">Full name</span>
            <input
              required
              value={values.fullName}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  fullName: event.target.value,
                }))
              }
              className={`min-h-12 rounded-[var(--radius-sm)] border px-4 outline-none transition ${controlClassName}`}
            />
          </label>
        ) : null}

        <label className="grid gap-2">
          {isEmailOnlyCompact ? null : <span className="text-sm font-medium">Email</span>}
          <input
            type="email"
            required
            placeholder={isEmailOnlyCompact ? "Your email" : undefined}
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
            className={`min-h-14 rounded-[var(--radius-sm)] border px-5 outline-none transition ${isEmailOnlyCompact ? "border-[#aab7c8] bg-white text-[var(--foreground)] placeholder:text-[#9aacbc] focus:border-[var(--accent)]" : controlClassName}`}
          />
        </label>

        {!compact && !emailOnly ? (
          <>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Phone number</span>
              <input
                type="tel"
                required
                value={values.phone}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
                className={`min-h-12 rounded-[var(--radius-sm)] border px-4 outline-none transition ${controlClassName}`}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium">Company status</span>
              <select
                required
                value={values.companyStatus}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    companyStatus: event.target.value,
                  }))
                }
                className={`min-h-12 rounded-[var(--radius-sm)] border px-4 outline-none transition ${controlClassName}`}
              >
                <option>I want to open a new company</option>
                <option>I already have a company</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium">Company name</span>
              <input
                value={values.companyName}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    companyName: event.target.value,
                  }))
                }
                className={`min-h-12 rounded-[var(--radius-sm)] border px-4 outline-none transition ${controlClassName}`}
              />
              <span className={`text-xs ${mutedClassName}`}>Optional</span>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium">Short note</span>
              <textarea
                rows={4}
                value={values.note}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    note: event.target.value,
                  }))
                }
                className={`rounded-[var(--radius-sm)] border px-4 py-3 outline-none transition ${controlClassName}`}
              />
              <span className={`text-xs ${mutedClassName}`}>Optional</span>
            </label>
          </>
        ) : null}

        <label
          className={
            isEmailOnlyCompact
              ? "flex items-start gap-3"
              : `flex items-start gap-3 rounded-[var(--radius-sm)] border p-4 ${consentClassName}`
          }
        >
          <input
            type="checkbox"
            required
            checked={values.consent}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                consent: event.target.checked,
              }))
            }
            className={`mt-1 h-5 w-5 rounded ${isEmailOnlyCompact ? "border-[#aab7c8]" : ""}`}
          />
          <span
            className={`text-sm leading-6 ${
              isEmailOnlyCompact ? "text-[var(--foreground)]" : mutedClassName
            }`}
          >
            I accept the privacy policy and consent to being contacted about my
            request.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className={`mt-6 inline-flex min-h-14 w-full items-center justify-center ${
          isEmailOnlyCompact ? "rounded-[0.875rem] text-base" : "rounded-full text-sm"
        } px-5 py-3 font-medium transition bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)]`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
