import { HfInference } from "npm:@huggingface/inference@2.6.4";


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { model, inputs } = await req.json();
    
    const hf = new HfInference(Deno.env.get("HUGGINGFACE_API_KEY"));
    
    let result;
    switch (model) {
      case "text-generation":
        result = await hf.textGeneration({
          model: "gpt2",
          inputs,
          parameters: {
            max_length: 100,
            temperature: 0.7
          }
        });
        break;
      case "image-classification":
        result = await hf.imageClassification({
          model: "google/vit-base-patch16-224",
          data: inputs
        });
        break;
      case "summarization":
        result = await hf.summarization({
          model: "facebook/bart-large-cnn",
          inputs,
          parameters: {
            max_length: 130,
            min_length: 30
          }
        });
        break;
      default:
        throw new Error("Unsupported model type");
    }

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  }
});