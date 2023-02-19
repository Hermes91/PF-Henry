export default function validate({ name, description, height, weight, price, offert, img, stock, categories }) {
    const MAX_FILE_SIZE = 5 * 1024 * 1024
    const ACCEPTABLE_FILE_TYPES = ['image/jpeg', 'image/png']
    const integers = /^\d*[1-9]\d*$/;
    const lettersAndSymbols = /^[a-zA-Z0-9\s,.'()"!?-]*$/;
    const lettersAndWhitespaces = /^[a-zA-Z\s]+$/;
    const discount = /^\d+$/;

    const errors = {}

    if (!name) errors.name = 'Product name is required'
    if (!lettersAndWhitespaces.test(name)) errors.name = 'Product name is invalid'

    if (!height) errors.height = 'A height value is required'
    if (!integers.test(height)) errors.height = 'A positive integer number is required'
    if (height > 300) height = 'Value cannot be higher than 300cm'

    if (!weight) errors.weight = 'A weight value is required'
    if (!integers.test(weight)) errors.minWeight = 'A positive integer number is required'
    if (weight > 150) errors.weight = 'Value cannot be higher than 150l'

    if (!img) errors.img = 'An image file is required'
    if (!(img instanceof File)) errors.img = 'Invalid file type'
    if (img.size > MAX_FILE_SIZE) errors.img = 'File size exceeds maximum allowed size of 5MB'
    if (!ACCEPTABLE_FILE_TYPES.includes(img.type)) errors.img = 'Invalid file type (accepted file types: JPG, PNG)'

    if (!description) errors.description = 'A description is required'
    if (!lettersAndSymbols.test(description)) errors.description = 'Description contains invalid characters'
    if (description && description.length > 1000) errors.description = 'Description cannot be longer than 1000 characters'

    if (!price) errors.price = 'A price needs to be set'
    if (!integers.test(price)) errors.price = 'A positive integer number is required'
    if (price > 10000) errors.price = 'Maximum price value is 10000 dollars'

    if (offert === undefined || offert === null || offert === '') errors.offert = 'A discount percentage is required'
    if (!discount.test(offert)) errors.offert = 'Discount percentage must be a number between 0 and 100'
    if (offert < 0 || offert > 100) errors.offert = 'Discount percentage must be a number between 0 and 100'

    if (!stock) errors.stock = 'A stock value needs to be set'
    if (!integers.test(stock)) errors.stock = 'A positive integer number is required'

    if (categories.length === 0) errors.categories = 'At least one category is required'

    return errors
}