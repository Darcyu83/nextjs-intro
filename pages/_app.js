import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* 전역 컴포넌트 or style 적용 */}
      <NavBar />
      <Component {...pageProps} />

      <style jsx global>{`
        a {
          font-weight: bold;
          color: gray;
        }
      `}</style>
    </div>
  );
}
