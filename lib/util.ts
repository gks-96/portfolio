

export const validateString = (value: unknown,maxLength:number) =>{
    if ( !value  || typeof value !== "string"  || value.length >maxLength)
        {
          return false; 
        }
    return true; 
}
 
export const getErrorMessage= (error: unknown): string  => {
    let message: string; 
    if ( error instanceof Error){
                message = error.message;
            }else if ( error && typeof error === 'object' && 'message' in error) {
                message= "(error as { message: string }).message," 
            }else{
                message="unknown error";
            }
    
    return message; 
 };
