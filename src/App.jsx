import Header from "./components/Header"
import ChatPage from "./components/ChatPage"
import Footer from "./components/Footer"
function App() {


  return (
    <div className=" md:flex-row flex-col bg-white py-4 items-center bg-cover bg-no-repea  min-h-screen flex justify-center md:felx-col">
        <div id="iphoneX" className="px-3 py-3 md:mt-32 rounded-[2.5rem] min-h-[38rem] shadow-2xl bg-white">
          <div class="flex flex-col flex-grow min-w-[20rem] min-h-[38rem]  bg-white  rounded-3xl overflow-hidden">
              <Header></Header>
              <ChatPage></ChatPage>
              <Footer></Footer>
          </div>
        </div>     
        <div id="Parrafo" className="flex md:w-[610px]  md:items-center md:text-start text-center my-16">
          <div className="flex flex-col md:pl-36 md:max-w-[610px]  md:mt-28">
            <h1 className=" font-bold text-5xl tracking-wide text-purple-950">Simple booking</h1>
            <article className="mt-8 text-lg font-medium tracking-tight text-gray-400">
              Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.
            </article>
          </div>
        </div>
    </div>
  )
}

export default App
