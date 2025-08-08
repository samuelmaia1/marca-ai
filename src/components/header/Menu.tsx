import { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenu, IoHomeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import style from './Menu.module.scss';

export function Menu() {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const sidebarVariants = {
        closed: { x: "-100%" },
        open: {
            x: 0,
            transition: { type: "spring" as const, stiffness: 300, damping: 30 }
        }
    }

    return (
        <div className={style.container}>
            <button 
                onClick={() => setIsOpen(true)}
                className={style.openButton}
            >
                < IoMenu size={18} color="#333"/>
            </button>

            {isOpen && (
                <div
                    className={style.overlay}
                    onClick={() => setIsOpen(false)}
                />
            )}

            <motion.div
                className={style.sidebar}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
            >
                <button 
                    onClick={() => setIsOpen(false)}
                    className={style.closeButton}
                >
                    < IoMdClose size={18} color="#333" />
                </button>
                <nav className={style.navbar}>
                    <Link to='' className={style.navbarLink}><IoHomeSharp /> Início</Link>
                    <Link to='' className={style.navbarLink}><MdDashboard /> Painel de consultas</Link>
                    <Link to='' className={style.navbarLink}><FaCalendarCheck /> Agendar</Link>
                    <Link to='' className={style.navbarLink}><FaUser /> Conta</Link>
                </nav>

                <div className={style.logoutContainer}>
                    Sair 
                    <button>
                        < IoLogOut size={18} color="#333"/>
                    </button>
                </div>
            </motion.div>
        </div>
    )
}