'use client'

import { ModalContentWrapper } from "@/shared/wrappers/modal-content-wrapper/ModalContentWrapper";
import { useRouter } from "next/navigation";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CreateProfileInfoModal = ({isOpen, setIsOpen}: IProps) => {
  const router = useRouter()

  return (
    <ModalContentWrapper 
      title="Создайте профиль!"
      description="Перейдите в магазин и приобретите возможность создать новый профиль"
      onClick={() => router.push('/store')} 
      textButton="Перейти"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
};