export default function Skill({
    text,
    theme = "white",
  }: {
    text: string;
    theme?: "white" | string;
  }) {
    const themePicker: { [index: string]: string } = {
      white: "text-white",
      black: "text-black",
    };
    return (
      <div className={`${themePicker[theme]} bg-cyan-600 px-4 py-1 rounded-xl hover:scale-110 hover:shadow-xl transition-all`}>
        {text}
      </div>
    );
  }