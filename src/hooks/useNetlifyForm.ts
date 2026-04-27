import { useState } from 'react'
import { submitNetlifyForm } from '@/services/forms.service'

type State = 'idle' | 'submitting' | 'success' | 'error'

export function useNetlifyForm(formName: string) {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState<string | null>(null)

  async function submit(fields: Record<string, string>) {
    setState('submitting')
    setError(null)
    const result = await submitNetlifyForm(formName, fields)
    if (result.status === 'ok') {
      setState('success')
    } else {
      setState('error')
      setError(result.message)
    }
  }

  function reset() {
    setState('idle')
    setError(null)
  }

  return {
    state,
    error,
    submit,
    reset,
    isSubmitting: state === 'submitting',
    isSuccess: state === 'success',
    isError: state === 'error',
  }
}
