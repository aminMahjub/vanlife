import { Link } from "react-router-dom"

const About = () => {
  return (
    <main>
      <img src="../../public/images/about-main.png" alt="A man enjoyin her trip above the van" loading="lazy" />

      <section className="px-7 pt-16 pb-14">
        <div className="mb-14">
          <p className="font-inter-bold text-4xl text-app-text-secondary mb-8">Don’t squeeze in a sedan when you could relax in a van.</p>

          <p className="text-base font-inter-medium text-app-text-secondary mb-8">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>

          <p className="text-base font-inter-medium text-app-text-secondary mb-8">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>

        <div className="w-full px-9 py-8 bg-secondary-color rounded-md">
          <div className="text-app-text-secondary text-2xl font-inter-bold">Your destination is waiting.</div>
          <div className="text-app-text-secondary text-2xl font-inter-bold">Your van is ready.</div>

          <Link to="/vans" className="inline-block mt-6 text-pure-white rounded-xl bg-btn-selected-bg-2 text-center p-3 font-inter-bold text-base">Explore our Vans</Link>
        </div>
      </section>
    </main>
  )
}

export default About