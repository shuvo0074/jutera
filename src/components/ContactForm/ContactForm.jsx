import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../Button/Button'
import { markets } from '../../data/features'

const initial = {
  name: '',
  company: '',
  country: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const update = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) next.message = 'Please share a short message'
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }

    setStatus('loading')
    // Showcase-only: simulate B2B inquiry submission
    await new Promise((r) => setTimeout(r, 1100))
    setStatus('success')
    setForm(initial)
  }

  const fieldClass =
    'w-full rounded-2xl border border-text-primary/10 bg-bg-primary px-4 py-3.5 text-sm text-text-primary outline-none transition-all placeholder:text-text-secondary/60 focus:border-accent focus:ring-2 focus:ring-accent/15'

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
            required
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={update}
            autoComplete="organization"
            placeholder="Company name"
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Country" error={errors.country}>
          <select
            id="country"
            name="country"
            value={form.country}
            onChange={update}
            className={`${fieldClass} appearance-none`}
          >
            <option value="">Select country</option>
            {markets.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
            required
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update}
          rows={5}
          placeholder="Tell us about your wholesale or OEM needs..."
          className={`${fieldClass} resize-y min-h-[140px]`}
          required
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" className="min-w-[160px]">
          {status === 'loading' ? (
            <span className="inline-flex items-center gap-2">
              <Spinner />
              Sending
            </span>
          ) : (
            'Submit Inquiry'
          )}
        </Button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-accent"
            >
              Thank you — we&apos;ll be in touch shortly.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-warm">{error}</span>}
    </label>
  )
}

function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
      aria-hidden
    />
  )
}
