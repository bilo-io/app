import { useAppTheme, useTranslations } from 'hooks';
import { SliceType } from 'models/store';
import React from 'react';

import Button from '../Button/Button';
import Icon, { IconName } from '../Icon/CustomIcon/CustomIcon';
import { Modal } from '../Modal/Modal';
import Typography from '../Typography/Typography';

export type ModalType = 'primary' | 'info' | 'secondary' | 'success' | 'warning' | 'error'
export type ActionType = 'edit' | 'duplicate' | 'preview' | 'close' | 'save' | 'cancel' | 'delete'


interface ActionModalProps {
  action: ActionType,
  type: ModalType,
  show: boolean,
  onAbort?: Function,
  onSubmit?: Function,
  hasInput?: boolean,
  activeItem?: any | { name: string },
  sliceType: SliceType,
}

export const ActionModal: React.FC<ActionModalProps> = ({
  action,
  type,
  show,
  onAbort,
  // onHide,
  onSubmit,
  hasInput,
  activeItem,
  sliceType,
}) => {

  const { theme } = useAppTheme();
  const { t } = useTranslations();

  // @ts-ignore
  const modalHeadingBackground = `${type === 'info' ? theme?.TEXT : theme?.[type?.toUpperCase()]}`;
  const modalHeadingColor = type === 'info' ? theme?.BACKGROUND : '#FFF';

  const getModalHeading = () =>
    // @ts-ignore
    t.components?.confirmActionHeading(t.common[action], t.features[type])
  ;

  const handleAbort = () => {
    onAbort?.();
  };

  const handleSubmit = () => {
    onSubmit?.();
  };

  const getModalBody = () => (
    <div>
      <div className="my-2 flex flex-row items-center mb-2">
        <Icon size={28} name={sliceType as IconName} color={theme?.TEXT} />
        <Typography size="lg" className="ml-2" weight={'700'}>{activeItem?.name}</Typography>
      </div>
      <Typography>
        {/* @ts-ignore */}
        {t.components?.confirmActionOnItem(t.common[action], t.features[type])}
      </Typography>
      <br />
      <Typography color={theme?.TEXT_LIGHT}>
        {/* @ts-ignore */}
        {t.components?.confirmActionOnItemDescription(t.common[action], t.common.abort)}
      </Typography>
    </div>
  );

  return (
    <Modal
      isOpen={show}
      onClose={handleAbort}
      isCloseButtonInverted={type === 'info'}
    >
      <div className="p-3 px-4 pr-16 w-full flex flex-row items-center" style={{
        backgroundColor: modalHeadingBackground,
        color: modalHeadingColor,
      }}>
        <Icon color={modalHeadingColor} name={action as IconName} size={24} />
        <Typography weight="700" className="mx-2" color={modalHeadingColor}>{getModalHeading()}</Typography>
        {/* <CustomIcon color={modalHeadingColor} name={sliceType as CustomIconName} /> */}
      </div>

      <div className="p-4 min-h-40">
        <Typography>
          {getModalBody()}
        </Typography>
      </div>
      <div className="w-full flex flex-row p-2">
        <Button
          variant="secondary"
          className="w-full mr-2"
          onClick={handleAbort}
          style={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme?.TEXT}`,
            color: theme?.TEXT,
          }}
        >
          {t.common.abort}
        </Button>
        <Button
          className="w-full"
          variant='error'
          onClick={handleSubmit}
          backgroundColor={type === 'info' ? theme?.PRIMARY : modalHeadingBackground}>
          {t.common[action]}
        </Button>
      </div>
    </Modal>
  );
};

export default ActionModal;