
const Contact = () => {
  return (
    <div name="contact" className="h-screen w-full bg-black p-5">
      <div className="max-w-screen-lg mx-auto">
        <div className="my-5">
          <p className="text-4xl text-white border-b-4 border-[#57FFFF] inline">Contacto</p>
        </div>

        <p className="text-gray-300 text-2xl py-5">¿Porque esperar? Pongamonos en contacto</p>

        <div className="md:w-2/3  mx-auto mt-8">
          <form action="https://getform.io/f/40f5ed1f-9951-478c-b77e-861ad4b1275b" method="POST" className="flex flex-col">
            <input type="text" placeholder="Tu nombre..." className="border-4 border-white bg-transparent my-2 p-2 rounded-md text-white focus:outline-none"/>
            <input type="text" placeholder="Tu correo..." className="border-4 border-white bg-transparent my-2 p-2 rounded-md text-white focus:outline-none"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Tu mensaje..." className="border-4 border-white bg-transparent my-2 p-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="bg-gradient bg-gradient-to-l from-[#024B98] via-[#0388E3] to-[#57FFFF] text-black rounded-lg text-2xl w-fit p-3 mx-auto hover:scale-105 hover:text-white duration-100 my-2">Hablemos</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
