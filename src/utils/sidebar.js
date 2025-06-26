/* eslint-disable no-use-before-define */

/**
 * @param {*} data
 * @param {Map} injectedParams any object with key and value
 * @returns {{asObject()=>Map, asArray()=>[{}]} } return methods 1. asObject 2. asArray
 * with details new Obj with added default props along with injected params if any
 */
export const generateSidebarAccordionDetails = (data = {}) => {
  const response = {};
  Object.entries(data).forEach(([key, value], index) => {
    response[key] = {
      index,
      id: key,
      isCompleted: false,
      section: 'APPLICATION',
      ...value
    };
  });

  const addProps = (injectedParams = {}) => {
    Object.entries(injectedParams).forEach(([key, value = {}]) => {
      response[key] = { ...response[key] || {}, ...value };
    });
    return {
      asObject, asArray, addProps, addPropsToAll, addMethodToAll
    };
  };

  const addPropsToAll = (props = {}) => {
    Object.entries(response).forEach(([key, value = {}]) => {
      response[key] = { ...value || {}, ...props };
    });
    return {
      asObject, asArray, addProps, addPropsToAll, addMethodToAll
    };
  };

  const addMethodToAll = (props = {}) => {
    Object.entries(props).forEach(([method = 'onClick', implementation = (prams) => prams]) => {
      Object.entries(response).forEach(([key = 'ID', value = {}]) => {
        response[key] = {
          ...value || {},
          [method]: (methodParam = null) => implementation({ ...value }, methodParam)
        };
      });
    });

    return {
      asObject, asArray, addProps, addPropsToAll, addMethodToAll
    };
  };

  const asObject = () => response;

  const asArray = () => Object.values(response) || [];

  return {
    asObject, asArray, addProps, addPropsToAll, addMethodToAll
  };
};
