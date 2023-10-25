import PN from "persian-number";

const Properties1 = ({ props }) => {
  if (!props) {
    return null;
  }

  props.sort((a, b) => a.weightSection - b.weightSection);

  return (
    <div className="grid md:grid-cols-6 grid-cols-3 divide-x-reverse divide-x mt-6">
      {props.map((prop, index) => {
        if (!prop.value) {
          return null;
        }
        return (
          <div
            className="flex gap-y-3 text-center items-center justify-center flex-col py-2"
            key={index}
          >
            <p className="font-bold">{PN.convertEnToPe(prop.value)}</p>
            <p className="text-sm text-zinc-500">{prop.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Properties1;
