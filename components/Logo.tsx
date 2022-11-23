interface Props {
    color?: string;
}

export const Logo = ({ color }: Props) => {
    const c = color || "black";
    return (
        <svg
            width="100%"
            height="122"
            viewBox="0 0 94 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M82 37C33.3333 36.3333 -42.7 43.3 42.5 76.5C127.7 109.7 78 45.3333 42.5 9V118"
                stroke={c}
                stroke-width="7"
                stroke-linecap="round"
            />
        </svg>
    );
};

export default Logo;
