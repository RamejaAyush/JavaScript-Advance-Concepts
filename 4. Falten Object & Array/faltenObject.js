const faltenObject = (obj, prefix = 'ayush') => {
  return Object.keys(obj).reduce((acc, key) => {
    let pre = prefix.length ? prefix + '_' : ''

    if (
      typeof obj[key] == 'object' &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      Object.assign(acc, faltenObject(obj[key], pre + key))
    } else {
      acc[pre + key] = obj[key]
    }

    return acc
  }, {})
}

const ayush = {
  user: 1,
  name: {
    first_name: 'Ayush',
    last_name: 'Rameja',
  },
  details: {
    age: 23,
    date_of_birth: '00:00:00',
  },
  hobbies: {
    development: {
      frontend_dev: {
        name: 'HTML',
        name: 'CSS',
        name: 'JavaScript',
      },
    },
    UIUX: {
      name: 'Figma',
    },
  },
}

console.log(faltenObject(ayush))

/* Output
{
  ayush_user: 1,
  ayush_name_first_name: 'Ayush',
  ayush_name_last_name: 'Rameja',
  ayush_details_age: 23,
  ayush_details_date_of_birth: '00:00:00',
  ayush_hobbies_development_frontend_dev_name: 'JavaScript',
  ayush_hobbies_UIUX_name: 'Figma'
}
*/
