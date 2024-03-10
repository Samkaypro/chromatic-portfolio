const page = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 space-y-4 px-8">
      <div className="text-sm text-white">Get in touch or shoot me an email directly on example@gmail.com</div>
      <form 
      action="https://formsubmit.co/example@gmail.com" method="POST"
      className="grid grid-cols-1 space-y-8 w-3/5"
      // onSubmit={}
      >
        <input type='text'
        required
        placeholder="Name"
        name="name"
        className="bg-[#080808] text-white px-2 rounded-sm py-3 outline-1 border border-gray-500"
        />
        <input type="email"
        required
        placeholder="Email"
        name="email"
        className="bg-[#080808] px-2 text-white rounded-sm py-3 outline-1 border border-gray-500"

        />
        <textarea name='text' cols={20} rows={4}
        required
        className="bg-[#080808] scrollbar-thin px-2 text-white rounded-sm py-3 h-20 outline-1 border border-gray-500"
        placeholder="Message"
        
        />
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value=""></input>
        <button className="bg-gray-300 w-48 py-2 rounded-sm hover:bg-gray-100 transition-all duration-200"><a href="" type="submit">Submit </a>&rarr;</button>
      </form>
    </section>
  )
}

export default page