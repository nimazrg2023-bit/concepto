import Footer from "./components/footer";
import Header from "./components/Header";

const issearch = location.pathname === "/search";
const issearch1 = location.pathname === "/search1";



export default function Layout({ children }) {
    if (issearch || issearch1) {
        return (
            <div className="flex flex-col overflow-x-hidden items-center w-full">
                <Header />
                <main className="flex flex-col overflow-x-hidden  w-full">
                    {children}
                </main>
            </div>
        )
    }
    else{
    return (
        <div className="flex flex-col overflow-x-hidden items-center w-full">
            <Header />

            <main className="flex flex-col overflow-x-hidden  w-full">
                {children}
            </main>

            <Footer />
        </div>
    )
}
}