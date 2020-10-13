// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare var data: any;

export const environment = {
  production: false,
  guardarservicio:  `${data.basePath }/api/guardarservicio`,
  obtenerReportes: `${data.basePath }/api/reporte/`,
};
