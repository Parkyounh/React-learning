import {useState,useEffect} from 'react';

export default function ResponsiveComponent(){
    const [isMobile,setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    },[]);

    return(
        <div>
            {isMobile? <p>모바일 뷰</p>:<p>데스크톱 뷰</p>}
        </div>
    )
}