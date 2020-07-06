'use strict'

/**
 * Get unique error field name
 */
const getUniqueErrorMessage = (err) => {
    let output
    try {
        output = 'اطلاعات شما قبلا ثبت شده'
    } catch (ex) {
        output = 'فیلد منحصر به فرد از قبل موجود است'
    }

    return output
}

/**
 * Get the error message from error object
 */
const getErrorMessage = (err) => {
    let message = ''

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err)
                break
            default:
                message = 'مشکلی پیش آمد لطفا بعدا امتحان کنید'
        }
    } else {
        for (let errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message
        }
    }

    return message
}

export default {getErrorMessage}
