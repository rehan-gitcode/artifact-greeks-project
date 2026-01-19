import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                   <div>
                        <div className="flex items-center mb-4">
                                <div className="ml-2">
                                <span className="text-lg font-bold text-gray-800">ARTIFACT</span>
                                <br />
                                <span className="text-sm font-semibold text-gray-600">GEEKS</span>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-6">
                            Empowering students with industry-ready skills and knowledge to build successful tech careers.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* All Links */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Success Stories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Courses Links */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Courses</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Data Science
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Mobile Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                    Cloud Computing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">
                                    123 Tech Street, Silicon Valley, CA 94025
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="text-gray-600 text-sm">
                                    +1 (555) 123-4567
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="text-gray-600 text-sm">
                                    info@edutechpro.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

               
                <div className="border-t border-gray-200 pt-8">
                    {/* Popular Courses */}
                    <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">Popular Courses</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Python Programming
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                React Development
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Machine Learning
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                AWS Certification
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Java Full Stack
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Angular Development
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                DevOps Engineering
                            </a>
                            <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Blockchain Development
                            </a>
                        </div>
                    </div>

                    {/* Other Categories Links*/}
                    <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">Other Categories</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Web Development
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Mobile Development
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Data Analytics
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                UI/UX Design
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Cybersecurity
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Game Development
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                IoT Development
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                AR/VR Development
                            </Link>
                        </div>
                    </div>

                    {/* Cities We Serve */}
                    <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-3">Cities We Serve</h4>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-2">
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Mumbai
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Delhi
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Bangalore
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Hyderabad
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Chennai
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Pune
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Kolkata
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Ahmedabad
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Jaipur
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Chandigarh
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Lucknow
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                                Indore
                            </Link>
                        </div>
                    </div>
                </div>

                
                <div className="border-t border-gray-200 pt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        © 2025 Artifact. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;