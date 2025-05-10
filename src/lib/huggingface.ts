export async function callHuggingFace(model: string, inputs: any) {
  const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/huggingface`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ model, inputs }),
  });

  if (!response.ok) {
    throw new Error('Failed to call Hugging Face API');
  }

  return response.json();
}