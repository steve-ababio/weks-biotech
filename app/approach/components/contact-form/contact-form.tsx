"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const isFormValid = formData.name.trim() !== "" && formData.email.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    setLoading(false)
    setMessage(data.message)

    if (res.ok) {
      setFormData({ name: "", email: "", phone: "" })
    }
  }

  return (
    <form
      onSubmit={submitContactForm}
      className="flex flex-col items-center lg:items-start gap-5 mt-10"
    >
      <div className="max-w-[450px] w-full relative">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-[#E0E0E0] w-full px-5 py-3.5 placeholder:text-gray-400"
        />
        <span className="absolute left-[70px] top-1/2 -translate-y-1/2 text-red-500">
          *
        </span>
      </div>

      <div className="max-w-[450px] w-full">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-[#E0E0E0] w-full px-5 py-3.5"
        />
      </div>

      <div className="max-w-[450px] w-full relative">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-[#E0E0E0] w-full px-5 py-3.5 placeholder:text-gray-400"
        />
        <span className="absolute left-[135px] top-1/2 -translate-y-1/2 text-red-500">
          *
        </span>
      </div>

      <div className="w-full flex justify-center lg:justify-start">
        <button
          type="submit"
          disabled={loading || !isFormValid}
          className="text-white py-2.5 bg-[#C4C4C4] text-base max-w-[320px] w-full disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  )
}


