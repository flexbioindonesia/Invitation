import { FaHeart } from "react-icons/fa6";

function Comments({color, data, sendMessage}: any) {
  return (
    <div className="relative">
      <div className="px-5 py-5 text-white rounded-t-2xl bg-yellow-700/60" style={{ background: color }}>
        <p className="text-center text-xl text-white uppercase mb-3">Ucapan dan Doa</p>
        <form onSubmit={sendMessage}>
          <div>
            <textarea name="message" rows={5} className="w-full rounded-md px-3 py-3 text-sm text-zinc-500 shadow-lg" placeholder="Ketikan Ucapan atau Doa untuk kami disni..."></textarea>
          </div>
          <div className="w-full px-3 py-5 shadow-md mt-[-20px] rounded-b-md" style={{background: '#7d6727'}}>
            <div className="w-full flex justify-end">
              <button className="bg-zinc-800 px-4 py-2 text-xs text-white rounded-md">KIRIM</button>
            </div>
            <div className="mt-2 flex flex-col gap-4 max-h-[350px] overflow-y-auto">
              {
                data.map((itm: any, idx: any) => (
                  <div key={idx} className="text-white/80 flex items-center border-b-[1px] gap-2 justify-start border-white/75">
                    <div className="bg-white px-2 py-2 rounded-full">
                      <FaHeart className={'text-red-500'} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-md font-semibold">{itm.name}</p>
                      <p className="text-sm font-normal pb-2">{itm.comment}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;