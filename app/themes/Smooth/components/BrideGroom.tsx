import Image from "next/image";

function BrideGroom({data}: any) {
  return (
    <div className="relative w-full overflow-hidden flex items-center flex-col bg-white">
      <div className="w-[65%] border-[3px] h-[230px] rounded-b-full border-[#D4AF37] mt-[-10px] flex items-center justify-center">
        <p className="text-zinc-500">THE BRIDE</p>
      </div>
      <div className="flex w-full justify-center flex-col items-center mt-[-80px] mb-14">
        <Image
          src={data.profileBridePhoto || "/image/penutup.jpg"}
          alt="Sampul"
          width={240}
          height={300}
          className={`w-[65%] h-[350px] object-cover rounded-t-full`}
          priority
        />
        <p className="text-[#D4AF37] mt-4 text-[14px]">{data.profileBrideName || 'dr. Komala Rachmani Nahar S.Ked'}</p>
        <p className="text-zinc-400 mt-2 text-[12px] w-[70%] text-center font-normal">{ data.profileParentBride || `Anak Pertama dari Bp. Adrian Nahar dan Ibu Marliana (alm)`}</p>
      </div>
      <div className="w-[65%] border-[3px] h-[250px] rounded-full border-[#D4AF37] mt-[-10px] flex items-center justify-center">
        <p className="text-zinc-500">THE GROOM</p>
      </div>
      <div className="flex w-full justify-center flex-col items-center mt-[-80px] mb-14">
        <Image
          src={data.profileGroomPhoto || "/image/penutup.jpg"}
          alt="Sampul"
          width={240}
          height={300}
          className={`w-[65%] h-[350px] object-cover rounded-t-full`}
          priority
        />
        <p className="text-[#D4AF37] mt-4 text-[14px]">{data.profileGroomName || 'Dhani Dwi Putra S.Kom, M.Kom'}</p>
        <p className="text-zinc-400 mt-2 text-[12px] w-[70%] text-center font-normal">{data.profileParentGroom || `Anak Kedua dari Bp. Ajizar dan Ibu Desmayarti`}</p>
      </div>
    </div>
  );
}

export default BrideGroom;