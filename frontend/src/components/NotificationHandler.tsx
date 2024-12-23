import { io, Socket } from "socket.io-client";
import { useEffect } from "react";

const socket: Socket = io("http://localhost:8000");

const NotificationHandler: React.FC = () => {
    useEffect(() => {
        
        socket.on("notification-log", (data: { title: string; content: string; link: string }) => {
            console.log("Новина:", data);
        });

        
        socket.on("notification-alert", (data: { title: string; content: string; link: string }) => {
            alert(`Новина: ${data.title}\n${data.content}\nПосилання: ${data.link}`);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return <div>Клієнт підключений до сервера</div>;
};

export default NotificationHandler;