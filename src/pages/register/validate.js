import { EN_SPECIAL_NUMBERS } from 'common/regex';
import { t } from 'pages/common/components';
import * as yup from 'yup';


export const OrganizationRegisterDetailsSchema = yup.object().shape({

    orgName: yup.string()
        .transform((value) => value.trim())
        .required(t('isRequired', { type: t('Business/Organization Name') }))
        .max(200, t('shouldNotBeGreaterThan', { type: t('Business/Organization Name'), count: '200', unit: t('character') }))
        .matches(EN_SPECIAL_NUMBERS, t('invalidType', { type: t('Business/Organization Name') })),

    officialEmail: yup.string()
        .transform((value) => value.trim())
        .required(t('isRequired', { type: t('Email Id') }))
        .when('officeName', {
            is: (value) => value && value.trim() !== '',
            then: () => yup.string()
                .matches(EMAIL, t('invalidType', { type: t('Email Id') }))
                .matches(NO_LEAD_TRAIL_SPACE, t('notAllowed', { type: t('leadingAndTrailingSpaces') }))
        }),

    incorporationNo: yup.string()
        .transform((value) => value.trim())
        .required(t('isRequired', { type: t('Incorporation No') }))
        .max(200, t('shouldNotBeGreaterThan', { type: t('Incorporation No'), count: '200', unit: t('character') }))
        .matches(EN_SPECIAL_NUMBERS, t('invalidType', { type: t('BIncorporation No') })),

    emailMobile: yup.string()
        .transform((value) => value.trim())
        .required(t('isRequired', { type: t('Mobile Number') }))
        .max(10, t('shouldNotBeGreaterThan', { type: t('Mobile Number'), count: '10', unit: t('numbers') }))
        .min(10, t('mustBe', {
            type: t('Mobile Number'),
            count: '10',
            unit: t('numbers')
        })),

    password: yup
        .string()
        .required(t('isRequired', { type: t('Password') }))
        .min(6, t('mustBeAtLeast', { type: t('Password'), count: 7, unit: t('characters') })),

    confirmPassword: yup
        .string()
        .required(t('isRequired', { type: t('Confirm Password') }))
        .min(6, t('mustBeAtLeast', { type: t('Confirm Password'), count: 7, unit: t('characters') }))
        .oneOf([yup.ref('password')], t('Password Mismatch', { type: t('Confirm Password') }))

})
    .required();