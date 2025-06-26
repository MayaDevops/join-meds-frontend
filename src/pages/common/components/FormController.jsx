/* eslint-disable no-nested-ternary */
import { Controller } from 'react-hook-form';
import { _ } from 'utils/lodash';
import Dropdown from './select';

const FormController = (props) => {
  const {
    type, name, control, errors, optionKey = 'id', lngOptions, isMulti, disabled, onKeyPress = () => {}
  } = props;
  const error = _.get(errors, `${name}.message`, null);

  if (type === 'select') {
    return (
      <>
        <div id={name} className="mt-[-200px] absolute" />
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              {...props}
              {...{ error }}
              isClearable
              // onChange={(e) => {
              //   const newValue = isMulti ? e?.map((item) => _.get(item, optionKey))
              //     : e?.[optionKey];
              //   field.onChange(newValue);
              //   props?.handleChange?.(e);
              // }}
              onChange={(e) => {
                const newValue = isMulti
                  ? e ? e?.map((item) => _.get(item, optionKey)) : []
                  : e ? _.get(e, optionKey) : null;
                field.onChange(newValue);
                props?.handleChange?.(e);
              }}
              onKeyPress={onKeyPress}
              lngOptions={lngOptions}
              isMulti={isMulti}
              disabled={disabled}
            />
          )}
        />
      </>
    );
  }
  return null;
};

export default FormController;

// example onChange code

// "onChange={(e) => {
//                 field.onChange(e ? e[optionKey] : e);
//                 props?.handleChange?.(e);
//               }}"
