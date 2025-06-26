import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../slice';
import { STATE_REDUCER_KEY } from '../constants';

const Navigator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    to,
    options = {},
    active = false,
    isSameModule = true
  } = useSelector((state) => state[STATE_REDUCER_KEY].navigate);
  useEffect(() => {
    if (active) {
      if (isSameModule) {
        navigate(to, options);
      } else {
        window.location.href = to;
      }
      dispatch(actions.disableNavigate());
    }
  }, [active]);
};

export default Navigator;
