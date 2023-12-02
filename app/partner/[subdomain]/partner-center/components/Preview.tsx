import CasualWe from '../../../../themes/CasualWe';
import Smooth from '../../../../themes/Smooth';
function Preview({form, theme}: any ) {
  return (
    <div className='border-l-[1px] relative overflow-hidden'>
      <Smooth type={'preview'} form={form} />
    </div>
  );
}

export default Preview;