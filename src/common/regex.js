/* eslint-disable no-misleading-character-class */

// export const ML = /^[\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-
// \u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F /\s/g]*$/;
export const ML = /^[\u0D00-\u0D7F\u200C\u200D\s]+$/;
export const ML_NUMERIC = /^[\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F 0-9 /\s/g]*$/;
export const ML_SPECIAL = /^[\u0D00-\u0D7F!@#$%^&*]+$/;
export const EN_NUMERIC_SPECIAL = /^([a-zA-Z])[a-zA-Z0-9-]*$/;
export const EN = /^[A-Za-z.'"\s]*$/;
export const EN_NUMERIC = /^[A-Za-z0-9 /\s/g]*$/;
export const EN_SPECIAL = /^[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
export const NO_LEAD_TRAIL_SPACE = /^\S(.*\S)?$/;
export const EN_ML = /^[A-Za-z. \u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F /\s/g]*$/;

export const NUMERIC = /^[0-9]*$/;
export const AADHAAR = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
// export const MOBILE = /^(\+\d{1,3}[- ]?)?\d{10}$/;
export const MOBILE = /^[5-9]{1}[0-9]/;
export const PASSPORT = /^[A-Z]{1}[0-9]{7}$/;
export const SSN = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;

export const EN_NUMERIC_LIMITED_SPECIAL = /^[a-zA-Z0-9/\-.]+$/;
export const EN_SPECIAL_NUMERIC = /^[0-9a-zA-Z\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/;
export const ML_SPECIAL_NUMERIC = /^[0-9\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F /!@#$ %^&* ()_ +=\-[\]{}; ':"\\|,.<>/?]+$/;
export const POSTAL_CODE_OUTSIDE = /^[0-9/\-_.]+$/;
export const PDF_TYPE = /(\.pdf)$/i;
export const IMAGE_TYPE = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
export const VIDEO_TYPE = /(\.mp4|\.mpeg|\.webm|\.avi)$/i;
export const FILE_NO_SPECIAL = /^[0-9\-_.]+$/;
export const EN_SPECIAL_NUMBERS = /^[a-zA-Z0-9/\-.(), ]+$/;
export const NUM_ONLY = /[^0-9]/g;
export const EMAIL = /\S+@\S+\.[A-Za-z]{2,3}$/;
export const IFSC = /^[A-Z]{4}0[A-Z0-9]{6}$/;
export const DECIMAL_OR_NUMBER = /^([0-9]*\.?[0-9]+|[0-9]+)$/;
export const DECIMAL_OR_NUM_CHECK = /[^0-9.]/g;
