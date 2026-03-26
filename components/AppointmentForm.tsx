"use client";

import { useState } from "react";
import { User, Phone, Mail, Calendar, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { submitAppointment } from "@/app/actions";
import { siteConfig } from "@/lib/site-config";

export default function AppointmentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        doctor: "",
        date: "",
        time: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formPayload.append(key, value);
        });

        try {
            await submitAppointment(formPayload);
            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="appointment" className="py-0 bg-gray-50 overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">

                {/* Right: Image (Order 2 on mobile, Order 2 on Desktop - wait, screenshot has Image Right) */}
                {/* Actually, let's look at the screenshot: Form Left (White), Image Right (Dentist Scene) */}

                {/* Left: Form */}
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto w-full">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block text-center">Appointment</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-serif text-center">
                            Schedule a <span className="text-primary">Visit</span>
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-10 font-serif text-center">
                            at <span className="text-primary">City Dental</span>
                        </h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-primary/10 p-8 rounded-2xl text-center border border-primary/20"
                            >
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{display:"inline-block"}}><path d="M20 6 9 17l-5-5"/></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                                <p className="text-gray-600 mb-6">
                                    Thank you, {formData.name}. We will contact you shortly on {formData.phone} to confirm your appointment.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-secondary font-semibold underline"
                                >
                                    Book another
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <select
                                            name="service"
                                            className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm text-gray-500 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 transition-all"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select Treatment</option>
                                            <option value="checkup">General Checkup</option>
                                            <option value="cleaning">Cleaning & Polishing</option>
                                            <option value="rootcanal">Root Canal</option>
                                            <option value="implants">Dental Implants</option>
                                            <option value="cosmetic">Cosmetic Dentistry</option>
                                            <option value="ortho">Orthodontics (Braces)</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                    <div className="relative">
                                        <select
                                            name="doctor"
                                            className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm text-gray-500 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 transition-all"
                                            value={formData.doctor}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Preferred Doctor</option>
                                            <option value="dr_leena">{siteConfig.doctor.name}</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        maxLength={10}
                                    />
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="time"
                                        name="time"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="text-center pt-4 flex flex-col gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex justify-center items-center gap-2 text-primary font-bold underline underline-offset-4 text-lg hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Confirm via Email"}
                                    </button>

                                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                        <span>OR</span>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (!formData.name || !formData.service) {
                                                alert("Please enter your Name and select a Treatment first.");
                                                return;
                                            }
                                            const phone = siteConfig.phone.replace(/\D/g, '');
                                            const text = `Hi, I am ${formData.name}. I would like to book an appointment for ${formData.service} with ${formData.doctor || siteConfig.doctor.name}.`;
                                            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
                                        }}
                                        className="w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg shadow-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        Book via WhatsApp
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                        alt="Dentist Working"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/10"></div>
                    <div className="absolute right-0 bottom-0 p-4">
                        <div className="bg-primary p-3 rounded-tl-xl text-white">
                            <ChevronDown className="rotate-180 w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
