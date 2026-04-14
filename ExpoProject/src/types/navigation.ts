// Stack routes: app tabs + detail page that receives a contact id.
export type RootStackParamList = {
  CampusTabs: undefined;
  ContactDetails: { contactId: string };
};

// Bottom tab routes available inside CampusTabs.
export type CampusTabParamList = {
  Home: undefined;
  Contacts: undefined;
  Schedule: undefined;
  NoticeBoard: undefined;
};
