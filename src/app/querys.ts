import gql from 'graphql-tag';

export const querys = [
    {
      id: 'I01',
      query: gql `query test($faculty: String!, $table: String!){
        investmentList(faculty: $faculty, table: $table){
          tipo
          anio
          total
        }
      }
      `,
    }, {
      id: 'I02',
      query: gql `query test($faculty: String!, $table: String!){
        investmentList(faculty: $faculty, table: $table){
          anio
          AporteEspecie
          AporteEfectivo
          AporteExterno
          totalDinero
        }
      }
      `,
    }, {
      id: 'I03',
      query: gql `query test($faculty: String!, $table: String!){
        investmentList(faculty: $faculty, table: $table){
          anio
          tipoEntidad
          totalEntidadExterna
        }
      }
      `,
    }, {
      id: 'I04',
      query: gql `query test($faculty: String!){
        Investment4List(faculty: $faculty){
          Grupo
          productos
          total
        }
      }
      `,
    }, {
      id: 'I05',
      query: gql `query test($faculty: String!){
        Investment5List(faculty: $faculty){
          Anio
          total
        }
      }
      `,
    }, {
      id: 'I06',
      query: gql `query test($faculty: String!){
        Investment6List(faculty: $faculty){
          Anio
          total
        }
      }
      `,
    }, {
      id: 'F01',
      query: gql `query test($faculty: String!){
        Formation1List(faculty: $faculty){
          Programa
          Anio
          total
        }
      }
      `,
    }, {
      id: 'F02',
      query: gql `query test($faculty: String!){
        Formation2List(faculty: $faculty){
          Programa
          Anio
          total
        }
      }
      `,
    }, {
      // TODO Falta
      id: 'F03',
      query:  gql `query test($faculty: String!){
        Formation2List(faculty: $faculty){
          Programa
          Anio
          total
        }
      }
      `,
    }, {
      // TODO Falta
      id: 'C01',
      query:  gql `query test($faculty: String!){
        Formation2List(faculty: $faculty){
          Programa
          Anio
          total
        }
      }
      `,
    }, {
      id: 'C02',
      query: gql `query test($faculty: String!){
        Capacity2List(faculty: $faculty){
          Tipo
          Anio
          total
        }
      }
      `,
    }, {
      id: 'C02_1',
      query: gql `query test($faculty: String!){
        Capacity2_1List(faculty: $faculty){
          Tipo
          Anio
          total
        }
      }
      `
    }, {
      id: 'BP3',
      query: gql `query test($faculty: String!){
        BibliographicProduction3(faculty: $faculty){
         Anio
          total
        }
      }
      `
    }
];
