
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const Badge = ({ message, bgColor, iconColor, textColor }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3000)
        return () => clearTimeout(timer)
    }, [])

    if(!isVisible) return null
  return (
    <div className={`absolute top-5 left-1/2 flex items-center justify-center gap-2 ${bgColor} border border-white px-6 py-2 rounded-lg shadow-md`}>
      <CheckCircle className={`w-5 ${iconColor}`} />
      <span className={`text-sm font-medium ${textColor}`}>{message}</span>
      <button onClick={() => setIsVisible(false)} className="w-2"><X className="w-5 text-black"/></button>
    </div>
  );
};

export default Badge;
