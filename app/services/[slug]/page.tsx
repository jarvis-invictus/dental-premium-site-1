import { services } from "@/lib/services_data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.title} | ${siteConfig.name}`,
        description: service.short,
        openGraph: {
            title: `${service.title} | ${siteConfig.name}`,
            description: service.short,
            images: [{ url: service.image }],
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const serviceIndex = services.findIndex(s => s.slug === slug);
    if (serviceIndex === -1) notFound();

    const service = services[serviceIndex];
    const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null;
    const nextService = serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null;

    const waText = `Hi, I am interested in ${service.title} at ${siteConfig.name}. Could you please share more details?`;
    const waPhone = siteConfig.phone.replace(/\D/g, "");

    return (
        <main className="min-h-screen bg-white">
            {/* Minimal Header for Navigation */}
            <div className="bg-secondary text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold hover:text-accent transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <a href={`tel:${waPhone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Phone className="w-4 h-4 text-accent" /> {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section of Service */}
            <section className="bg-primary/10 py-16 md:py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary font-semibold text-sm mb-6 shadow-sm">
                            <service.icon className="w-4 h-4" />
                            Dental Service
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-secondary font-serif mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            {service.short}
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] hidden md:block pointer-events-none" />
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">

                            {/* Service Banner Image */}
                            <div className="relative w-full h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-secondary font-serif mb-4">About This Treatment</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-secondary mb-6 font-serif">Why Choose This Treatment?</h3>
                                <ul className="space-y-4">
                                    {service.why.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="md:col-span-1">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24 space-y-4">
                                <h3 className="text-2xl font-bold text-secondary font-serif">Book Appointment</h3>
                                <p className="text-gray-500 text-sm">
                                    Interested in {service.title}? Contact us to schedule a consultation.
                                </p>

                                <Link
                                    href="/#appointment"
                                    className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
                                >
                                    Book Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <a
                                    href={`https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90"
                                    style={{ backgroundColor: "#25D366", color: "#fff" }}
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    WhatsApp Us
                                </a>

                                <div className="pt-2 border-t border-gray-100 text-center space-y-1">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Or call directly</p>
                                    <a href={`tel:${waPhone}`} className="block text-lg font-bold text-secondary hover:text-primary transition-colors">
                                        {siteConfig.phone}
                                    </a>
                                    {siteConfig.phoneSecondary && (
                                        <a href={`tel:${siteConfig.phoneSecondary.replace(/\D/g, "")}`} className="block text-base font-semibold text-gray-500 hover:text-primary transition-colors">
                                            {siteConfig.phoneSecondary}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prev / Next Service Navigation */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between gap-4">
                        {prevService ? (
                            <Link
                                href={`/services/${prevService.slug}`}
                                className="flex items-center gap-3 group px-6 py-4 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all max-w-xs"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Previous</p>
                                    <p className="font-bold text-secondary group-hover:text-primary transition-colors font-serif">{prevService.title}</p>
                                </div>
                            </Link>
                        ) : <div />}

                        {nextService ? (
                            <Link
                                href={`/services/${nextService.slug}`}
                                className="flex items-center gap-3 group px-6 py-4 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all max-w-xs text-right ml-auto"
                            >
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Next</p>
                                    <p className="font-bold text-secondary group-hover:text-primary transition-colors font-serif">{nextService.title}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>
        </main>
    );
}
