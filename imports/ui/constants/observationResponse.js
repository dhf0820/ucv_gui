export default {
  status: 200,
  message: "Ok",
  resourceType: "Observation",
  pageNumber: 1,
  totalPages: 2,
  countInPage: 16,
  bundleId: "4aa94480-605f-4680-845b-43d316fbae78",
  queryId: "62fbc6c4ead3c283d31baf5d",
  header: {
    queryId: "62fbc6c4ead3c283d31baf5d",
    fhirId: "62f1c5dab3070d0b40e7aac1",
    cacheUrl:
      "http://docker1.ihids.com:20100//api/rest/v1/Cache/62fbc6c4ead3c283d31baf5d/",
    patientId: "",
    pageId: 1,
    resourceType: "Observation",
    createdAt: "2022-08-16T16:33:08.369815656Z",
  },
  bundle: {
    id: "4aa94480-605f-4680-845b-43d316fbae78",
    type: "searchset",
    link: [
      {
        relation: "self",
        url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation?patient=12724066",
      },
      {
        relation: "next",
        url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation?patient=12724066\u0026-pageContext=T3BlblBsYXRmb3JtRmhpckNvbnRleHQ9dHJ1ZSZwYWdlQ29udGV4dD1mYmNjNWRjNi1hYmI5LTRmZmMtYmZlYy1kZTdjMTZiYzhlY2MmY29uY2VwdD1jaGFydGVkX29ic2VydmF0aW9u\u0026-pageDirection=NEXT",
      },
    ],
    entry: [
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-1-73080191",
        resource: {
          resourceType: "Observation",
          id: "SH-1-73080191",
          meta: {
            versionId: "73483029",
            lastUpdated: "2022-04-27T13:09:32.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Alcohol\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 27, 2022  1:09 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "363905002",
                display:
                  "Details of alcohol drinking behavior (observable entity)",
              },
            ],
            text: "Alcohol",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-04-27T13:09:32.000Z",
          hasMember: [{ reference: "Observation/SH-73080191-q4625813" }],
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73080191-q4625813",
        resource: {
          resourceType: "Observation",
          id: "SH-73080191-q4625813",
          meta: {
            versionId: "73483029",
            lastUpdated: "2022-04-27T13:09:32.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Alcohol type\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: Liquor\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 27, 2022  1:09 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "363905002",
                display:
                  "Details of alcohol drinking behavior (observable entity)",
              },
            ],
            text: "SHX Alcohol type",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-04-27T13:09:32.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "6524003",
                display: "Distilled spirits (substance)",
              },
            ],
            text: "Liquor",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-16-73268933",
        resource: {
          resourceType: "Observation",
          id: "SH-16-73268933",
          meta: {
            versionId: "73268933",
            lastUpdated: "2022-02-03T17:41:08.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Employment/School\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Feb  3, 2022  5:41 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "224362002",
                display: "Employment status (observable entity)",
              },
            ],
            text: "Employment/School",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-02-03T17:41:08.000Z",
          hasMember: [{ reference: "Observation/SH-73268933-q4625873" }],
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73268933-q4625873",
        resource: {
          resourceType: "Observation",
          id: "SH-73268933-q4625873",
          meta: {
            versionId: "73268933",
            lastUpdated: "2022-02-03T17:41:08.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Employment/School status\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: Part time\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Feb  3, 2022  5:41 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "224362002",
                display: "Employment status (observable entity)",
              },
            ],
            text: "SHX Employment/School status",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-02-03T17:41:08.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "160904001",
                display: "Part-time employment (finding)",
              },
            ],
            text: "Part time",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-33-73095605",
        resource: {
          resourceType: "Observation",
          id: "SH-33-73095605",
          meta: {
            versionId: "73486947",
            lastUpdated: "2022-04-27T18:14:58.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Home/Environment\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 27, 2022  6:14 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "4683004",
                display: "Living condition (observable entity)",
              },
            ],
            text: "Home/Environment",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-04-27T18:14:58.000Z",
          hasMember: [{ reference: "Observation/SH-73095605-q4625929" }],
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73095605-q4625929",
        resource: {
          resourceType: "Observation",
          id: "SH-73095605-q4625929",
          meta: {
            versionId: "73486947",
            lastUpdated: "2022-04-27T18:14:58.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Smoker in household\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: No\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 27, 2022  6:14 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "228524006",
                display: "Exposed to tobacco smoke at home (finding)",
              },
            ],
            text: "SHX Smoker in household",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-04-27T18:14:58.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "373067005",
                display: "No (qualifier value)",
              },
            ],
            text: "No",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-70-73095573",
        resource: {
          resourceType: "Observation",
          id: "SH-70-73095573",
          meta: {
            versionId: "73483039",
            lastUpdated: "2022-04-27T13:21:32.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Sexual\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 27, 2022  1:21 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "363901006",
                display:
                  "Detail of sexuality and sexual activity (observable entity)",
              },
            ],
            text: "Sexual",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-04-27T13:21:32.000Z",
          hasMember: [{ reference: "Observation/SH-73095573-q4626038" }],
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73095573-q4626038",
        resource: {
          resourceType: "Observation",
          id: "SH-73095573-q4626038",
          meta: {
            versionId: "73483039",
            lastUpdated: "2022-04-27T13:21:32.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Sexually active\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: Yes\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 27, 2022  1:21 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "228453005",
                display: "Sexually active (finding)",
              },
            ],
            text: "SHX Sexually active",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-04-27T13:21:32.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "373066001",
                display: "Yes (qualifier value)",
              },
            ],
            text: "Yes",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-81-73268931",
        resource: {
          resourceType: "Observation",
          id: "SH-81-73268931",
          meta: {
            versionId: "73268931",
            lastUpdated: "2022-02-03T17:41:08.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Substance Abuse\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Feb  3, 2022  5:41 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "363908000",
                display: "Details of drug misuse behavior (observable entity)",
              },
            ],
            text: "Substance Abuse",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-02-03T17:41:08.000Z",
          hasMember: [
            { reference: "Observation/SH-73268931-q4625833" },
            { reference: "Observation/SH-73268931-q4625841" },
          ],
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73268931-q4625833",
        resource: {
          resourceType: "Observation",
          id: "SH-73268931-q4625833",
          meta: {
            versionId: "73268931",
            lastUpdated: "2022-02-03T17:41:08.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Substance abuse use\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: Current\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Feb  3, 2022  5:41 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "363908000",
                display: "Details of drug misuse behavior (observable entity)",
              },
            ],
            text: "SHX Substance abuse use",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-02-03T17:41:08.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "15240007",
                display: "Current (qualifier value)",
              },
            ],
            text: "Current",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73268931-q4625841",
        resource: {
          resourceType: "Observation",
          id: "SH-73268931-q4625841",
          meta: {
            versionId: "73268931",
            lastUpdated: "2022-02-03T17:41:08.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Substance abuse frequency\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: 1-2 times per year\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Feb  3, 2022  5:41 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "228390007",
                display: "Frequency of drug misuse (observable entity)",
              },
            ],
            text: "SHX Substance abuse frequency",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2022-02-03T17:41:08.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "1381000175109",
                display: "One to two times per year (qualifier value)",
              },
            ],
            text: "1-2 times per year",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-93-73033543",
        resource: {
          resourceType: "Observation",
          id: "SH-93-73033543",
          meta: {
            versionId: "73157669",
            lastUpdated: "2021-04-20T16:08:16.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Tobacco\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 20, 2021  4:08 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [{ system: "http://loinc.org", code: "88028-6" }],
            text: "Tobacco",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2021-04-20T16:08:16.000Z",
          hasMember: [
            { reference: "Observation/SH-73033543-q4625825" },
            { reference: "Observation/SH-73033543-q4625741" },
          ],
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73033543-q4625825",
        resource: {
          resourceType: "Observation",
          id: "SH-73033543-q4625825",
          meta: {
            versionId: "73157669",
            lastUpdated: "2021-04-20T16:08:16.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Tobacco use\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: Former smoker, quit more than 30 days ago\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 20, 2021  4:08 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [{ system: "http://loinc.org", code: "72166-2" }],
            text: "SHX Tobacco use",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2021-04-20T16:08:16.000Z",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "8517006",
                display: "Ex-smoker (finding)",
              },
            ],
            text: "Former smoker, quit more than 30 days ago",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/SH-73033543-q4625741",
        resource: {
          resourceType: "Observation",
          id: "SH-73033543-q4625741",
          meta: {
            versionId: "73157669",
            lastUpdated: "2021-04-20T16:08:16.000Z",
          },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestion\u003C/b\u003E: SHX Tobacco number of years\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResponse\u003C/b\u003E: 12\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EIssued Date\u003C/b\u003E: Apr 20, 2021  4:08 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "social-history",
                  display: "Social History",
                },
              ],
              text: "Social History",
            },
          ],
          code: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "228487000",
                display: "Total time smoked (observable entity)",
              },
            ],
            text: "SHX Tobacco number of years",
          },
          subject: { reference: "Patient/12724066" },
          issued: "2021-04-20T16:08:16.000Z",
          valueString: "12",
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/M-198517456",
        resource: {
          resourceType: "Observation",
          id: "M-198517456",
          meta: { versionId: "1", lastUpdated: "2022-07-19T14:36:34.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: D-Infection Control Worklist Notify\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResult\u003C/b\u003E: Yes\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EEffective Date\u003C/b\u003E: Jul 19, 2022  2:36 P.M. UTC\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198517456-2022071914363400",
            },
          ],
          status: "final",
          category: [
            {
              extension: [
                {
                  valueCode: "unknown",
                  url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                },
              ],
            },
          ],
          code: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "23931154",
                display: "D-Infection Control Worklist Notify",
                userSelected: true,
              },
            ],
            text: "D-Infection Control Worklist Notify",
          },
          subject: { reference: "Patient/12724066" },
          encounter: { reference: "Encounter/97978505" },
          effectiveDateTime: "2022-07-19T14:36:34.000Z",
          issued: "2022-07-19T14:36:34.000Z",
          performer: [
            {
              extension: [
                {
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                        code: "LA",
                        display: "legal authenticator",
                      },
                    ],
                    text: "legal authenticator",
                  },
                  url: "http://hl7.org/fhir/StructureDefinition/event-performerFunction",
                },
                {
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                        code: "PPRF",
                        display: "primary performer",
                      },
                    ],
                    text: "primary performer",
                  },
                  url: "http://hl7.org/fhir/StructureDefinition/event-performerFunction",
                },
              ],
              reference: "Practitioner/1",
            },
          ],
          valueCodeableConcept: {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "373066001",
                display: "Yes (qualifier value)",
              },
            ],
            text: "Yes",
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Observation/M-198517454",
        resource: {
          resourceType: "Observation",
          id: "M-198517454",
          meta: { versionId: "1", lastUpdated: "2022-07-19T14:36:33.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EObservation\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Id\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECategories\u003C/b\u003E: Vital Signs\u003C/p\u003E\u003Cp\u003E\u003Cb\u003ECode\u003C/b\u003E: Temperature Oral\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EResult\u003C/b\u003E: 37.2 degC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EInterpretation\u003C/b\u003E: Normal\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EEffective Date\u003C/b\u003E: Jul 18, 2022  7:21 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EReference Range\u003C/b\u003E: 35.8-37.3 degC\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198517454-2022071914363300",
            },
          ],
          status: "final",
          category: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/observation-category",
                  code: "vital-signs",
                  display: "Vital Signs",
                },
              ],
              text: "Vital Signs",
            },
          ],
          code: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "703558",
                display: "Temperature Oral",
                userSelected: true,
              },
              { system: "http://loinc.org", code: "8331-1" },
              { system: "http://loinc.org", code: "8310-5" },
            ],
            text: "Temperature Oral",
          },
          subject: { reference: "Patient/12724066" },
          encounter: { reference: "Encounter/97978505" },
          effectiveDateTime: "2022-07-18T19:21:00.000Z",
          issued: "2022-07-18T19:21:40.000Z",
          performer: [
            {
              extension: [
                {
                  valueCodeableConcept: {
                    coding: [
                      {
                        system:
                          "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                        code: "LA",
                        display: "legal authenticator",
                      },
                    ],
                    text: "legal authenticator",
                  },
                  url: "http://hl7.org/fhir/StructureDefinition/event-performerFunction",
                },
              ],
              reference: "Practitioner/11638321",
            },
          ],
          valueQuantity: {
            value: 37.2,
            unit: "degC",
            system: "http://unitsofmeasure.org",
            code: "Cel",
          },
          interpretation: [
            {
              coding: [
                {
                  system:
                    "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/52",
                  code: "214",
                  userSelected: true,
                },
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                  code: "N",
                  display: "Normal",
                },
              ],
            },
          ],
          note: [
            {
              authorReference: { reference: "Practitioner/11638321" },
              time: "2020-09-03T15:03:10.000Z",
              text: "No additional test require",
            },
          ],
          referenceRange: [
            {
              low: {
                value: 35.8,
                unit: "degC",
                system: "http://unitsofmeasure.org",
                code: "Cel",
              },
              high: {
                value: 37.3,
                unit: "degC",
                system: "http://unitsofmeasure.org",
                code: "Cel",
              },
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
                    code: "normal",
                    display: "Normal Range",
                  },
                ],
                text: "Normal Range",
              },
            },
          ],
        },
        search: { mode: "match" },
      },
    ],
    resourceType: "Bundle",
  },
  resource: "Observation",
};
