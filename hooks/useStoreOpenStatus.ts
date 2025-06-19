
import { useEffect, useState } from "react";

const useStoreOpenStatus = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const now = new Date();
        const day = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hours * 60 + minutes;

        let openTime = 0;
        let closeTime = 0;

        if (day === 0) {
            // Sunday: 10:00 AM - 10:00 PM
            openTime = 10 * 60;
            closeTime = 22 * 60;
        } else {
            // Monday - Saturday: 8:00 AM - 10:00 PM
            openTime = 8 * 60;
            closeTime = 17 * 60;
        }

        setIsOpen(currentTime >= openTime && currentTime < closeTime);
    }, []);

    return isOpen;
};

export default useStoreOpenStatus;
