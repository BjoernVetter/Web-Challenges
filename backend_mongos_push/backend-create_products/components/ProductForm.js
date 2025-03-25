import styled from "styled-components";
import StyledButton from "@/components/Button";
import { mutate } from "swr";

export default function ProductForm() {
  // Verhindert Standadverhalten von Submission und reloadet der HTML Seite
  async function handleSubmit(event) {
    event.preventDefault();
    // Lesen der Formulardaten
    const formData = new FormData(event.currentTarget);
    const productData = Object.fromEntries(formData);
    //data Fetch für interne API: "/api/products" mit übergabe der POST-relevanten Objektinhalten
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    // Vorgang der Response schreibens "erfolgreich" lässt mittels "mutate"-mtehode von "swr die Seite refreshn"

    if (response.ok) {
      mutate("/api/products");
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
