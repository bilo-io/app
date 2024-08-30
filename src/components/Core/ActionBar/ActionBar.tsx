
import { toSentenceCase } from '@vision/core';
import { useAppTheme, useTranslations } from 'hooks';
import { isMobile } from 'hooks/use-device';
import { SliceType } from 'models/store';
import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';

import { ActionType, ModalType } from '../ActionModal/ActionModal';
import CloseButton from '../BackButton/CloseButton';
import Button from '../Button/Button';
import Icon, { IconName } from '../Icon/CustomIcon/CustomIcon';
import { Modal } from '../Modal/Modal';
import Typography from '../Typography/Typography';


export const ActionBar: React.FC<{
  activeItem?: any | { name: string },
  sliceType: SliceType,
  isEditing?: boolean;
  children?: React.ReactElement,
  onClose?: Function,
  onDelete?: Function,
  onPreview?: Function,
  onSave?: Function,
  onEdit?: Function,
  onEditCancel?: Function,
  onDuplicate?: Function,
}> = ({
  activeItem,
  sliceType,
  children,
  onClose,
  onDelete,
  onPreview,
  onSave,
  isEditing,
  onEdit,
  onEditCancel,
  onDuplicate,
}) => {
  const { theme } = useAppTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>('info');
  const [action, setAction] = useState<null | ActionType>(null);

  const slice = sliceType.slice(0, sliceType?.length - 1);

  const { t } = useTranslations();

  // @ts-ignore
  const modalHeadingBackground = `${modalType === 'info' ? theme?.TEXT : theme?.[modalType?.toUpperCase()]}`;
  const modalHeadingColor = modalType === 'info' ? theme?.BACKGROUND : '#FFF';

  const getModalHeading = () =>
    // @ts-ignore
    t.components?.confirmActionHeading(t.common[action],t.features[slice])
  ;

  const getModalBody = () => (
    <div className="w-full">
      <div className="mt-4 mb-8 flex flex-row items-center justify-center p-4 border w-fit mx-auto rounded-lg" style={{
        borderColor: modalHeadingBackground,
      }}>
        <Icon size={28} name={sliceType as IconName} color={theme?.TEXT} />
        <Typography size="lg" className="ml-2" weight={'700'}>{activeItem?.name}</Typography>
      </div>
      <Typography>
        {/* @ts-ignore */}
        {t.components?.confirmActionOnItem(t.common[action], t.features[slice])}
      </Typography>
      <br />
      <Typography color={theme?.TEXT_LIGHT}>
        {/* @ts-ignore */}
        {t.components?.confirmActionOnItemDescription(t.common[action], t.features[slice])}
      </Typography>
    </div>
  );

  const handleModal = (type: ModalType, action: ActionType, callback: Function) => {
    setModalType(type);
    setAction(action);

    if ([
      'save',
      'delete',
      'cancel',
      'duplicate',
      'preview'
    ].includes(action)) {
      setShowModal(true);
      // setOnSubmit(callback)
    } else {
      // setOnSubmit(() => { })
      callback?.();
    }
  };

  return (
    <div className="w-full h-12 md:h-11 absolute overflow-hidden">
      <div className="fixed md:relative z-10 w-full h-12 md:h-11 border-b"
        style={{
          // marginTop: '1px',
          backgroundColor: theme?.APP_BACKGROUND,

          borderColor: '#88888888',

          padding: 'calc(0.5rem)',

          paddingTop: 'calc(0.5rem)',
        }}>

        {children || <div className="w-full flex flex-row items-center justify-between">
          <CloseButton onClick={() => onClose?.()} />
          <div className="flex flex-row items-center justify">
            {onPreview && (
              <ActionBarButton
                onClick={() => handleModal('info', 'preview', onPreview)}
                label={t.common['preview']}
                name="preview"
                color={theme?.TEXT}
              />
            )}
            {isEditing ? (
              <>
                {onSave && (
                  <ActionBarButton
                    onClick={() => handleModal('success', 'save', onSave)}
                    label={t.common['save']}
                    name="save"
                    color={theme?.SUCCESS}
                  />
                )}

                {onDuplicate && (
                  <ActionBarButton
                    onClick={() => handleModal('primary', 'duplicate', onDuplicate)}
                    label={t.common['duplicate']}
                    name="duplicate"
                    color={theme?.PRIMARY}
                  />
                )}

                {onEditCancel && (
                  <ActionBarButton
                    onClick={() => handleModal('warning', 'cancel', onEditCancel)}
                    label={t.common.cancel as string}
                    name="cancel"
                    color={theme?.WARNING}
                  />
                )}

                {onDelete && (
                  <ActionBarButton
                    onClick={() => handleModal('error', 'delete', onDelete)}
                    label={t.common.delete}
                    name="delete"
                    color={theme?.ERROR}
                  />
                )}
              </>
            ) : (
              <>
                {onEdit && (
                  <ActionBarButton
                    onClick={() => handleModal('primary', 'edit', onEdit)}
                    label={t.common.edit}
                    name="edit"
                    color={theme?.PRIMARY}
                  />
                )}

                {onDelete && (
                  <ActionBarButton
                    onClick={() => handleModal('error', 'delete', onDelete)}
                    label={t.common.delete}
                    name="delete"
                    color={theme?.ERROR}
                  />
                )}
              </>
            )}
          </div>
        </div>
        }


        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          isCloseButtonInverted={modalType === 'info'}
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
              isOutline
              className="w-full mr-2"
              // variant={'secondary'}
              onClick={() => setShowModal(false)}
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${theme?.TEXT}`,
                color: theme?.TEXT,
              }}
            >
              {toSentenceCase(t.common.abort)}
            </Button>
            <Button
              className="w-full"
              // variant="secondary"
              onClick={() => {
                if (action === 'preview') onPreview?.();
                if (action === 'save') onSave?.();
                if (action === 'duplicate') onDuplicate?.();
                if (action === 'close') onClose?.();
                if (action === 'cancel') onEditCancel?.();
                if (action === 'edit') onEdit?.();
                if (action === 'delete') onDelete?.();

                setShowModal(false);
              }}
              style={{
                background:
                  modalType === 'info'
                    ? theme?.PRIMARY
                    : modalHeadingBackground
              }}>
              {/* @ts-ignore */}
              {toSentenceCase(t.common[action as string])}
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const ActionBarButton = ({
  name,
  onClick,
  label,
  icon,
  color,

}: {
  name: string,
  onClick: Function,
  label: string,
  icon?: string,
  color: string
  }) => {
  const { t } = useTranslations();
  const settings = {
    features: {
      showActionbarTitles: !isMobile(),
    },
  };

  return (
    <div
      id={`action-bar-button-${name}`}
      className={`flex flex-row opacity-60 hover:opacity-100 items-center cursor-pointer mx-3 md:mx-2 over:${color}`}
      onClick={() => {
        onClick?.();
      }}>
      {icon ? (
        <FontAwesome name={icon} className={`mx-2 hover:${color}`} />
      ) : (
        <Icon
          name={name as IconName}
          color={`${color}`}
          size={isMobile() ? 22 : 12}
        />
      )}

      {settings?.features?.showActionbarTitles && <Typography color={color}>
        {/* @ts-ignore */}
        <div className="ml-1 text-sm">{t.common[name] || name}</div>
      </Typography>}
    </div>
  );
};

export default ActionBar;