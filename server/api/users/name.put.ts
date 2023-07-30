import { updateUserName } from '~/server/data/users'
import { getSingleSuccessResponse } from '~/server/utils/CommonResult'

interface Body {
  id: string
  name: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Body>(event)
  const result = await updateUserName(body.id, body.name)
  return getSingleSuccessResponse(result)
})
