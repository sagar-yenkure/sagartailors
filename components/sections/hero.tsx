import LeftHero from "./hero/LeftHero"
import RightHero from "./hero/RightHero"

export function HeroSection() {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className=" px-4 md:px-8 z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <LeftHero />
          <RightHero />
        </div>
      </div>
    </section>
  )
}