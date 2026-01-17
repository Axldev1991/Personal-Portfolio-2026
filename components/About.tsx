"use client";

import { motion } from "framer-motion";

const skills = [
    "HTML5 & CSS3",
    "WordPress Development",
    "PHP",
    "JavaScript (ES6+)",
    "React & Next.js",
    "Tailwind CSS",
    "Java",
    "Git & GitHub",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-4xl px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        About Me
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        With over 5 years of experience in web development, I&apos;ve built a strong foundation in creating functional and visually appealing websites.
                    </p>
                </motion.div>

                <div className="grid gap-12 mt-16 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-gray-700"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                        <p>
                            My coding journey started 5 years ago in the world of WordPress. I mastered the art of theme customization, PHP, and creating tailored solutions for clients.
                        </p>
                        <p>
                            Recently, I&apos;ve expanded my horizon into the modern JavaScript ecosystem. I&apos;m now passionate about building scalable, high-performance web applications using <strong>Next.js</strong> and <strong>React</strong>. This transition has allowed me to combine my deep understanding of web fundamentals with the power of modern component-based architecture.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="mb-6 text-2xl font-semibold text-gray-900">Technical Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
