import findKeyRequest from './findKey';
import formRequest from '../../helpers/customValidate';

const request = {
    findKeyRequest: formRequest(findKeyRequest)
}

export default request