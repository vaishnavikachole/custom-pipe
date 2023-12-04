import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'custslice'
})
export class CustomSlice implements PipeTransform
{
    transform(value: string,args?:any) 
    {
        if(!value){
            return null;
        }
        else{
        return value.slice(0,5)
        }
    }


}