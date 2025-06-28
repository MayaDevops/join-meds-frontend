import { _ } from 'utils/lodash';
// import {
//   // AccountsSvg,
//   FoodGrainsSvg, HomeSvg, InfrastructureSvg,
//   InnovationBestPracticesSvg, InspectionSvg,
//   PMPoshanmenuSvg, ReportsSvg, SchoolHealthProgramSvg, SchoolInformationSvg, StudentStrengthSvg,
//   DailyAttendanceSvg,
//   LogoutSvg
// } from '../../../assets';
import { ROLE } from 'pages/common/constants';
// import { OFFICE_TYPE_ID_CONSTATNTS } from '../../../pages/commonServices/constants';

// Default menu items
export const SchoolMenuItems = [
  {
    src: '',
    text: 'Home',
    bgColor: 'bg-red-400',
    textColor: 'text-zinc-300',
    fontWeight: 'font-semibold',
    path: '/ui/mid-day-meal/school/dashboard',
    // officeTypeId: OFFICE_TYPE_ID_CONSTATNTS.SCHOOL_OFFICE,
    roles: [
      ROLE.HEADMASTER,
      ROLE.ADMINISTRATOR,
      ROLE.OPERATOR,
      ROLE.VERIFIER,
      ROLE.APPROVER,
      ROLE.AUTHORIZER
    ]
  },
  {
    src: '',
    text: 'School Information',
    textColor: 'text-teal-800',
    fontWeight: 'font-medium',
    path: '/ui/mid-day-meal/school/school-information',
    // officeTypeId: OFFICE_TYPE_ID_CONSTATNTS.SCHOOL_OFFICE,
    roles: [
      ROLE.HEADMASTER,
      ROLE.ADMINISTRATOR,
      ROLE.OPERATOR,
      ROLE.VERIFIER,
      ROLE.APPROVER,
      ROLE.AUTHORIZER
    ]
  },
  {
    src: '',
    text: 'Student Strength',
    textColor: 'text-teal-800',
    fontWeight: 'font-medium',
    path: '/ui/mid-day-meal/school/school-strength',
    // officeTypeId: OFFICE_TYPE_ID_CONSTATNTS.SCHOOL_OFFICE,
    roles: [
      ROLE.HEADMASTER,
      ROLE.ADMINISTRATOR,
      ROLE.OPERATOR,
      ROLE.VERIFIER,
      ROLE.APPROVER,
      ROLE.AUTHORIZER
    ]
  },
  {
    src: '',
    text: 'Attendance',
    textColor: 'text-teal-800',
    fontWeight: 'font-medium',
    path: '/ui/mid-day-meal/school/daily-attendance',
    // officeTypeId: OFFICE_TYPE_ID_CONSTATNTS.SCHOOL_OFFICE,
    roles: [
      ROLE.HEADMASTER,
      ROLE.ADMINISTRATOR,
      ROLE.OPERATOR,
      ROLE.VERIFIER,
      ROLE.APPROVER,
      ROLE.AUTHORIZER
    ]
  },
  {
    src: '',
    text: 'PM Poshan menu',
    textColor: 'text-teal-800',
    fontWeight: 'font-medium',
    path: '/ui/mid-day-meal/school/pm-poshan-menu',
    // officeTypeId: OFFICE_TYPE_ID_CONSTATNTS.SCHOOL_OFFICE,
    roles: [
      ROLE.HEADMASTER,
      ROLE.ADMINISTRATOR,
      ROLE.OPERATOR,
      ROLE.VERIFIER,
      ROLE.APPROVER,
      ROLE.AUTHORIZER
    ]
  },
  {
    src: '',
    text: 'Food Grains',
    textColor: 'text-teal-800',
    fontWeight: 'font-medium',
    path: '/ui/mid-day-meal/school/food-grain',
    // officeTypeId: OFFICE_TYPE_ID_CONSTATNTS.SCHOOL_OFFICE,
    roles: [
      ROLE.HEADMASTER,
      ROLE.ADMINISTRATOR,
      ROLE.OPERATOR,
      ROLE.VERIFIER,
      ROLE.APPROVER,
      ROLE.AUTHORIZER
    ]
  }
];


