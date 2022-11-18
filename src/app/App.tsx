/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/className/className";
import { useTheme } from "./providers/ThemeProvider";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";

import "./styles/index.scss";
import { Modal } from "shared/ui/Modal/Modal";

function App() {
    const { theme } = useTheme();
    const [isOpen,setIsOpen] =useState(false)

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)}> toggle</button>
                <Modal isOpen={isOpen} onClose= {() => setIsOpen(false)}>
                    provident quod expedita eaque nihil ullam exrerum!
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
