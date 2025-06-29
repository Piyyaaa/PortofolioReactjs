// components/ContactForm.jsx
function ContactForm() {
  return (
    <div className="kontak mt-32 sm:p-10 p-0" id="contact">
      <h1 className="text-5xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="2000">
        Contact
      </h1>
      <p
        className="text-2xl text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-duration="4000"
      >
        Let’s stay connected.
      </p>
      <form
        action="https://formspree.io/f/xpwdqyld"
        method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="nama"
              placeholder="Enter Name..."
              required
              className="border border-zinc-500 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              required
              className="border border-zinc-500 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">
              Message
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols="50"
              rows="7"
              placeholder="Enter Message..."
              required
              className="border border-zinc-500 p-2 rounded-md"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-700 p-3 rounded-lg cursor-pointer border border-zinc-600 hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
