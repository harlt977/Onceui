import { InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Harold',
  lastName: 'Tan',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Senior Software Engineer',
  avatar: '/images/avatar.jpg',
  location: 'America/Los_Angeles', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/santa512',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/harldt',
  },
  {
    name: 'Telegram',
    icon: 'telegram',
    link: 'https://t.me/mickey1220',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:haroldt977@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and Game Changer </>,
  subline: (
    <>
      I'm Harold Tan, a <InlineCode>Full Stack Engineer</InlineCode> sepcialized
      in building great software with smart solutions 😎
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://calendly.com/haroldt977/30min',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Skilled at simplifying complex challenges in all stages of development,
        including UI, backend, and infra - Contributed to great projects at
        leading tech companies as well as accelerating startup growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Odoo',
        timeframe: '04/2020 - Present',
        role: 'Senior Software Engineer',
        achievements: [
          <>
            Full-Stack Development: Designed and maintained applications for
            various businesses, leveraging technologies like React, Next.js,
            Node.js, Java, Python, and AI.
          </>,
          <>
            Infrastructure and Integrations: Streamlined deployments with AWS,
            Azure, and CI/CD tools while enhancing user engagement with Twilio,
            SendGrid, and push notifications.
          </>,
          <>
            Scalable Monitoring: Ensured reliability with Prometheus and
            Grafana, delivering tailored solutions across industries in Agile
            teams.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'MindBridge',
        timeframe: '11/2018 - 03/2020',
        role: 'Software Development Engineer',
        achievements: [
          <>
            Developed AI-Driven Financial Platform: Contributed to building an
            AI-powered financial intelligence platform.
          </>,
          <>
            Improved Scalability and Infrastructure: Migrated legacy systems to
            Azure with Docker and Kubernetes.
          </>,
          <>
            Delivered Insights and Integrations: Built analytics dashboards with
            D3.js and Elasticsearch and integrated payment systems.
          </>,
        ],
        images: [],
      },
      {
        company: 'Sylogist',
        timeframe: '02/2016 - 09/2018',
        role: 'Software Developer',
        achievements: [
          <>
            Developed SaaS Solutions: Contributed to building SaaS products for
            non-profits and education clients using the MERN stack.
          </>,
          <>
            API Development and Monitoring: Built scalable RESTful APIs with
            Node.js and Express, and optimized performance using New Relic and
            Datadog.
          </>,
          <>
            Security and Feature Enhancements: Strengthened security with OAuth
            and JWT, and collaborated with teams to implement features that
            improved product satisfaction.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Mount Royal University',
        timeframe: '2011 - 2015',
        description: <>Bachelor of Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Program Languages',
        description: <>JavaScript, TypeScript, Python, PHP</>,
        images: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            alt: 'JavaScript',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            alt: 'TypeScript',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
            alt: 'Python',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            alt: 'PHP',
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: 'Front-End',
        description: (
          <>
            React.js, React Native, Next.js, Angular, Svelte, Tailwind CSS,
            Vite, Figma
          </>
        ),
        images: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            alt: 'React',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            alt: 'Angular',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            alt: 'Tailwind CSS',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
            alt: 'Svelte',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg',
            alt: 'jQuery',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
            alt: 'Vite',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
            alt: 'Figma',
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: 'Back-End',
        description: (
          <>Node.js, Express.js, Nest.js, MySQL, MongoDB, PostgreSQL, Redis</>
        ),
        images: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
            alt: 'Node.js',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
            alt: 'Express.js',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
            alt: 'Nest.js',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
            alt: 'MySQL',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
            alt: 'PostgreSQL',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            alt: 'MongoDB',
            width: 3,
            height: 3,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
            alt: 'Redis',
            width: 3,
            height: 3,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
