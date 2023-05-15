const Footer = () => { 
    return(
        <div class="bg-gray-200 p-4 ">
              <form action="">
                <div className="flex items-center rounded-full overflow-auto bg-white">
                  <input class="flex items-center h-10 w-full  px-3 text-sm" type="text" placeholder="Type your message…" />
                  <span className="inline-block mx-2 h-8 w-[2.4rem] rounded-full border-2 border-violet-950 bg-violet-950"> <img src="src/assets/images/derecha.png" className="ml-[0.18rem] mt-[-0.009rem]" /></span>
                </div>
              </form>
            </div>
    )
 }
 export default Footer;