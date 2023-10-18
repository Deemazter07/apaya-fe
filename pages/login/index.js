import LoginCard from "@/components/card/LoginCard";

export default function Login({ closeLogin }) {
    return(
        <div className="absolute translate-y-1/2 translate-x-1/2 top-0 right-1/2">
        <LoginCard closeLogin={closeLogin}/>
        </div>
    )
}