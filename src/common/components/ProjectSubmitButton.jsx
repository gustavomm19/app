/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, PopoverArrow, Text, Checkbox, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, Button, FormErrorMessage, FormControl, Input, useColorModeValue, useToast, Popover, PopoverTrigger, Tooltip, useFormControlStyles } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { useRef, useState } from 'react';
import bc from '../services/breathecode';
import iconDict from '../../iconDict.json';
import { isGithubUrl } from '../../utils/regex';
import MarkDownParser from './MarkDownParser';
import Icon from './Icon';
import useStyle from '../hooks/useStyle';
import useCohortHandler from '../hooks/useCohortHandler';
import { formatBytes } from '../../utils';

export function textByTaskStatus(currentTask, isGuidedExperience, hasPendingSubtask) {
  const { t } = useTranslation('dashboard');
  const { hexColor } = useStyle();
  const taskIsApproved = currentTask?.revision_status === 'APPROVED';
  // task project status
  if (currentTask && currentTask.task_type === 'PROJECT') {
    if (currentTask.task_status === 'DONE' && currentTask.revision_status === 'PENDING') {
      return {
        icon: {
          icon: 'checked',
          color: '#FFB718',
          width: '20px',
          height: '20px',
        },
        text: t('common:taskStatus.update-project-delivery'),
      };
    }
    if (currentTask.revision_status === 'APPROVED') {
      return {
        icon: {
          icon: 'verified',
          color: '#606060',
          width: '20px',
        },
        text: t('common:taskStatus.project-approved'),
      };
    }
    if (currentTask.revision_status === 'REJECTED') {
      return {
        icon: {
          icon: 'checked',
          color: '#FF4433',
          width: '20px',
        },
        text: t('common:taskStatus.update-project-delivery'),
      };
    }
    if (currentTask.task_status === 'PENDING' && hasPendingSubtask) {
      return {
        icon: {
          icon: isGuidedExperience ? 'send-2' : 'longArrowRight',
          color: isGuidedExperience ? hexColor.blueDefault : 'white',
          width: '20px',
        },
        text: t('common:taskStatus.pending-subtasks'),
      };
    }
    return {
      icon: {
        icon: isGuidedExperience ? 'send-2' : 'longArrowRight',
        color: isGuidedExperience ? hexColor.blueDefault : 'white',
        width: '20px',
      },
      text: t('common:taskStatus.send-project'),
    };
  }
  // common task status
  if (currentTask && currentTask.task_status === 'DONE') {
    return {
      icon: {
        icon: 'close',
        color: '#FFFFFF',
        width: '12px',
      },
      text: t('common:taskStatus.mark-as-not-done'),
    };
  }

  return {
    icon: {
      icon: 'checked2',
      color: taskIsApproved ? '#606060' : '#FFFFFF',
      width: '14px',
    },
    text: t('common:taskStatus.mark-as-done'),
  };
}

export function IconByTaskStatus({ currentTask, noDeliveryFormat }) {
  // task project status
  const hasDeliveryFormat = !noDeliveryFormat;
  if (currentTask && currentTask.task_type === 'PROJECT' && currentTask.task_status) {
    if (currentTask.task_status === 'DONE' && currentTask.revision_status === 'PENDING' && hasDeliveryFormat) {
      return <Icon icon="checked" color="#FFB718" width="27px" height="27px" />;
    }
    if (currentTask.task_status === 'DONE' && currentTask.revision_status === 'PENDING' && !hasDeliveryFormat) {
      return <Icon icon="verified" color="#25BF6C" width="27px" />;
    }
    if (currentTask.revision_status === 'APPROVED') {
      return <Icon icon="verified" color="#25BF6C" width="27px" />;
    }
    if (currentTask.revision_status === 'REJECTED') {
      return <Icon icon="checked" color="#FF4433" width="27px" />;
    }
    return <Icon icon="unchecked" color="#C4C4C4" width="27px" />;
  }
  // common task status
  if (currentTask && currentTask.task_type !== 'PROJECT' && currentTask.task_status === 'DONE') {
    return <Icon icon="verified" color="#25BF6C" width="27px" />;
  }
  return <Icon icon="unchecked" color="#C4C4C4" width="27px" />;
}

