const GENERIC_ERROR_MESSAGE = "An error occurred";

export default function useErrorResponse(message: string) {
  return {
    success: false,
    error: true,
    message: message || GENERIC_ERROR_MESSAGE,
  };
}
