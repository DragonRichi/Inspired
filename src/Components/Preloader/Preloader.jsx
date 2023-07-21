import { BallTriangle } from "react-loader-spinner";

const style = {
    display: "flex",
    justifyContent: "center",
    padding: "100px 0",
};

export const Preloader = () => (
    <div style={style}>
        <BallTriangle
            height={140}
            width={140}
            color="#4fa94d"
        />
    </div>
)