import Select from "../Components/Select";

const choices = [
  {
    text: "Reza Kecap",
    value: Math.floor(Math.random() * 100),
    selected: false,
  },
  {
    text: "Sigit Rendang",
    value: Math.floor(Math.random() * 100),
    selected: true,
  },
  {
    text: "Rehan Wangsaff",
    value: Math.floor(Math.random() * 100),
    selected: false,
  },
];

export default function Vote() {
  const total = choices.reduce((a, b) => a + b.value, 0);

  return (
    <div className="flex flex-col items-center gap-2">
      <Select choices={choices} total={total} />
      <button className="rounded-lg bg-purple-700 px-4 py-2 hover:bg-purple-800 active:bg-purple-900">
        Vote
      </button>
    </div>
  );
}
