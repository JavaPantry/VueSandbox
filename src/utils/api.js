const basePort  ='3001';
const baseURL   =`http://localhost:${basePort}`;

export const API_URL = {
    partsApi: `${baseURL}/parts`,
    warehouseApi: `${baseURL}/warehouse`,
    inventoryApi: `${baseURL}/invtnames`,

    pprtcd: 'pprtcd_like',
    pprtn1: 'pprtn1_like',
    pprtst: 'pprtst_like',
    basename:'/'

};

/*
export const API_URL = {
    partsApi: `/oce/data/partsmasterNew.json`,
    warehouseApi: `${baseURL}/warehouse`,
    inventoryApi: `${baseURL}/invtnames`.

    pprtcd: 'pprtcd',
    pprtn1: 'pprtn1',
    pprtst: 'pprtst',
    basename:'/oce/amdsQueuePartsNew.htm'

};
*/
