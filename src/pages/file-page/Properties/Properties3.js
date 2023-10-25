import PN from "persian-number";

const Properties3 = ({ props }) => {
  if (!props) {
    return null;
  }
  props.sort((a, b) => a.weightSection - b.weightSection);
  return (
    <div className="mb-2 border rounded-lg overflow-hidden">
      {props.map((prop, index) => {
        return (
          <div className="grid grid-cols-2 items-center text-sm" key={index}>
            <p className="px-3 py-2 font-medium flex items-center text-black whitespace-nowrap h-full bg-gray-50 text-right">
              {prop.name}
            </p>
            {prop.value !== 0 ? (
              <p className="px-3 py-2 font-semibold text-left text-sm whitespace-nowrap">
                {PN.convertEnToPe(PN.sliceNumber(prop.value))}ریال
              </p>
            ) : (
              <p className="px-3 py-2 font-semibold text-left text-sm whitespace-nowrap">
                توافقی
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Properties3;
