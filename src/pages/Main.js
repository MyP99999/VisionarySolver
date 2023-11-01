import React from 'react';
import '../css/Main.css';

const Main = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-black text-center text-5xl font-bold mb-4">Visionary Solver</h1>
          <p className="text-center text-lg mb-10">
            Inteligența artificială care revoluționează modul în care rezolvăm testele.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="testimonial-box">
                <h2 className="text-2xl font-bold mb-4">Descriere</h2>
                <p className="mb-4">
                  Cu "Visionary Solver", procesul obositor de rezolvare a testelor devine istorie.
                  Acest tool AI avansat vă oferă răspunsurile de care aveți nevoie în câteva secunde,
                  cu o acuratețe uimitoare.
                </p>
                <h2 className="text-2xl font-bold mb-4">Caracteristici cheie</h2>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Rezultate rapide și precise</li>
                  <li className="mb-2">Interfață prietenoasă și ușor de folosit</li>
                  <li className="mb-2">Funcționează pentru o varietate largă de teste</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 md:mt-0">
              <img src="/assets/poza.jpeg" alt="Visionary Solver in action"
                className="rounded-xl object-cover shadow-lg mb-4" />
              <a href="payment.html" className="buy-button">Cumpără</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">Ce spun clienții noștri</h2>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="testimonial-box">
                <p className="mb-4">"Am fost uimit de rapiditatea și acuratețea Visionary Solver. Mi-a economisit ore întregi de muncă!"</p>
                <p className="font-bold">- Alexandru Marian.</p>
              </div>

              <div className="child bounce">
                <div className="testimonial-box">
                  <p className="mb-4">"Cel mai bun tool pe care l-am folosit vreodată. Recomand cu încredere!"</p>
                  <p className="font-bold">- Gabriel Petrea.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
