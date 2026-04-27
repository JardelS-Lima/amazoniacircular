function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export type NetlifyFormResult =
  | { status: 'ok' }
  | { status: 'error'; message: string }

export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string>,
): Promise<NetlifyFormResult> {
  try {
    const res = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...fields }),
    })
    if (!res.ok) {
      return { status: 'error', message: `Falha no envio (HTTP ${res.status}). Tente novamente.` }
    }
    return { status: 'ok' }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro de rede desconhecido'
    return { status: 'error', message }
  }
}
