export default [
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743119",
    resource: {
      resourceType: "Patient",
      id: "12743119",
      meta: { versionId: "4", lastUpdated: "2021-10-25T17:53:13.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490173354-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2",
                display: "Community Medical Record Number",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "Community Medical Record Number",
          },
          system: "urn:oid:2.16.840.1.113883.3.787.0.0",
          value: "2919",
          _value: {
            extension: [
              {
                valueString: "2919",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2021-01-05T15:18:02.000Z" },
        },
        {
          id: "CI-490074555-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7055",
          _value: {
            extension: [
              {
                valueString: "00000007055",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:36:57.000Z" },
        },
        {
          id: "CI-490074557-3",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007095",
          _value: {
            extension: [
              {
                valueString: "10050007095",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:36:57.000Z" },
        },
        {
          id: "CI-490156576-4",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "13983",
          _value: {
            extension: [
              {
                valueString: "13983",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743119-0",
          use: "official",
          text: "SMART Jr, FRED RICK",
          family: "SMART",
          given: ["FRED", "RICK"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823766-0",
          extension: [
            {
              valueUrl: "(816)888-9999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328639-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2021-01-05T15:17:46.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
      generalPractitioner: [
        {
          id: "CI-490181529-1",
          reference: "Practitioner/12744688",
          display: "PWDentrix, Dentalprofessional",
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743120",
    resource: {
      resourceType: "Patient",
      id: "12743120",
      meta: { versionId: "0", lastUpdated: "2020-08-26T13:38:08.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490074564-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7056",
          _value: {
            extension: [
              {
                valueString: "00000007056",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:38:08.000Z" },
        },
        {
          id: "CI-490074566-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007096",
          _value: {
            extension: [
              {
                valueString: "10050007096",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:38:08.000Z" },
        },
        {
          id: "CI-490156579-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "13984",
          _value: {
            extension: [
              {
                valueString: "13984",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743120-0",
          use: "official",
          text: "SMART Jr, FRED RICK",
          family: "SMART",
          given: ["FRED", "RICK"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823770-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29823772-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328643-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743121",
    resource: {
      resourceType: "Patient",
      id: "12743121",
      meta: { versionId: "1", lastUpdated: "2022-01-07T05:00:36.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490534285-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2",
                display: "Community Medical Record Number",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "Community Medical Record Number",
          },
          system: "urn:oid:2.16.840.1.113883.3.787.0.0",
          value: "24157",
          _value: {
            extension: [
              {
                valueString: "24157",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
        },
        {
          id: "CI-490074573-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7057",
          _value: {
            extension: [
              {
                valueString: "00000007057",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:45:00.000Z" },
        },
        {
          id: "CI-490074575-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007097",
          _value: {
            extension: [
              {
                valueString: "10050007097",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:45:00.000Z" },
        },
        {
          id: "CI-490156582-3",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "13985",
          _value: {
            extension: [
              {
                valueString: "13985",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743121-0",
          use: "official",
          text: "SMART Jr, FRED RICK",
          family: "SMART",
          given: ["FRED", "RICK"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823774-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29823776-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328647-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743122",
    resource: {
      resourceType: "Patient",
      id: "12743122",
      meta: { versionId: "0", lastUpdated: "2020-08-26T13:46:08.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490074582-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7058",
          _value: {
            extension: [
              {
                valueString: "00000007058",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:46:08.000Z" },
        },
        {
          id: "CI-490074584-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007098",
          _value: {
            extension: [
              {
                valueString: "10050007098",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T13:46:08.000Z" },
        },
        {
          id: "CI-490156585-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "13986",
          _value: {
            extension: [
              {
                valueString: "13986",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743122-0",
          use: "official",
          text: "SMART Jr, FRED RICK",
          family: "SMART",
          given: ["FRED", "RICK"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823778-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29823780-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328651-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FRED RICK</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743125",
    resource: {
      resourceType: "Patient",
      id: "12743125",
      meta: { versionId: "0", lastUpdated: "2020-08-26T14:08:45.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FREDDIE RICHARD</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490074609-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7061",
          _value: {
            extension: [
              {
                valueString: "00000007061",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T14:08:45.000Z" },
        },
        {
          id: "CI-490074611-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007101",
          _value: {
            extension: [
              {
                valueString: "10050007101",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T14:08:45.000Z" },
        },
        {
          id: "CI-490156594-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "13989",
          _value: {
            extension: [
              {
                valueString: "13989",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743125-0",
          use: "official",
          text: "SMART Jr, FREDDIE RICHARD",
          family: "SMART",
          given: ["FREDDIE", "RICHARD"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823790-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29823792-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328663-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FREDDIE RICHARD</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743126",
    resource: {
      resourceType: "Patient",
      id: "12743126",
      meta: { versionId: "1", lastUpdated: "2022-07-06T14:30:53.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490947880-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2",
                display: "Community Medical Record Number",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "Community Medical Record Number",
          },
          system: "urn:oid:2.16.840.1.113883.3.787.0.0",
          value: "51350",
          _value: {
            extension: [
              {
                valueString: "51350",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
        },
        {
          id: "CI-490074618-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7062",
          _value: {
            extension: [
              {
                valueString: "00000007062",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T14:18:28.000Z" },
        },
        {
          id: "CI-490074620-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007102",
          _value: {
            extension: [
              {
                valueString: "10050007102",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T14:18:28.000Z" },
        },
        {
          id: "CI-490156597-3",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "13990",
          _value: {
            extension: [
              {
                valueString: "13990",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743126-0",
          use: "official",
          text: "SMART Jr, FREDDIE",
          family: "SMART",
          given: ["FREDDIE"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823794-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29823796-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328667-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743153",
    resource: {
      resourceType: "Patient",
      id: "12743153",
      meta: { versionId: "0", lastUpdated: "2020-08-26T21:17:52.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490074873-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7087",
          _value: {
            extension: [
              {
                valueString: "00000007087",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T21:17:52.000Z" },
        },
        {
          id: "CI-490074875-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007128",
          _value: {
            extension: [
              {
                valueString: "10050007128",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-26T21:17:52.000Z" },
        },
        {
          id: "CI-490156678-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "14017",
          _value: {
            extension: [
              {
                valueString: "14017",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:21.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743153-0",
          use: "official",
          text: "SMART Jr, FREDDIE",
          family: "SMART",
          given: ["FREDDIE"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29823888-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29823890-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "male",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328759-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743190",
    resource: {
      resourceType: "Patient",
      id: "12743190",
      meta: { versionId: "0", lastUpdated: "2020-08-27T15:25:00.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Undifferentiated</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490075297-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7123",
          _value: {
            extension: [
              {
                valueString: "00000007123",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-27T15:25:00.000Z" },
        },
        {
          id: "CI-490075299-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007164",
          _value: {
            extension: [
              {
                valueString: "10050007164",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-27T15:25:00.000Z" },
        },
        {
          id: "CI-490156789-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "14054",
          _value: {
            extension: [
              {
                valueString: "14054",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:22.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743190-0",
          use: "official",
          text: "SMART Jr, FREDDIE",
          family: "SMART",
          given: ["FREDDIE"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29824048-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29824050-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "other",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328889-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Undifferentiated</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743191",
    resource: {
      resourceType: "Patient",
      id: "12743191",
      meta: { versionId: "0", lastUpdated: "2020-08-27T15:25:07.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Female</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490075306-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7124",
          _value: {
            extension: [
              {
                valueString: "00000007124",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-27T15:25:07.000Z" },
        },
        {
          id: "CI-490075308-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007165",
          _value: {
            extension: [
              {
                valueString: "10050007165",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-27T15:25:07.000Z" },
        },
        {
          id: "CI-490156792-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "14055",
          _value: {
            extension: [
              {
                valueString: "14055",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:22.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743191-0",
          use: "official",
          text: "SMART Jr, FREDDIE",
          family: "SMART",
          given: ["FREDDIE"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29824052-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29824054-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "female",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328893-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Female</p><p><b>Marital Status</b>: Married</p></div>',
  },
  {
    fullUrl:
      "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/12743203",
    resource: {
      resourceType: "Patient",
      id: "12743203",
      meta: { versionId: "0", lastUpdated: "2020-08-27T17:12:18.000Z" },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Patient</b></p><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Female</p><p><b>Marital Status</b>: Married</p></div>',
      },
      identifier: [
        {
          id: "CI-490075455-0",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "10",
                display: "MRN",
                userSelected: true,
              },
              {
                system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                code: "MR",
                display: "Medical record number",
                userSelected: false,
              },
            ],
            text: "MRN",
          },
          system: "urn:oid:2.16.840.1.113883.6.1000",
          value: "7136",
          _value: {
            extension: [
              {
                valueString: "00000007136",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-27T17:12:18.000Z" },
        },
        {
          id: "CI-490075457-1",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "22",
                display: "Military Id",
                userSelected: true,
              },
            ],
            text: "Military Id",
          },
          system: "urn:oid:2.16.840.1.113883.3.42.10001.100001.12",
          value: "10050007177",
          _value: {
            extension: [
              {
                valueString: "10050007177",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-08-27T17:12:18.000Z" },
        },
        {
          id: "CI-490156828-2",
          use: "usual",
          type: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/4",
                code: "2553236785",
                display: "MIllennium Person Identifier",
                userSelected: true,
              },
            ],
            text: "MIllennium Person Identifier",
          },
          _system: {
            extension: [
              {
                valueCode: "unknown",
                url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
              },
            ],
          },
          value: "14067",
          _value: {
            extension: [
              {
                valueString: "14067",
                url: "http://hl7.org/fhir/StructureDefinition/rendered-value",
              },
            ],
          },
          period: { start: "2020-12-18T19:15:22.000Z" },
        },
      ],
      active: true,
      name: [
        {
          id: "CI-12743203-0",
          use: "official",
          text: "SMART Jr, FREDDIE",
          family: "SMART",
          given: ["FREDDIE"],
          prefix: ["Mr"],
          suffix: ["Jr"],
          period: { start: "2016-08-31T18:24:54.000Z" },
        },
      ],
      telecom: [
        {
          id: "CI-PH-29824105-0",
          extension: [
            {
              valueUrl: "8168889999",
              url: "http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address",
            },
          ],
          system: "phone",
          value: "8168889999",
          use: "home",
          rank: 1,
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
        {
          id: "CI-EM-29824107-0",
          system: "email",
          value: "kathy.pickering@cerner.com",
          use: "home",
          rank: 1,
          period: { start: "2018-09-13T16:54:27.000Z" },
        },
      ],
      gender: "female",
      birthDate: "1946-08-22",
      address: [
        {
          id: "CI-24328935-0",
          use: "home",
          text: "1000 Rockhill Rd\nApartment 2\nKansas City, MO 64114\nUS",
          line: ["1000 Rockhill Rd", "Apartment 2"],
          city: "Kansas City",
          district: "Jackson",
          state: "MO",
          postalCode: "64114",
          country: "US",
          period: { start: "2017-11-16T17:18:18.000Z" },
        },
      ],
      maritalStatus: {
        coding: [
          {
            system:
              "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/38",
            code: "309237",
            display: "Married",
            userSelected: true,
          },
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
            code: "M",
            display: "Married",
            userSelected: false,
          },
        ],
        text: "Married",
      },
      communication: [
        {
          language: {
            coding: [
              {
                system:
                  "https://fhir.cerner.com/ec2458f2-1e24-41c8-b71b-0e701af7583d/codeSet/36",
                code: "151",
                display: "English",
                userSelected: true,
              },
              {
                system: "urn:ietf:bcp:47",
                code: "en",
                display: "English",
                userSelected: false,
              },
            ],
            text: "English",
          },
          preferred: true,
        },
      ],
    },
    search: { mode: "match" },
    text: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Name</b>: SMART Jr, FREDDIE</p><p><b>Status</b>: Active</p><p><b>DOB</b>: Aug 22, 1946</p><p><b>Administrative Gender</b>: Female</p><p><b>Marital Status</b>: Married</p></div>',
  },
];
