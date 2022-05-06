import { format } from 'date-fns'

export const COLUMNS = [
  // {
  //   Header: 'Id',
  //   Footer: 'Id',
  //   accessor: 'id',
  //   disableFilters: true,
  //   sticky: 'left'
  // },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'firstName',
    sticky: 'left'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'lastName',
    sticky: 'left'
  },
  // {
  //   Header: 'Date of Birth',
  //   Footer: 'Date of Birth',
  //   accessor: 'date_of_birth',
  //   Cell: ({ value }) => {
  //     return format(new Date(value), 'dd/MM/yyyy')
  //   }
  // },
  {
    Header: 'Age',
    Footer: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Blood Group',
    Footer: 'Blood Group',
    accessor: 'bloodGroup'
  },
  {
    Header: 'Address',
    Footer: 'Address',
    accessor: 'location'
  },
  {
    Header: 'Mobile',
    Footer: 'Mobile',
    accessor: 'mobile'
  },
  {
    Header: 'Facility Choice',
    Footer: 'Facility Choice',
    accessor: 'facilityChoice'
  }
  // {
  //   Header: 'Email',
  //   Footer: 'Email',
  //   accessor: 'email'
  // },
]

export const GROUPED_COLUMNS = [
  // {
  //   Header: 'Id',
  //   Footer: 'Id',
  //   accessor: 'id'
  // },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Blood Group',
        Footer: 'Blood Group',
        accessor: 'bloodGroup'
      },
      {
        Header: 'Address',
        Footer: 'Address',
        accessor: 'location'
      },
      {
        Header: 'Mobile',
        Footer: 'Mobile',
        accessor: 'mobile'
      },
      {
        Header: 'Facility Choice',
        Footer: 'Facility Choice',
        accessor: 'facilityChoice'
      }
    ]
  }
]