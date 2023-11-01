import React from 'react';
import '../css/About.css';

const About = () => {
    return (
        <main className="flex flex-col gap-4 max-w-screen-2xl mx-auto p-5">

            {/* Member 1: Stoica Alin */}
            <div className="text-center flex justify-evenly bg-white rounded-lg shadow-md p-5">
                <div className="flex flex-col justify-center">
                    <h1 className="text-black text-center text-5xl font-bold">Stoica Alin</h1>
                    <h2 className="font-semibold text-blue-700">Specialist in Inteligenta Artificiala</h2>
                    <p className="max-w-md">Dezvoltă și optimizează algoritmi de AI pentru recunoașterea textului.
                        Lucrează la îmbunătățirea acurateței și eficienței modelului de AI.
                        Realizează teste și validări ale performanței modelului.
                    </p>
                </div>
                <div>
                    <img className="object-cover h-48 w-48 rounded-full border-4 border-blue-700" src="./assets/alin.jpeg" alt="Stoica Alin" />
                </div>
            </div>

            {/* Member 2: Profirescu Iulian */}
            <div className="text-center flex justify-evenly bg-white rounded-lg shadow-md p-5">
                <div className="flex flex-col justify-center">
                    <h1 className="text-black text-center text-5xl font-bold">Profirescu Iulian</h1>
                    <h2 className="font-semibold text-blue-700">Arhitect principal software</h2>
                    <p className="max-w-md">Proiectează arhitectura software a platformei.
                        Coordonează echipele de dezvoltare pentru implementarea funcționalităților.
                        Stabilește standardele de codificare și asigură calitatea codului.
                    </p>
                </div>
                <div>
                    <img className="object-cover h-48 w-48 rounded-full border-4 border-blue-700" src="./assets/mateo.jpeg" alt="Profirescu Iulian" />
                </div>
            </div>

            {/* Member 3: Maftei David */}
            <div className="text-center flex justify-evenly bg-white rounded-lg shadow-md p-5">
                <div className="flex flex-col justify-center">
                    <h1 className="text-black text-center text-5xl font-bold">Maftei David</h1>
                    <h2 className="font-semibold text-blue-700">Inginer DevOps(Assembly)</h2>
                    <p className="max-w-md">Configurează și menține infrastructura cloud.
                        Implementează soluții pentru monitorizare, backup și recuperare.
                        Se asigură că platforma este scalabilă și răspunde cerințelor de trafic.
                    </p>
                </div>
                <div>
                    <img className="object-cover h-48 w-48 rounded-full border-4 border-blue-700" src="./assets/david.jpeg" alt="Maftei David" />
                </div>
            </div>

            {/* Member 4: Hermenean Vlad */}
            <div className="text-center flex justify-evenly bg-white rounded-lg shadow-md p-5">
                <div className="flex flex-col justify-center">
                    <h1 className="text-black text-center text-5xl font-bold">Hermenean Vlad</h1>
                    <h2 className="font-semibold text-blue-700">Designer UI/UX</h2>
                    <p className="max-w-md">Creează designul interfeței pentru o experiență utilizator optimă.
                        Lucrează la prototipuri și mockup-uri pentru noile caracteristici.
                        Colaborează cu echipa tehnică pentru a asigura coerența și funcționalitatea designului.
                    </p>
                </div>
                <div>
                    <img className="object-cover h-48 w-48 rounded-full border-4 border-blue-700" src="./assets/vlad.jpeg" alt="Hermenean Vlad" />
                </div>
            </div>

        </main>
    );
}

export default About;
