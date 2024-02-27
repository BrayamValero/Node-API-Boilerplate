import { Response } from "express"

const handleHttpError = (res: Response, error: any) => {
  console.log("HTTP Error", error)
  const errorMessage = error.errors ? error.errors[0].message : null
  res.statusCode = error.status || 500
  res.statusMessage = errorMessage || error.message || "Server Error"
  res.send(null)
}

const handleHTTPSuccess = (
  res: Response,
  { status, message, data }: { status: number; message: string; data: any }
) => {
  res.statusCode = status
  res.statusMessage = message
  res.send(data)
}

export { handleHttpError, handleHTTPSuccess }
