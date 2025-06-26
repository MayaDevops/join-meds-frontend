import { Toast, t } from 'common/components';
import { IMAGE_TYPE, PDF_TYPE, VIDEO_TYPE } from 'common/regex';

export const validatePDFFileSize = (files = '') => {
  const { errorTost } = Toast;
  let flag = false;
  const fileSize = files.size / 1024 / 1024;
  if (fileSize > 2) {
    errorTost({
      title: '',
      description: t('fileSizeLimit')
    });
    flag = true;
  } else if (!PDF_TYPE.exec(files.name)) {
    errorTost({
      title: '',
      description: t('supportTypePDF')
    });
    flag = true;
  }
  return flag;
};

export const validateImageFileSize = (files = '') => {
  const { errorTost } = Toast;
  let flag = false;
  const fileSize = files.size / 1024 / 1024;
  if (fileSize > 2) {
    errorTost({
      title: '',
      description: t('fileSizeLimit')
    });
    flag = true;
  } else if (!IMAGE_TYPE.exec(files.name)) {
    errorTost({
      title: '',
      description: t('supportTypeImage')
    });
    flag = true;
  }
  return flag;
};

export const validateVideoSize = (files = '') => {
  const { errorTost } = Toast;
  let flag = false;
  const fileSize = files.size / 1024 / 1024;
  if (fileSize > 30) {
    errorTost({
      title: '',
      description: t('videoSizeLimit')
    });
    flag = true;
  } else if (!VIDEO_TYPE.exec(files.name)) {
    errorTost({
      title: '',
      description: t('supportTypeVideo')
    });
    flag = true;
  }
  return flag;
};
