import { Modal } from "@mantine/core";
import { FormEvent } from "react";
import toast from "react-hot-toast";

interface SCRModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const SCRModal: React.FC<SCRModalProps> = ({ opened, setOpened }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.error("Model API is Cooking!", {
      icon: "😎",
      id: "reviewId",
    });
    setOpened(false);
  };

  return (
    <div>
      <Modal.Root size="lg" opened={opened} onClose={() => setOpened(false)}>
        <Modal.Overlay backgroundOpacity={0.4} blur={2} />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <p className="text-xl poppins-regular text-[#FC4F4F]">
                Share Your Feedback
              </p>
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="rating"
                  id=""
                  placeholder="Rate your experience (1-5)"
                  className="w-full border border-gray-200 h-[50px] pl-2 text-md poppins-light outline-none rounded-lg"
                />
                <textarea
                  name="review"
                  id=""
                  cols={30}
                  rows={5}
                  placeholder="Tell us about your experience..."
                  className="w-full border border-gray-200 pl-2 text-md resize-none poppins-light outline-none rounded-lg my-4"
                ></textarea>
                <div className="flex items-end justify-end">
                  <input
                    className="bg-[#FC4F4F] p-3 text-md poppins-regular text-white rounded-lg cursor-pointer"
                    type="submit"
                    value="Publish Review"
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

export default SCRModal;
