import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  InfoIcon,
  Linkedin,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, PROFILE } from "@/polymet/data/portfolio-data";
import { Reveal } from "@/polymet/components/reveal";
import { ActionButton, ActionLink } from "@/polymet/components/action-link";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write a message of at least 10 characters.")
    .max(2000, "Please keep your message under 2000 characters."),
});

type FormValues = z.infer<typeof schema>;

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message ? (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 overflow-hidden pt-1.5 text-xs text-destructive"
          role="alert"
        >
          <AlertCircleIcon className="h-3.5 w-3.5 shrink-0" /> {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

const fieldClass =
  "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus:outline-none focus:ring-4";

export function ContactSection() {
  const hasEmail = PROFILE.email.trim().length > 0;
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    if (!web3FormsAccessKey) {
      setStatus("error");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", web3FormsAccessKey);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldTone = (hasError: boolean) =>
    hasError
      ? "border-destructive/60 focus:border-destructive focus:ring-destructive/15"
      : "border-white/10 hover:border-white/20 focus:border-primary/60 focus:ring-primary/15";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-primary">07</span>
              <span className="h-px w-8 bg-gradient-to-r from-primary/60 to-transparent" />
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="contact-heading"
              className="text-balance text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              Have a project <span className="text-gradient">in mind?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              {CONTACT.text}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-3">
            <ActionButton variant="primary" onClick={() => setFocus("name")}>
              Let's Talk
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ActionButton>
            {hasEmail ? (
              <ActionLink variant="secondary" href={`mailto:${PROFILE.email}`}>
                <MailIcon className="h-4 w-4" /> Email Me
              </ActionLink>
            ) : (
              <ActionButton
                variant="secondary"
                onClick={() => setFocus("email")}
              >
                <MailIcon className="h-4 w-4" /> Email Me
              </ActionButton>
            )}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <MailIcon className="h-4 w-4 text-primary" />
                {PROFILE.email}
              </a>

              <a
                href={`tel:${PROFILE.phone}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <PhoneIcon className="h-4 w-4 text-primary" />
                {PROFILE.phone}
              </a>

              <a
                href={PROFILE.socials[0]?.href ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                {PROFILE.socials[0]?.label ?? "LinkedIn"}
              </a>

              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4 text-primary" />
                {PROFILE.location}
                <span
                  className="h-1 w-1 rounded-full bg-muted-foreground/50"
                  aria-hidden="true"
                />
                Open to remote
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            id="contact-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            aria-describedby={status !== "idle" ? "form-status" : undefined}
            className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-card/50 p-6 backdrop-blur-sm sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "cf-name-error" : undefined}
                    className={cn(fieldClass, fieldTone(Boolean(errors.name)))}
                    {...register("name")}
                  />
                  <FieldError
                    id="cf-name-error"
                    message={errors.name?.message}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "cf-email-error" : undefined
                    }
                    className={cn(fieldClass, fieldTone(Boolean(errors.email)))}
                    {...register("email")}
                  />
                  <FieldError
                    id="cf-email-error"
                    message={errors.email?.message}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cf-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="cf-message"
                  rows={6}
                  placeholder="Tell me about your project, timeline and goals…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "cf-message-error" : undefined
                  }
                  className={cn(
                    fieldClass,
                    "resize-none",
                    fieldTone(Boolean(errors.message)),
                  )}
                  {...register("message")}
                />
                <FieldError
                  id="cf-message-error"
                  message={errors.message?.message}
                />
              </div>

              <ActionButton
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
              >
                Submit
                <SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </ActionButton>

              <AnimatePresence>
                {status !== "idle" && (
                  <motion.div
                    id="form-status"
                    role="status"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-muted-foreground"
                  >
                    <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {status === "sent"
                      ? "Thanks for reaching out. Your message has been sent successfully."
                      : "Something went wrong while sending your message. Please try again or use the email link instead."}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
