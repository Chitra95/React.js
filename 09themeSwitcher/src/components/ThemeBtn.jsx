import React from 'react'
//importing custorm hook
import useTheme from '../contexts/Theme';

export default function ThemeBtn() {
    
    //to bring functionality-using our own hook
    const {themeMode,lightTheme,darkTheme}=useTheme()

    //btn for change
    const onChangeBtn=(e)=>{
        const darkModeStatus=e.currentTarget.checked
        if(darkModeStatus) {
            darkTheme()
        }
        else{
            lightTheme()
        }

    }
    //"card" ko kon batayega 
    //since ye states hai and states are link with theme in theme.js
    //and App.jsx mai we said ThemeMode mai change ho useEffect run karo
    //with react hum sirf ek value change karenge in html and light/dark theme ho jayega

    //To enable this functionality "Mode" in tailwind must be enabled in tailwind.config.js
    //ye                            darkMode:"class",




    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox" //mai state hoti h checked or unchecked
                value=""
                className="sr-only peer"
                //agar change hua tho call onChangeBtn method
                onChange={onChangeBtn}
                //agr input checked hai tho
                checked={themeMode==="dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

