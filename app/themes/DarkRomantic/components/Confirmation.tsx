function Confirmation({clicked, confirm}: any) {
  return (
    <div className='relative px-4 py-8 flex flex-col items-center bg-white'>
      <p className="text-xl text-[#D4AF37]">Apakah kamu akan datang?</p>
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button b2" id="button-17">
            <input type="checkbox" className="checkbox" onChange={clicked} />
            <div className="knobs">
              <span></span>
            </div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
      <p className="text-sm text-zinc-500">Kamu {confirm === undefined && 'Belum'} memilih {confirm === true ? 'Akan Datang' : confirm === false ? 'Tidak Datang' : ''}</p>
    </div>
  );
}

export default Confirmation;