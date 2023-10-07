export default {
  status: 200,
  message: "Ok",
  resourceType: "QuestionnaireResponse",
  pageNumber: 1,
  totalPages: 1,
  countInPage: 1,
  bundleId: "77faa3dc-a6dd-4cb7-b685-6250014bd95a",
  queryId: "62fc170eead3c283d31bb053",
  header: {
    queryId: "62fc170eead3c283d31bb053",
    fhirId: "62f1c5dab3070d0b40e7aac1",
    cacheUrl:
      "http://docker1.ihids.com:20100//api/rest/v1/Cache/62fc170eead3c283d31bb053/",
    patientId: "",
    pageId: 1,
    resourceType: "QuestionnaireResponse",
    createdAt: "2022-08-16T22:15:42.430146895Z",
  },
  bundle: {
    id: "77faa3dc-a6dd-4cb7-b685-6250014bd95a",
    type: "searchset",
    link: [
      {
        relation: "self",
        url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/QuestionnaireResponse?patient=12724066",
      },
    ],
    entry: [
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/QuestionnaireResponse/SH-12724066",
        resource: {
          resourceType: "QuestionnaireResponse",
          id: "SH-12724066",
          meta: { lastUpdated: "2022-04-27T18:14:58Z" },
          text: {
            status: "additional",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EQuestionnaire Response\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient\u003C/b\u003E: 12724066\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EType\u003C/b\u003E: Social History\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EStatus\u003C/b\u003E: In Progress\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EAuthored Date Time\u003C/b\u003E: Apr 27, 2022  6:14 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EQuestionnaire\u003C/b\u003E: https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Questionnaire/SH-12724066\u003C/p\u003E\u003C/div\u003E',
          },
          questionnaire:
            "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Questionnaire/SH-12724066",
          status: "in-progress",
          subject: { reference: "Patient/12724066" },
          authored: "2022-04-27T18:14:58Z",
          item: [
            {
              id: "73483029",
              linkId: "1",
              text: "Alcohol",
              item: [
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "1-4625813",
                  text: "Type:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "962020",
                        display: "Liquor",
                        userSelected: false,
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: "73268933",
              extension: [
                {
                  valueAnnotation: {
                    authorReference: {
                      reference: "Practitioner/1",
                      display: "SYSTEM, SYSTEM Cerner",
                    },
                    time: "2022-02-03T17:41:08.000Z",
                    text: "category/group comment",
                  },
                  url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/note",
                },
              ],
              linkId: "16",
              text: "Employment/School",
              item: [
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "16-4625873",
                  text: "Status:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "10985252",
                        display: "Part time",
                        userSelected: false,
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: "73486947",
              linkId: "33",
              text: "Home/Environment",
              item: [
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "33-4625929",
                  text: "Smoker in household:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "960441",
                        display: "No",
                        userSelected: false,
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: "73483039",
              linkId: "70",
              text: "Sexual",
              item: [
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "70-4626038",
                  text: "Sexually active:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "960439",
                        display: "Yes",
                        userSelected: false,
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: "73268931",
              extension: [
                {
                  valueAnnotation: {
                    authorReference: {
                      reference: "Practitioner/1",
                      display: "SYSTEM, SYSTEM Cerner",
                    },
                    time: "2022-02-03T17:41:08.000Z",
                    text: "category/group comment",
                  },
                  url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/note",
                },
                {
                  valueBoolean: false,
                  url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/is-modifiable",
                },
              ],
              linkId: "81",
              text: "Substance Use",
              item: [
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "81-4625833",
                  text: "Use:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "5134067",
                        display: "Current",
                        userSelected: false,
                      },
                    },
                  ],
                },
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "81-4625841",
                  text: "Frequency:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "10985100",
                        display: "1-2 times per year",
                        userSelected: false,
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: "73157669",
              linkId: "93",
              text: "Tobacco",
              item: [
                {
                  linkId: "93-4625741",
                  text: "Number of years:",
                  answer: [{ valueQuantity: { value: "12" } }],
                },
                {
                  extension: [
                    {
                      valueBoolean: true,
                      url: "https://fhir-ehr.cerner.com/r4/StructureDefinition/choice-answer",
                    },
                  ],
                  linkId: "93-4625825",
                  text: "Smoking tobacco use:",
                  answer: [
                    {
                      valueCoding: {
                        system:
                          "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/nomenclature",
                        code: "64772537",
                        display: "Former smoker, quit more than 30 days ago",
                        userSelected: false,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
    resourceType: "Bundle",
  },
  resource: "QuestionnaireResponse",
};
