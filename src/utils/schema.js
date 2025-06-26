import { yupResolver } from '@hookform/resolvers/yup';
import i18next from 'i18next';
import { useMemo } from 'react';

const useSchema = (getSchema) => {
  const locale = i18next.language;
  const resolver = useMemo(getSchema, [locale]);
  return yupResolver(resolver);
};

export default useSchema;
