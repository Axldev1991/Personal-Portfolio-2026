export default function Footer() {
    return (
        <footer className="py-8 bg-gray-50 border-t border-gray-200">
            <div className="px-6 mx-auto max-w-7xl md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    <span className="text-gray-400">© 2024 Portfolio. All rights reserved.</span>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-gray-500 md:text-left">
                        Built with Next.js, Tailwind CSS & Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
