import CasualWe from '../../../../themes/CasualWe';
import Smooth from '../../../../themes/Smooth';
import Page from '../../../../[id]/page'
function Preview({form, theme}: any ) {
  return (
    <div className='border-l-[1px] relative overflow-hidden'>
      <Page type={'preview'} form={form} />
    </div>
  );
}

export default Preview;