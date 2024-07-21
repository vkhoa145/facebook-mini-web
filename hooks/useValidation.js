import { useEffect } from "react";

export default function useValidation(value) {

  return [value, `what is ${value}`]
}