const Header = () => { 
    return (
        <header className="bg-gradient-to-r from-purple-600 via-purple-500 via-30% to-fuchsia-600 rounded-b-md">
                <div className="flex items-center justify-center"><span className="w-48 h-7 bg-white rounded-b-3xl"></span></div>
                <div className="flex gap-3 w-full my-3 ">
                  {/* < */}
                  <img src="src/assets/images/atras (1).png" className=" flex-none h-3 w-2 ml-3 my-3" /> 
                  
                  {/* Avatar */}
                  <span className=" inline-block h-8 w-8 rounded-full border-2 mt-1 border-white overflow-auto">
                    <img src="src/assets/images/avatar.jpg" className="bg-cover " alt="" />
                  </span>
                  {/* Name */}
                  <div className="grow">
                    <h1 className="text-white font-semibold flex h-3">Samuel Green</h1>
                    <span className="text-xs text-gray-400 leading-none">Available to Walk</span>
                  </div>
                  <img src="src/assets/images/mas.png" className=" flex-none h-3 w-3 m-2 my-3 mr-2" /> 
                </div>
              </header>
    )
}
export default Header;