
export default function LoyaltyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <section className="rounded-2xl border p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide">
          Bennett&apos;s Auto Care
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          Join Bennett&apos;s Loyalty Club
        </h1>

        <p className="mt-4 text-lg">
          Membership is free. Enjoy member-only Auto Care offers
          and rewards for returning customers.
        </p>

        <div className="my-6 rounded-xl bg-gray-100 p-5 text-gray-900">
          <h2 className="text-xl font-bold">
            Free Wash Tuesday
          </h2>

          <p className="mt-2">
            Eligible members can claim one complimentary outside
            wash during the launch campaign, subject to availability.
          </p>

          <p className="mt-2 text-sm">
            Limited to 10 complimentary washes per Tuesday.
            Registration does not guarantee a slot. Confirmation
            is required.
          </p>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdvhai19gbL6Au8gWP1ORFTnJ71CgvtA3tgg15_IOa5S6SYnA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white"
        >
          Join the Loyalty Club
        </a>

        <p className="mt-6 text-sm">
          Questions? WhatsApp us at{" "}
          <a
            className="underline"
            href="https://wa.me/18762588333"
          >
            876-258-8333
          </a>
        </p>

        <p className="mt-4 text-sm">
          Ready to book?{" "}
          <a
            className="underline"
            href="https://bennettsautocare.setmore.com"
          >
            Book through Setmore
          </a>
        </p>
      </section>
    </main>
  );
}