function ProjectSubmitButton({
  isGuidedExperience,
  isLoading,
  currentAssetData,
  currentTask,
  sendProject,
  onClickHandler,
  allowText,
  isPopoverOpen,
  closePopover,
  togglePopover,
  buttonChildren,
}) {
  const { t } = useTranslation('dashboard');
  const taskIsApproved = allowText && currentTask?.revision_status === 'APPROVED';
  const isButtonDisabled = currentTask === null || taskIsApproved;
  const [acceptTC, setAcceptTC] = useState(false);
  const { state } = useCohortHandler();
  const { cohortSession } = state;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [fileProps, setFileProps] = useState([]);
  const { featuredColor, lightColor, modal, hexColor } = useStyle();
  const fileInputRef = useRef();
  const fileContainerRef = useRef(null);
  const commonInputActiveColor = useColorModeValue('gray.800', 'gray.350');
  const toast = useToast();

  const handleCloseFile = () => {
    setAcceptTC(false);
    closePopover();
  };

  const textAndIcon = textByTaskStatus(currentTask, isGuidedExperience);

  const deliveryFormatExists = typeof currentAssetData?.delivery_formats === 'string';
  const noDeliveryFormat = deliveryFormatExists && currentAssetData?.delivery_formats.includes('no_delivery');
  const deliveryFormatIsUrl = deliveryFormatExists && currentAssetData?.delivery_formats.includes('url');
  const regexUrlExists = typeof currentAssetData?.delivery_regex_url === 'string';
  const mimeTypes = currentAssetData?.delivery_formats || 'application/pdf,image/png,image/jpeg,image/jpg,image/gif,doc,docx';
  const howToSendProjectUrl = 'https://4geeksacademy.notion.site/How-to-deliver-a-project-e1db0a8b1e2e4fbda361fc2f5457c0de';
  const maxFileSize = 1048576 * 10; // 10mb
  const fileErrorExists = fileProps.some((file) => file.formatError) || fileProps.some((file) => file.sizeError);

  const customUrlValidation = Yup.object().shape({
    githubUrl: Yup.string().matches(
      currentAssetData?.delivery_regex_url,
      t('deliverProject.invalid-url', { url: currentAssetData?.delivery_regex_url }),
    ).required(t('deliverProject.url-is-required')),
  });
  const githubUrlValidation = Yup.object().shape({
    githubUrl: Yup.string().matches(
      isGithubUrl,
      t('deliverProject.invalid-url', { url: 'https://github.com/' }),
    ).required(t('deliverProject.url-is-required')),
  });
  const fileSumSize = fileProps.reduce((acc, { file }) => acc + file.size, 0);

  const handleChangeFile = (e) => {
    setDragOver(false);
    const fileProp = e.target.files;
    const formatFileArr = mimeTypes.replaceAll('.', '').split(',');
    if (fileProp.length > 0) {
      Array.from(fileProp).forEach((file) => {
        const { type, name, size } = file;
        const extensionName = name.split('.').pop();
        const formatExists = formatFileArr.some((l) => String(type).includes(l) || extensionName === l);
        const formatError = !formatExists;
        const sizeError = size > maxFileSize;
        if (fileProps.some((item) => item.name === name)) return;
        setFileProps((prev) => [...prev, {
          name, type, size, file, formatError, sizeError,
        }]);

        fileContainerRef.current?.scrollTo({
          top: fileContainerRef.current?.scrollHeight,
          behavior: 'smooth',
        });
        setTimeout(() => {
          fileContainerRef.current?.scrollTo({
            top: fileContainerRef.current?.scrollHeight,
            behavior: 'smooth',
          });
        }, [300]);
      });
    }
  };
  const handleRemoveFileInList = (name) => {
    const updatedFileList = fileProps.filter((file) => file.name !== name);
    setFileProps(updatedFileList);
    fileInputRef.current.removeAttribute('multiple');
    fileInputRef.current.value = null;
    fileInputRef.current.setAttribute('multiple', 'multiple');
  };
  const handleUploadFile = async () => {
    setIsUploading(true);
    const formdata = new FormData();
    Array.from(fileProps).forEach(({ file }) => {
      formdata.append('file', file);
    });
    const resp = await bc.todo({ academy: cohortSession?.academy.id }).uploadFile(currentTask.id, formdata);

    if (resp?.status < 400) {
      const respData = resp.data[0];
      setIsUploading(false);
      setFileProps([]);
      sendProject({
        task: currentTask,
        githubUrl: respData?.url,
        taskStatus: 'DONE',
      });
      toast({
        position: 'top',
        title: t('alert-message:files-uploaded'),
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      closePopover();
    } else {
      setIsUploading(false);
      toast({
        position: 'top',
        title: t('alert-message:something-went-wrong-with', { property: 'Files' }),
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Popover
      id="task-status"
      isOpen={isPopoverOpen}
      onClose={handleCloseFile}
      trigger="click"
      placement="top-start"
    >

      <PopoverTrigger>
        {isGuidedExperience ? (
          <Button
            display="flex"
            isLoading={isLoading}
            isDisabled={isButtonDisabled}
            width="40px"
            height="40px"
            background="white"
            padding="20px"
            borderRadius="full"
            variant="default"
            gridGap="12px"
            onClick={() => togglePopover()}
          >
            <Icon {...textAndIcon.icon} />
          </Button>
        ) : (
          <Button
            display="flex"
            isLoading={isLoading}
            variant={allowText ? 'default' : 'none'}
            isDisabled={isButtonDisabled}
            minWidth="26px"
            minHeight="26px"
            height="fit-content"
            background={allowText ? 'blue.default' : 'none'}
            lineHeight={allowText ? '15px' : '0'}
            padding={allowText ? '12px 24px' : '0'}
            borderRadius={allowText ? '3px' : '30px'}
            textTransform={allowText ? 'uppercase' : 'none'}
            gridGap={allowText ? '12px' : '0'}
            onClick={() => togglePopover()}
          >
            {buttonChildren && buttonChildren}
            {!buttonChildren && (
              <>
                {allowText ? (
                  <>
                    <Icon {...textAndIcon.icon} />
                    {textAndIcon.text}
                  </>
                ) : (
                  <IconByTaskStatus currentTask={currentTask} />
                )}
              </>
            )}
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>{t('deliverProject.title')}</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          {noDeliveryFormat ? (
            <Box display="flex" flexDirection="column" gridGap="10px">
              <Text size="md">
                {t('deliverProject.no-delivery-needed')}
              </Text>

              <Button
                width="fit-content"
                onClick={async () => {
                  await sendProject({ task: currentTask, taskStatus: 'DONE' });
                  closePopover();
                }}
                colorScheme="blue"
                isLoading={isSubmitting}
                type="submit"
              >
                {t('deliverProject.handler-text')}
              </Button>
            </Box>
          ) : (
            <>
              {typeof currentAssetData === 'object' && deliveryFormatIsUrl ? (
                <Formik
                  initialValues={{ githubUrl: currentTask?.github_url || '' }}
                  onSubmit={async () => {
                    setIsSubmitting(true);
                    if (githubUrl !== '') {
                      await sendProject({ task: currentTask, githubUrl, taskStatus: 'DONE' });
                      setIsSubmitting(false);
                      onClickHandler();
                      closePopover();
                    }
                  }}
                  validationSchema={regexUrlExists ? customUrlValidation : githubUrlValidation}
                >
                  {() => (
                    <Form
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gridGap: currentAssetData?.delivery_instructions?.length ? '0px' : '14px',
                      }}
                    >
                      <Field name="githubUrl">
                        {({ field, form }) => {
                          setGithubUrl(form.values.githubUrl);
                          return (
                            <FormControl isInvalid={form.errors.githubUrl && form.touched.githubUrl}>
                              <Input
                                {...field}
                                type="text"
                                id="githubUrl"
                                color={lightColor}
                                _focus={{
                                  color: commonInputActiveColor,
                                }}
                                placeholder="https://..."
                              />
                              <FormErrorMessage marginTop="10px">
                                {form.errors.githubUrl}
                              </FormErrorMessage>
                            </FormControl>
                          );
                        }}
                      </Field>
                      <Box>
                        {currentAssetData?.delivery_instructions?.length > 2 ? (
                          <Box
                            height="100%"
                            margin="0 rem auto 0 auto"
                            transition="background 0.2s ease-in-out"
                            borderRadius="3px"
                            maxWidth="1280px"
                            background={useColorModeValue('white', 'dark')}
                            width={{ base: '100%', md: 'auto' }}
                            className={`markdown-body ${useColorModeValue('light', 'dark')}`}
                          >
                            <MarkDownParser content={currentAssetData?.delivery_instructions} />
                          </Box>
                        ) : (
                          <Box dangerouslySetInnerHTML={{ __html: t('deliverProject.how-to-deliver-text', { link: howToSendProjectUrl }) }} />
                        )}
                      </Box>
                      <Checkbox size="md" isChecked={acceptTC} onChange={() => setAcceptTC((prev) => !prev)}>
                        <Text fontSize="sm">
                          {t('deliverProject.deliver-confirm')}
                        </Text>
                      </Checkbox>
                      <Button
                        // mt={4}
                        width="fit-content"
                        colorScheme="blue"
                        isLoading={isSubmitting}
                        type="submit"
                        isDisabled={!acceptTC}
                      >
                        {t('deliverProject.handler-text')}
                      </Button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <Box>
                  {currentAssetData?.delivery_instructions?.length > 2 ? (
                    <Box
                      height="100%"
                      margin="0 rem auto 0 auto"
                      transition="background 0.2s ease-in-out"
                      borderRadius="3px"
                      maxWidth="1280px"
                      background={useColorModeValue('white', 'dark')}
                      width={{ base: '100%', md: 'auto' }}
                      className={`markdown-body ${useColorModeValue('light', 'dark')}`}
                    >
                      <MarkDownParser content={currentAssetData?.delivery_instructions} />
                    </Box>
                  ) : (
                    <Text size="md">
                      {t('deliverProject.file-upload')}
                      <strong>{currentAssetData?.delivery_formats?.replaceAll(',', ', ').replaceAll('.', '').toUpperCase()}</strong>
                    </Text>
                  )}

                  <Box className={`upload-wrapper ${dragOver && 'dragOver'}`} m="10px 0" width={{ base: 'auto', md: '100%' }} height="86px" position="relative" color={dragOver ? 'blue.600' : 'blue.default'} _hover={{ color: 'blue.default' }} transition="0.3s all ease-in-out" borderRadius="12px" background={featuredColor}>
                    <Box width="100%" height="100%" position="absolute" display="flex" justifyContent="center" alignItems="center" border="1px solid currentColor" cursor="pointer" borderWidth="2px" borderRadius="7px">
                      <Box className="icon-bounce">
                        <Icon icon="upload" color="currentColor" width="24" height="24" />
                      </Box>
                    </Box>
                    <Input
                      type="file"
                      name="Upload file"
                      title=""
                      ref={fileInputRef}
                      onChange={handleChangeFile}
                      accept={currentAssetData?.delivery_formats}
                      placeholder="Upload profile image"
                      multiple="multiple"
                      position="absolute"
                      width="100%"
                      height="100%"
                      cursor="pointer"
                      opacity="0"
                      padding="0"
                      onDragOver={() => setDragOver(true)}
                      onDragLeave={() => setDragOver(false)}
                    />
                  </Box>
                  <Checkbox size="md" mb="10px" isChecked={acceptTC} onChange={() => setAcceptTC((prev) => !prev)}>
                    <Text fontSize="sm">
                      {t('deliverProject.deliver-confirm')}
                    </Text>
                  </Checkbox>
                  {fileProps.some((file) => typeof file?.type === 'string') && (
                    <>
                      <Box ref={fileContainerRef} maxHeight="300px" overflowY="auto">
                        {fileProps.map((file) => {
                          const errorExists = file.formatError || file.sizeError;
                          const extension = file.name.split('.').pop();
                          const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
                          const isImage = imageExtensions.includes(extension);
                          const icon = iconDict.includes(extension) ? extension : 'file';
                          return (
                            <Box key={file.name} display="flex" my="15px" p="8px" border="1px solid" borderColor={featuredColor} background={modal.background} justifyContent="space-between" alignItems="center" borderRadius="7px">
                              <Box display="flex" gridGap="9px">
                                <Icon icon={isImage ? 'image' : icon} color={hexColor.black} width="32px" height="41px" />
                                <Box position="relative">
                                  <Text size="14px" style={{ margin: '0px' }} withLimit={file.name.length > 20}>
                                    {file.name}
                                  </Text>
                                  <Text size="14px" style={{ margin: '0px' }} color={errorExists && hexColor.danger} display="flex" gridGap="6px">
                                    {errorExists ? (
                                      <>
                                        <Icon icon="warning" width="13px" height="13px" style={{ marginTop: '5px' }} color="currentColor" full secondColor={hexColor.white2} />
                                        {file.formatError
                                          ? t('deliverProject.error-file-format')
                                          : file.sizeError && t('deliverProject.error-file-size')}
                                      </>
                                    ) : formatBytes(file.size)}
                                  </Text>
                                </Box>
                              </Box>
                              <Box
                                borderRadius="20px"
                                p="7px"
                                backgroundColor="gray.500"
                                onClick={() => {
                                  handleRemoveFileInList(file.name);
                                }}
                                cursor="pointer"
                              >
                                <Icon icon="close" width="10px" height="10px" color="#ffffff" />
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                      <Box py="12px" color={lightColor}>
                        {t('deliverProject.total-size', { size: formatBytes(fileSumSize) })}
                      </Box>
                    </>
                  )}
                  <Box display="flex" justifyContent="space-evenly" mb="6px">
                    <Button
                      variant="default"
                      onClick={() => handleUploadFile()}
                      isLoading={isUploading}
                      isDisabled={!acceptTC || isUploading || fileProps?.length === 0 || fileProps.some((file) => typeof file?.type !== 'string') || fileErrorExists || fileSumSize > maxFileSize}
                      textTransform="uppercase"
                    >
                      {t('common:upload')}
                    </Button>
                    <Button variant="link" textTransform="uppercase" onClick={() => handleCloseFile()}>
                      {t('common:cancel')}
                    </Button>
                  </Box>
                </Box>
              )}
            </>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

ProjectSubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  currentAssetData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  currentTask: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  sendProject: PropTypes.func,
  onClickHandler: PropTypes.func,
  closePopover: PropTypes.func,
  isPopoverOpen: PropTypes.bool,
  allowText: PropTypes.bool,
  togglePopover: PropTypes.func,
  buttonChildren: PropTypes.node,
  isGuidedExperience: PropTypes.bool,
};

ProjectSubmitButton.defaultProps = {
  isLoading: false,
  currentAssetData: {},
  currentTask: {},
  sendProject: () => { },
  onClickHandler: () => { },
  closePopover: () => { },
  isPopoverOpen: false,
  allowText: false,
  togglePopover: () => { },
  buttonChildren: null,
  isGuidedExperience: false,
};

IconByTaskStatus.propTypes = {
  currentTask: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  noDeliveryFormat: PropTypes.bool,
};
IconByTaskStatus.defaultProps = {
  currentTask: {},
  noDeliveryFormat: false,
};

export default ProjectSubmitButton;
