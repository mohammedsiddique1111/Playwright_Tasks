import {test as base} from '@playwright/test';

type myfixture = {
    helloworld:string
}

export const test = base.extend<myfixture>({
    helloworld: async ({},use:any)=>{
        console.log("Where is my tea");
        await use();
    }
})