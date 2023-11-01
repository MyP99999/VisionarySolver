import React from 'react';

function MainSection() {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for a smooth scrolling
        });
    };

    return (
        <main className="min-h-screen">
            <header className="bg-gray-600 h-24 flex justify-center items-center gap-3">
                <a className="button cursor-pointer">Home</a>
                <a className="button cursor-pointer" href="contact.html">Contact</a>
                <a className="button cursor-pointer" href="about.html">About</a>
                <button id="scrollTopBtn" title="Go to top" onClick={scrollToTop}>Top</button>
            </header>

            <section className="pt-20 pb-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Content goes here */}
                </div>
            </section>

            {/* Other sections */}
            
            <footer className="bg-gray-600">
                <h1 className="text-center text-white p-1">@Copyright</h1>
            </footer>
        </main>
    );
}

export default MainSection;
