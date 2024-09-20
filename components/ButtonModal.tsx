import Modal from './Modal';

interface ButtonProps {
  name: string;
  action: () => void;
}

interface IButtonModalProps {
  isOpen: boolean;
  description: string;
  buttons: ButtonProps[];
}

export default function ButtonModal({
  isOpen,
  description,
  buttons,
}: IButtonModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <div className="bg-white w-312 h-177 rounded-10 px-21 flex flex-col items-center">
        <section className=" w-full h-110 flex items-center justify-center border-b border-solid border-[#33333333]">
          <p className="text-16 font-[#333333] font-normal">{description}</p>
        </section>
        <div className="w-full flex-1 flex items-center justify-center">
          {buttons.map((button, idx) => (
            <button
              key={idx}
              onClick={button.action}
              className="text-[#000000] font-bold w-full"
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
