const ChatPage = () => { 
    return(
        <div class="flex flex-col flex-grow max-h-[540px] p-2 overflow-auto bg-gray-200">
              <div class="flex mt-2 space-x-3 max-w-[65%]">
                <div>
                  <div class="bg-[#b8f4] p-2 rounded-r-2xl rounded-tl-2xl rounded-bl-md">
                    <p class="text-[0.75rem] text-purple-400 font-semibold">That sounds great. I'd be <br/>happy with that.</p>
                  </div>
                </div>
              </div>
              <div class="flex  mt-2 space-x-3 max-w-[70%]">
                <div>
                  <div class="bg-[#b8f4] p-2 rounded-r-2xl rounded-tl-2xl rounded-bl-md">
                    <p class="text-[0.70rem] text-purple-400 font-semibold">Could you send over some <br/>pictures of your dog, please? </p>
                  </div>
                  
                </div>
              </div>
              <div class="flex w-full mt-2 space-x-3 max-w-[70%] ml-auto justify-end">
                <div>
                  <div class="flex gap-3 p-2 rounded-l-lg rounded-br-lg">
                    <img src="src/assets/images/dog-image-1.jpg" className="bg-[url('src/assets/images/dog-image-1.jpg')] bg-cover h-14 rounded-xl"  alt="dog-1"  />
                    <img src="src/assets/images/dog-image-2.jpg" className="bg-[url('src/assets/images/dog-image-2.jpg')] bg-cover h-14 rounded-xl"  alt="dog-2"  />
                    <img src="src/assets/images/dog-image-3.jpg" className="bg-[url('src/assets/images/dog-image-3.jpg')] bg-cover h-14 rounded-xl"  alt="dog-3"  />
                  </div>
                </div>
              </div>
              <div class="flex  mt-2  space-x-3 max-w-[60%] ml-auto justify-end">
                <div>
                  <div class="bg-white shadow-xl text-black p-2 rounded-l-xl rounded-tr-xl">
                    <p class="text-[0.70rem]">Here are a few pictures. She's <br/>a happy girl!</p>
                  </div>
                  
                </div>
              </div>
              <div class="flex mt-2 space-x-3 max-w-[70%] ml-auto justify-end">
                <div>
                  <div class="bg-white shadow-xl text-black p-3 rounded-l-xl rounded-tr-xl">
                    <p class="text-[0.70rem]">Can you make it?</p>
                  </div>
                </div>
              </div>
              <div class="flex mt-2 space-x-3 max-w-[60%]">
                <div>
                  <div class="bg-[#b8f4] p-2 rounded-r-2xl rounded-tl-2xl rounded-bl-md">
                    <p class="text-[0.65rem] text-purple-400 font-semibold">She looks so hoppy! The time we discussed works. How <br/>long shall i take her out for? </p>
                  </div>
                  
                </div>
              </div>
              <div class="flex  mt-2 space-x-3 max-w-[70%]">
                <div>
                  <div class="flex gap-2 h-10 items-center bg-gradient-to-l from-purple-600 from-25% via-fichsia-500 to-fuchsia-600 p-3 w-[131%] rounded-r-xl rounded-tl-xl rounded-bl-md">
                    <span className="inline-block h-4 w-4 rounded-full border-2 border-[#d5f5]"></span>
                    <p class="text-xs text-purple-400 font-semibold grow">30 minute walk</p>
                    <span className="text-white font-bold mr-1">$29</span>
                  </div>
                  
                </div>
              </div>
              <div class="flex  mt-2 space-x-3 max-w-[70%]">
                <div>
                  <div class="flex gap-2 h-10 items-center bg-gradient-to-l from-purple-600 from-25% via-fichsia-500 to-fuchsia-600 to-90% p-3 w-[150%] rounded-r-xl rounded-tl-xl rounded-bl-md">
                    <span className="inline-block h-4 w-4 rounded-full border-2 border-[#d5f5]"></span>
                    <p class="text-xs text-purple-400 font-semibold grow">1 hour walk</p>
                    <span className="text-white font-bold mr-1">$49</span>
                  </div>
                  
                </div>
              </div>
            </div>
    )
}
export default ChatPage;