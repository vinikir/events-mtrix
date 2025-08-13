export function isValidEmail(email: string): { error: boolean, confirmed: boolean, msg?: string } {
    try {

        if (typeof email !== 'string') {
            return {
                error:false,
                confirmed:false
            };
        }

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return {
            error:false,
            confirmed:emailRegex.test(email.toLowerCase())
        }

    } catch (e) {
        return {
            error:true,
            confirmed:false,
            msg:e.message
        }
    }

}