const GENERIC_SUCCESS_MESSAGE = "Successful";

export default function useSuccessResponse(
  key: string,
  data: any,
  message: string
) {
  return {
    success: true,
    error: false,
    message: message || GENERIC_SUCCESS_MESSAGE,
    [key]: data,
  };
}
