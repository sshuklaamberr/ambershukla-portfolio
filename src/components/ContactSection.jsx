import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Subtle grid to match site */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(99,102,241,0.035)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(99,102,241,0.035)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />
      </div>

      <div className="relative container mx-auto max-w-5xl px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-center text-white mb-6">
          Get In <span className="text-indigo-400">Touch</span>
        </h2>

        {/* Subheading (clean, honest) */}
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-16 text-sm md:text-base">
          I’m open to internship opportunities, collaborations, and
          meaningful technical discussions. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-indigo-500/10">
                <Mail className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:shuklaamber01@gmail.com"
                  className="text-white hover:text-indigo-400 transition"
                >
                  shuklaamber01@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-indigo-500/10">
                <Phone className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:+918957339340"
                  className="text-white hover:text-indigo-400 transition"
                >
                  +91 8957339340
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-indigo-500/10">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <span className="text-white">
                  Kanpur, Uttar Pradesh, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4">
                Connect with me
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/shuklaaamber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  <Linkedin size={26} />
                </a>
                <a
                  href="https://github.com/sshuklaamberr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  <Github size={26} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side – Direct CTA instead of fake form */}
          <div className="flex flex-col justify-center border border-white/10 rounded-xl p-8 bg-white/5">

            <h3 className="text-lg font-semibold text-white mb-4">
              Prefer email?
            </h3>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              I actively check my email and usually respond within
              24–48 hours. Feel free to reach out directly.
            </p>

            <a
              href="mailto:shuklaamber01@gmail.com"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-full
                bg-indigo-600 text-white
                hover:bg-indigo-700 transition
                text-sm font-medium
              "
            >
              Send Email
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};