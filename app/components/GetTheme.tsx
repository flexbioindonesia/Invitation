import React from "react";
import Smooth from '../themes/Smooth'
import CasualWe from '../themes/CasualWe'
import DarkRomantic from '../themes/DarkRomantic'
function GetTheme({theme, themeId, data, children, type} : {theme: string, themeId?: string, children?: React.ReactNode, data: {}, type?: string }) {
    const Components: any = {
      Smooth: Smooth,
      CasualWe: CasualWe,
      DarkRomantic: DarkRomantic
    }
    if(typeof Components[theme] !== "undefined"){
        return React.createElement(Components[theme], {
            key: themeId,
            data: data,
            type: type,
        }, children)
    }
    return React.createElement(
        () => <div>Theme Not Found</div>,
        {key: 1}
    )
}

export default GetTheme;
