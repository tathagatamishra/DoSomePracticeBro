// Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
// (note: give general solution).
// Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].

// Expected Output - Below is the  order of address in which sendmail function is going to send mail.
//            abc@channelier.com
//            abc@yahoo.com
//            abc@gmail.com
//            abc@hotmail.com


let array = [
  "ghi@hotmail.com",
  "def@yahoo.com",
  "ghi@gmail.com",
  "abc@channelier.com",
  "abc@hotmail.com",
  "def@hotmail.com",
  "abc@gmail.com",
  "abc@yahoo.com",
  "def@channelier.com",
  "jkl@hotmail.com",
  "ghi@yahoo.com",
  "def@gmail.com",
];

function sendmail(emailAdd) {
  const domainMap = new Map();

  for (const email of emailAdd) {
    const domain = email.split("@")[1];

    if (!domainMap.has(domain)) {
      domainMap.set(domain, email);
    } else {
      const currentAddress = domainMap.get(domain);
      if (email < currentAddress) {
        domainMap.set(domain, email);
      }
    }
  }

  let ans = [...domainMap.values()];

  return ans;
}

console.log(sendmail(array));
