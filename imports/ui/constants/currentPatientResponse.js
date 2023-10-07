export default {
  status: 200,
  message: "Ok",
  resourceType: "DocumentReference",
  pageNumber: 1,
  totalPages: 2,
  countInPage: 10,
  bundleId: "a6d11f66-4e00-41b3-962f-28abb9a9fdc7",
  queryId: "62fab25bead3c283d31bae5f",
  header: {
    queryId: "62fab25bead3c283d31bae5f",
    fhirId: "62f1c5dab3070d0b40e7aac1",
    cacheUrl:
      "http://docker1.ihids.com:20100//api/rest/v1/Cache/62fab25bead3c283d31bae5f/",
    patientId: "",
    pageId: 1,
    resourceType: "DocumentReference",
    createdAt: "2022-08-15T20:53:47.719471624Z",
  },
  bundle: {
    id: "a6d11f66-4e00-41b3-962f-28abb9a9fdc7",
    type: "searchset",
    link: [
      {
        relation: "self",
        url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference?patient=12742661",
      },
      {
        relation: "next",
        url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference?patient=12742661\u0026-pageContext=T3BlblBsYXRmb3JtRmhpckNvbnRleHQ9dHJ1ZSZwYWdlQ29udGV4dD1lTnA5VDFGcmd6QVlfQzNGUFdvYTA2UkpIZ2JkVkVaZnRHZzctbFpDX09vRWpVWFRzbzMtLUNYZEJvT05QWDBjZF9mZG5SNTZwR0UwTUtKLXVtaWt1OWEwV25Wd0FXT1I2dFg3WU5CSk5hMXAwTU1OYlZRRHlXQXN2TnBnTlFOT1k2QkhHaTBsNVJHVmhFZUtNaHF4dW1hRVU2THhBcHdzemFva3k5TjFfdVNBX2plekh2UzVfeEZlZ2gxYlJ6Mi1aWjZ2d0JZbkdKVnRCM1AzMmVpM3duZWNyUUk3bnYzSnNfMzJrT3pLcWlnZElvSmdobmtZU3hFemlaa0k0eVZqQW5NcEJjWTR4RTV6Vk4za25ac3llMTRYdS1wUE54T1VFLUxkVWk2NFlQemI3U1plZ3l1ZXoxX1VWRmxYcFU2X050M2ZIbjhBdVN4MDZRPT0mY29uY2VwdD1jaGFydGVk\u0026-pageDirection=NEXT",
      },
    ],
    entry: [
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198584722",
        resource: {
          resourceType: "DocumentReference",
          id: "198584722",
          meta: { versionId: "1", lastUpdated: "2022-08-08T05:50:58.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Aug  8, 2022  5:50 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Aug  8, 2022  5:50 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198584722-2022080805505800",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198584722",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-08-08T05:50:57.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97981946" }],
            period: {
              start: "2022-08-08T05:50:57.000Z",
              end: "2022-08-08T05:50:57.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198553870",
        resource: {
          resourceType: "DocumentReference",
          id: "198553870",
          meta: { versionId: "1", lastUpdated: "2022-07-26T09:12:04.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jul 26, 2022  9:12 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jul 26, 2022  9:12 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198553870-2022072609120400",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198553870",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-07-26T09:12:03.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97981498" }],
            period: {
              start: "2022-07-26T09:12:03.000Z",
              end: "2022-07-26T09:12:03.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198543502",
        resource: {
          resourceType: "DocumentReference",
          id: "198543502",
          meta: { versionId: "1", lastUpdated: "2022-07-25T04:36:53.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jul 25, 2022  4:36 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jul 25, 2022  4:36 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198543502-2022072504365400",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198543502",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-07-25T04:36:52.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97981424" }],
            period: {
              start: "2022-07-25T04:36:52.000Z",
              end: "2022-07-25T04:36:52.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198161400",
        resource: {
          resourceType: "DocumentReference",
          id: "198161400",
          meta: { versionId: "1", lastUpdated: "2022-06-22T12:48:29.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 22, 2022 12:48 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 22, 2022 12:48 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198161400-2022062212483000",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198161400",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-22T12:48:29.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978475" }],
            period: {
              start: "2022-06-22T12:48:29.000Z",
              end: "2022-06-22T12:48:29.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198160578",
        resource: {
          resourceType: "DocumentReference",
          id: "198160578",
          meta: { versionId: "1", lastUpdated: "2022-06-22T10:08:38.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 22, 2022 10:08 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 22, 2022 10:08 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198160578-2022062210083800",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198160578",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-22T10:08:38.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978472" }],
            period: {
              start: "2022-06-22T10:08:38.000Z",
              end: "2022-06-22T10:08:38.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198159366",
        resource: {
          resourceType: "DocumentReference",
          id: "198159366",
          meta: { versionId: "1", lastUpdated: "2022-06-22T02:41:54.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 22, 2022  2:41 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 22, 2022  2:41 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198159366-2022062202415400",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198159366",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-22T02:41:54.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978458" }],
            period: {
              start: "2022-06-22T02:41:54.000Z",
              end: "2022-06-22T02:41:54.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198159362",
        resource: {
          resourceType: "DocumentReference",
          id: "198159362",
          meta: { versionId: "1", lastUpdated: "2022-06-22T02:38:49.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 22, 2022  2:38 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 22, 2022  2:38 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198159362-2022062202384900",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198159362",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-22T02:38:48.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978457" }],
            period: {
              start: "2022-06-22T02:38:48.000Z",
              end: "2022-06-22T02:38:48.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198159226",
        resource: {
          resourceType: "DocumentReference",
          id: "198159226",
          meta: { versionId: "1", lastUpdated: "2022-06-21T16:07:45.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 21, 2022  4:07 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 21, 2022  4:07 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198159226-2022062116074500",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198159226",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-21T16:07:44.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978450" }],
            period: {
              start: "2022-06-21T16:07:44.000Z",
              end: "2022-06-21T16:07:44.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198159222",
        resource: {
          resourceType: "DocumentReference",
          id: "198159222",
          meta: { versionId: "1", lastUpdated: "2022-06-21T15:59:14.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 21, 2022  3:59 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 21, 2022  3:59 P.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198159222-2022062115591400",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198159222",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-21T15:59:13.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978448" }],
            period: {
              start: "2022-06-21T15:59:13.000Z",
              end: "2022-06-21T15:59:13.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
      {
        fullUrl:
          "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/DocumentReference/198159058",
        resource: {
          resourceType: "DocumentReference",
          id: "198159058",
          meta: { versionId: "1", lastUpdated: "2022-06-21T10:39:59.000Z" },
          text: {
            status: "generated",
            div: '\u003Cdiv xmlns="http://www.w3.org/1999/xhtml"\u003E\u003Cp\u003E\u003Cb\u003EDocument Reference\u003C/b\u003E\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EPatient Name\u003C/b\u003E: SMART, NANCY\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Type\u003C/b\u003E: Admission Note Physician\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Title\u003C/b\u003E: History \u0026amp; Physical Note Created From Voythos\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService Start Date\u003C/b\u003E: Jun 21, 2022 10:39 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EService End Date\u003C/b\u003E: Jun 21, 2022 10:39 A.M. UTC\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EDocument Status\u003C/b\u003E: Final\u003C/p\u003E\u003Cp\u003E\u003Cb\u003EVerifying Provider\u003C/b\u003E: Portal, Portal\u003C/p\u003E\u003C/div\u003E',
          },
          identifier: [
            {
              system: "https://fhir.cerner.com/ceuuid",
              value:
                "CE87caf4b7-9397-4667-9897-702218017c9e-198159058-2022062110395900",
            },
          ],
          status: "current",
          docStatus: "final",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/72",
                code: "2820507",
                display: "Admission Note Physician",
                userSelected: true,
              },
              {
                system: "http://loinc.org",
                code: "83805-2",
                userSelected: false,
              },
            ],
            text: "Admission Note Physician",
          },
          category: [
            {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "83805-2",
                  userSelected: false,
                },
              ],
            },
            {
              coding: [
                {
                  system:
                    "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
                  code: "clinical-note",
                  display: "Clinical Note",
                  userSelected: false,
                },
              ],
              text: "Clinical Note",
            },
          ],
          subject: { reference: "Patient/12742661", display: "SMART, NANCY" },
          author: [
            { reference: "Practitioner/12742069", display: "Portal, Portal" },
          ],
          authenticator: {
            reference: "Practitioner/12742069",
            display: "Portal, Portal",
          },
          content: [
            {
              attachment: {
                contentType: "text/plain",
                url: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Binary/R-198159058",
                title: "History \u0026 Physical Note Created From Voythos",
                creation: "2022-06-21T10:39:58.000Z",
              },
            },
          ],
          context: {
            encounter: [{ reference: "Encounter/97978422" }],
            period: {
              start: "2022-06-21T10:39:58.000Z",
              end: "2022-06-21T10:39:58.000Z",
            },
          },
        },
        search: { mode: "match" },
      },
    ],
    resourceType: "Bundle",
  },
  resource: "DocumentReference",
};
