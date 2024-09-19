import { useRecoilState } from 'recoil';
import { mateFormState } from '@/app/recoil/mateAtom';

export function useMateForm() {
  const [formState, setFormState] = useRecoilState(mateFormState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (option: string) => {
    setFormState((prev) => ({
      ...prev,
      options: prev.options.includes(option)
        ? prev.options.filter((o) => o !== option)
        : [...prev.options, option],
    }));
  };

  return {
    formState,
    handleInputChange,
    handleOptionSelect,
  };
}
