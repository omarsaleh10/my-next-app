import Form from "next/form";
import { getAllModels } from "@/app/lib/models";
import type { Model } from "@/app/types";
import ModelCard from "@/app/components/ModelCard";

// Accept searchParams from Next.js
export default async function ModelsPage({ searchParams }: { searchParams?: Promise<{ search?: string; category?: string }> }) {
  const models = await getAllModels();
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search?.toLowerCase() || "";
  const category = resolvedSearchParams?.category || "all";
  
  let filtered = models;
  
  // Filter by category first
  if (category && category !== "all") {
    filtered = filtered.filter((model: Model) => 
      model.category?.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Then filter by search term
  if (search) {
    filtered = filtered.filter((model: Model) => 
      model.name.toLowerCase().includes(search) || 
      model.description.toLowerCase().includes(search)
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">
        {category === "all" ? "All Models" : `${category.charAt(0).toUpperCase() + category.slice(1)} Models`}
      </h1>
      <Form action={`/models?category=${category}`} className="mb-6 max-w-md">
        <input
          type="text"
          name="search"
          placeholder="Search by model name..."
          defaultValue={resolvedSearchParams?.search || ""}
          className="px-4 py-2 border rounded w-full"
        />
      </Form>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="3D Models Gallery"
      >
        {filtered.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
