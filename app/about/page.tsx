"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About: React.FC = () => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      <main className="relative">
        {/* Hero Section - With Fade Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="text-center relative py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl -z-10" />
          {/* Add fade to bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
          
          <motion.h2 variants={fadeInUp} className="text-xl text-purple-400 mb-6 uppercase tracking-wider font-medium">About Divine Infotech</motion.h2>
          <div className="max-w-5xl mx-auto px-4">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white block">We build</span>
              <span className="text-white">simple</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Digital Solutions
              </span>
            </motion.h1>
            <p className="md:text-xl text-md text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Elevate your business with our exceptional digital experiences, 
              ensuring seamless operations, innovative solutions, and sustainable growth.
            </p>
          </div>
        </motion.div>

        {/* Services Section - Added bottom fade */}
        <section className="py-20 bg-gradient-to-b from-[#080808] to-[#121212] relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-400">Comprehensive solutions for modern businesses</p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="flex overflow-x-auto pb-8 md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x max-w-7xl mx-auto px-4 md:px-8"
            >
              {[
                { title: "Web Development", icon: "💻", color: "from-purple-500" },
                { title: "Mobile Apps", icon: "📱", color: "from-pink-500" },
                { title: "Cloud Solutions", icon: "☁️", color: "from-blue-500" },
                { title: "AI Integration", icon: "🤖", color: "from-orange-500" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="min-w-[280px] md:min-w-0 snap-start first:ml-0 mr-6 md:mr-0"
                >
                  <div className={`h-full bg-gradient-to-br ${service.color} to-transparent p-[1px] rounded-2xl`}>
                    <div className="bg-[#080808] p-6 rounded-2xl h-full">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-400">Building next-generation solutions with cutting-edge technology</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Add bottom fade for services section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] via-[#080808] to-transparent" />
        </section>

        {/* Founder Section - Adjusted top fade */}
        <section className="py-24 relative overflow-hidden bg-[#080808]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Container with gradient background */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-transparent p-12">
                <div className="absolute inset-0 backdrop-blur-3xl opacity-40" />
                
                <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-16">
                  <div className="w-full md:w-[400px] relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl" />
                    <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl" />
                      <Image
                        src="/images/tino.png"
                        alt="Founder"
                        fill
                        className="object-cover object-center rounded-2xl"
                        style={{ objectPosition: 'center top' }}
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:flex-1 relative">
                    <div className="text-5xl text-orange-500/60 md:mb-4">"</div>
                    <blockquote className="relative">
                      <p className="text-lg md:text-2xl text-gray-200 text-justify md:text-start leading-relaxed mb-8">
                        We at Divine Infotech are committed to helping you streamline your operations,
                        minimize complexity, and foster lasting customer satisfaction because
                        your growth is our growth.
                      </p>
                      <footer className="relative">
                        <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-pink-500 mb-6" />
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                          Tino Britty J
                        </h3>
                        <p className="text-gray-400">
                          Founder and CEO<br className='md:hidden' /><span className='hidden md:inline'>, </span>Divine Infotech
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0C] via-[#080808] to-transparent" />
        </section>

        {/* Development Process */}
        <section className="py-20 bg-[#0C0C0C]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl -z-10" />
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                  Our Development Process
                </h2>
                <p className="text-sm sm:text-lg text-gray-400">
                  Streamlined approach to deliver exceptional results
                </p>
              </div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerChildren}
              >
                <div className="relative">
                  {/* Mobile Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-purple-500/10 md:hidden" />
                  
                  {/* Desktop Timeline Line */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-500/50 to-purple-500/10" />
                  
                  {[
                    {
                      title: "Discovery & Planning",
                      description: "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive roadmap.",
                      icon: "🎯"
                    },
                    {
                      title: "Design & Architecture",
                      description: "Our team creates intuitive designs and robust architecture ensuring scalability and optimal user experience.",
                      icon: "✨"
                    },
                    {
                      title: "Development & Testing",
                      description: "We implement your solution using cutting-edge technologies while maintaining strict quality standards.",
                      icon: "⚡"
                    },
                    {
                      title: "Deployment & Support",
                      description: "We ensure smooth deployment and provide ongoing support to keep your solution running efficiently.",
                      icon: "🚀"
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="relative mb-12 last:mb-0"
                    >
                      {/* Mobile Layout */}
                      <div className="flex md:hidden items-start">
                        <div className="relative">
                          <div className="w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/50 flex items-center justify-center">
                            <span className="text-xl">{step.icon}</span>
                          </div>
                        </div>
                        <div className="ml-8 pt-1">
                          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:flex items-center">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/50 flex items-center justify-center">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8 items-center w-full">
                          <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:col-start-2'}`}>
                            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                              {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section with reduced glow and better transitions */}
        <section className="py-24 bg-gradient-to-b from-[#0C0C0C] to-[#0A0A0A] relative">
          {/* Top fade for smooth transition */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808] via-[#0C0C0C] to-transparent" />
          
          {/* Background decoration with reduced intensity */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/3 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center opacity-10" />
          
          {/* Team Content */}
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                Our Expert Team
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Talented professionals dedicated to turning your digital vision into reality
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            >
              {[
                { 
                  name: "Pravin B", 
                  role: "Developer", 
                  img: "/images/boy.avif",
                  skills: ["Fullstack", "Cloud", "Security"]
                },
                { 
                  name: "Sathesh", 
                  role: "Developer", 
                  img: "/images/tino.jpg",
                  skills: ["Frontend", "Cloud", "Flutter"]
                },
                { 
                  name: "Harsha", 
                  role: "Digital Marketing Lead", 
                  img: "/images/girl.jpg",
                  skills: ["SEO", "Analytics", "Growth"]
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative bg-gradient-to-b from-purple-900/10 to-transparent p-[1px] rounded-2xl overflow-hidden transition-all duration-300 hover:from-purple-500/20">
                    <div className="bg-[#080808] rounded-2xl p-6 h-full relative z-10">
                      {/* Image Container with reduced glow */}
                      <div className="relative mb-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-md" />
                        <div className="w-40 h-40 mx-auto relative rounded-xl overflow-hidden">
                          <Image 
                            src={member.img}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 mb-4">{member.role}</p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom fade for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] via-[#0A0A0A] to-transparent" />
        </section>

        <section className="py-24 bg-[#080808] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center opacity-10" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/10 to-transparent p-5 md:p-12">
                <div className="absolute inset-0 backdrop-blur-xl opacity-30" />
                
                <div className="relative z-10">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                      Our Impact in Numbers
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                      Measurable results that speak to our commitment to excellence
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerChildren}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
                  >
                    {[
                      { number: "100+", label: "Projects Completed", icon: "🚀" },
                      { number: "95%", label: "Client Satisfaction", icon: "⭐" },
                      { number: "24/7", label: "Support Available", icon: "💪" },
                      { number: "50+", label: "Expert Team Members", icon: "👥" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
                        <div className="relative bg-[#0C0C0C] rounded-2xl p-6 text-center border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                          <div className="text-3xl mb-3">{stat.icon}</div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                            {stat.number}
                          </div>
                          <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Additional Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-50" />
                      <div className="relative bg-[#0C0C0C] rounded-2xl p-8 border border-purple-500/10">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                          Global Reach
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          Serving clients across multiple continents with innovative digital solutions that transcend boundaries.
                        </p>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-50" />
                      <div className="relative bg-[#0C0C0C] rounded-2xl p-8 border border-purple-500/10">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                          Industry Recognition
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          Award-winning solutions and recognized expertise in delivering cutting-edge digital experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade for next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] via-[#080808] to-transparent" />
        </section>

        {/* Let's Connect Section */}
        <section className="py-32 relative bg-[#080808] overflow-hidden">
          {/* Top fade for smooth transition */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808] via-[#080808] to-transparent" />
          
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-30" />
            <div className="absolute right-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Main Content */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-xs md:text-sm font-medium mb-4 border border-purple-500/20">
                      Ready to Transform Your Digital Presence?
                    </span>
                  </div>
                  
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-bold mb-6 max-w-3xl">
                    Let&apos;s Build Something{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                      Extraordinary
                    </span>
                    {" "}Together
                  </motion.h2>
                  
                  <p className="text-md md:text-xl text-gray-400 mb-12 max-w-2xl">
                    From concept to creation, we&apos;re here to help you achieve your digital goals. 
                    Let&apos;s start a conversation about your next big project.
                  </p>

                  {/* CTA Buttons */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <a 
                      href="/contact" 
                      className="group relative inline-flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
                      <div className="relative px-8 py-4 hover:border-purple-500/50 bg-[#0C0C0C] rounded-xl border border-purple-500/20 text-white font-semibold">
                        Schedule a Call
                        <span className="ml-2">→</span>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:info@divineinfotech.com" 
                      className="px-8 py-4 rounded-xl border border-purple-500/20 text-white font-semibold hover:bg-purple-500/10 transition duration-300"
                    >
                      Email Us
                    </a>
                  </motion.div>

                  {/* Trust Indicators */}
                  <div className="mt-16 pt-16 border-t border-purple-500/10 flex flex-col items-center">
                    <p className="text-gray-400 mb-6 text-sm">Trusted by innovative companies worldwide</p>
                    {/* <div className="flex flex-wrap justify-center gap-8 opacity-50">
                      {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="w-32 h-12 bg-gradient-to-r from-white/10 to-white/5 rounded-lg" />
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade for footer */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] via-[#080808] to-transparent" />
        </section>
      </main>
    </div>
  );
};

export default About; 