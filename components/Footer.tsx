import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src={siteConfig.images.logo} alt="Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
                            <div>
                                <div
                                    className="text-xl font-bold leading-tight font-serif tracking-wide"
                                    style={{ color: siteConfig.theme.colors.accent }}
                                >
                                    {siteConfig.name}
                                </div>
                                <div
                                    className="text-xs font-bold tracking-widest uppercase"
                                    style={{ color: siteConfig.theme.colors.primary }}
                                >
                                    {siteConfig.subtitle}
                                </div>
                            </div>
                        </div>
                        <p className="mb-6 text-gray-400">
                            Dental care for families in Baner, Pune. Digital X-rays, implants, cosmetic dentistry, and
                            painless root canals. Walk-ins welcome.
                        </p>
                        <div className="flex gap-4">
                            <a href={siteConfig.social.facebook} aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:opacity-80 cursor-pointer transition-colors text-white" style={{ backgroundColor: undefined }}>
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={siteConfig.social.instagram} aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:opacity-80 cursor-pointer transition-colors text-white" style={{ backgroundColor: undefined }}>
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={siteConfig.social.twitter} aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:opacity-80 cursor-pointer transition-colors text-white" style={{ backgroundColor: undefined }}>
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin
                                    className="w-5 h-5 shrink-0"
                                    style={{ color: siteConfig.theme.colors.secondary }}
                                />
                                <a
                                    href={siteConfig.address.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    {siteConfig.address.line1}<br />
                                    {siteConfig.address.line2}<br />
                                    {siteConfig.address.line3}
                                </a>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Phone
                                    className="w-5 h-5 shrink-0 mt-1"
                                    style={{ color: siteConfig.theme.colors.secondary }}
                                />
                                <div className="flex flex-col gap-1">
                                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
                                    {siteConfig.phoneSecondary && (
                                        <a href={`tel:${siteConfig.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{siteConfig.phoneSecondary}</a>
                                    )}
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail
                                    className="w-5 h-5 shrink-0"
                                    style={{ color: siteConfig.theme.colors.secondary }}
                                />
                                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Location</h4>
                        <div className="rounded-xl overflow-hidden h-[300px] border border-gray-700 shadow-lg relative z-10 group cursor-pointer">
                            <iframe
                                src={siteConfig.address.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: "none" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-full"
                            ></iframe>
                            <a
                                href={siteConfig.address.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20 flex items-center justify-center bg-transparent"
                                aria-label="View on Google Maps"
                            >
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
