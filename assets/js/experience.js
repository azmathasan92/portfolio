//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Principal DevOps Engineer",
    cardImage: "assets/images/experience-page/ukg.jpg",
    place: "UKG",
    time: "(JAN 2024 - Now)",
    desp: "<li>Working on UKG IAM Project as a Tech Lead</li><li>Leading DevOps Work of UKG Authn and Iam Authn Projects</li><li>Devops Tools: GCP, Auth0, ConcourseCI, Github Actions, Kubernetes, Helm, Terraform, Ansible, Packer, Bitbucket, SonarQube, Grafana, ELK, ForgeRock, RabbitMQ, Kafka, Radis, SpringBoot, etc</li>",
  },
  {
    title: "Lead DevOps Engineer",
    cardImage: "assets/images/experience-page/ukg.jpg",
    place: "UKG",
    time: "(Nov 2021 - Dec 2023)",
    desp: "<li>Working on UKG IAM Project</li><li>Provide Devops support to the team</li><li>Devops Tools: GCP, ConcourseCI, Kubernetes, Helm, Terraform, Ansible, Packer, Bitbucket, SonarQube, Grafana, ELK, ForgeRock, RabbitMQ, Kafka, Radis, SpringBoot, etc</li>",
  },
  {
    title: "Senior DevOps Engineer",
    cardImage: "assets/images/experience-page/knoldus.jpg",
    place: "Knoldus Inc.",
    time: "(Jul 2021 - Now)",
    desp: "<li>Worked on UKG IAM DevOps Project and Internal Knoldus Infrastructure</li><li>Task Done: Helm Repo Migration to Jfrog, Migrating Apps to GCP from Openstack, Enhancement of existing deployment pipelines and etc</li><li>Tools and technologies that I am currently working on: Linux, Docker, Kubernetes, Helm3, Terraform, Packer, Ansible, Vault, Openstack, GCP, Concourse etc</li>",
  },
  {
    title: "DevOps Engineer",
    cardImage: "assets/images/experience-page/knoldus.jpg",
    place: "Knoldus Inc.",
    time: "(Jul 2019 - June 2021)",
    desp: "<li>Worked on philips project to handle all the DevOps stuff</li><li>Then moved to the HEB project and here I impemented whole CI/CD pipeline and Databricks monitoring setup from scratch</li><li>Then Moved to UKG project in that created CI/CD pipeline using concourse and also wrote terraform modules for the infrastructure.</li>",
  },
  {
    title: "DevOps Intern",
    cardImage: "assets/images/experience-page/knoldus.jpg",
    place: "Knoldus Inc.",
    time: "(Jan, 2019 - Jun, 2019)",
    desp: "<li>I started my career with knoldus as a software intern</li> <li>I Worked on scala lagom framework to build a knol reward application in my 3 month of training period</li> <li>Then I moved to DevOps and start training on DevOps tools and technologies</li> <li>In DevOps training I learnt the popular tools like Docker, Jenkins, Kubernetes, Prometheus, Grafana, ELK Stack, linux, Bash scripting, Python scripting, etc.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Certified Kubernetes Administrator",
    cardImage: "assets/images/experience-page/cka.png",
    description:
      "",
  },
  {
    title: "Certified Kubernetes Application Developer",
    cardImage: "assets/images/experience-page/ckad.png",
    description:
      "",
  },
  {
    title: "Certified Azure Fundamentals",
    cardImage: "assets/images/experience-page/azure.png",
    description:
      "",
  },
  {
    title: "Certified Python Entry Level Programmer",
    cardImage: "assets/images/experience-page/python.png",
    description:
      "",
  },
  {
    title: "HashiCorp Certified Terraform Associate",
    cardImage: "assets/images/experience-page/terraform.png",
    description:
      "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 450px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Philips Lifeline",
    image: "assets/images/experience-page/philips.jpg",
    time: "10/2019 - 01/2020",
    desp: "<li><b>Philips Lifeline</b> is an easy-to-use medical alert system that lets you summon help any time of the day or night – even if you can’t speak. All you have to do is press your medical alert button, worn on a wristband or pendant, and a trained Personal Response Associate will ensure you get help fast. That’s why Philips Lifeline provides the #1 Medical Alert System to offer you something else: peace of mind.</li><hr /><li><b>Technologies Used:</b>  AWS, Kubernetes, Docker, Jenkins, Kafka, Cassandra, PreMonR Monitoring, Terraform.</li>",
  },
  {
    title: "HEB",
    image: "assets/images/experience-page/heb.jpg",
    time: "01/2020 - 08/2020",
    desp: "<li><b>HEB</b> - is an American privately held supermarket chain based in San Antonio, Texas, with more than 340 stores throughout the U.S. state of Texas, as well as in northeast Mexico. The company also operates Central Market, an upscale organic and fine foods retailer. The Digital Forecast and Replenishment (FAR) team is responsible for developing and maintaining critical software applications that forecast, maintain, and optimize store and warehouse inventory levels.</li><hr /><li><b>Technologies Used:</b> Azure, Databricks, Kubernetes, Docker, Jenkins, Oracle, Data factory, Datadog, NewRelic, Azure Monitor, Grafana, etc</li>",
  },
  {
    title: "UKG Notifications",
    image: "assets/images/experience-page/ukg.jpg",
    time: "08/2020 - 04/2021",
    desp: "<li><b>UKG Notifications</b> - This is an HR and workforce management solution in which we worked on a notification platform, The aim of this to enable two-way communication using sms, slack, and email.</li><hr /><li><b>Technologies Used:</b> Kubernetes, Docker, ConcourseCI, Terraform, AWS(SES, SQS, Pinpoint, Kinesis, and DynamoDB), Quark(In-house Tool for k8 deployment), influxDB, Grafana, Spring, Java, BItbucket, Sonar, MongoDB, Kafka, Rabbit, ISTIO, etc</li>",
  },
  {
    title: "UKG IAM Authn",
    image: "assets/images/experience-page/ukg.jpg",
    time: "04/2021 - now",
    desp: "<li><b>UKG IAM-DevOps</b> - This is a UKG Platform for Identity and Access Management that is built on top of the ForgeRock and OpenStack.</li><hr /><li><b>Technologies Used:</b> Kubernetes, Helm, Docker, ConcourseCI, Terraform, Packer, ForgeRock, OpenStack, Fling, GCP, influxDB, Grafana, Spring, Java, BItbucket, Sonar, MongoDB, Kafka, Rabbit, ISTIO, ELK Stack, etc</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="400">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
