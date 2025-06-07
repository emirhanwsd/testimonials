import { faker } from "@faker-js/faker";

const createTestimonial = () => {
  return {
    id: faker.string.uuid(),
    person: {
      name: faker.person.fullName(),
      image: faker.image.personPortrait(),
      job: faker.person.jobTitle(),
    },
    company: {
      name: faker.company.name(),
    },
    text: faker.lorem.paragraph(),
  };
};

export { createTestimonial };
