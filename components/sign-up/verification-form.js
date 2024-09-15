export default function VerificationForm({state, dispatch}) {
  const { dynamicField, dynamicLabel } = state
  console.log('state', state)
  return (
    <div>
      <p className="font-bold text-2xl">We sent you a code</p>
      <p className="text-sm text-slate-600 ">Enter it below to verify {dynamicField}</p>
      <form className="mt-3 h-96 flex flex-col justify-between">
        <div>
          <input placeholder="Verification code" className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-12 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
          <p className="text-xs text-sky-500 px-2 mt-1">Didn't receive {dynamicLabel}</p>
        </div>
        <div className="flex justify-center items-center rounded-full mt-20 h-12 bg-slate-600">
          <input disabled={false} type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}
