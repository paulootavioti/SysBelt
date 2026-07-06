import { useState } from "react";
import type { ChangeEvent } from "react";

import "./styles.css";

interface ImageUploadProps {
  label: string;
  onChange?: (file: File | null) => void;
}

export function ImageUpload({
  label,
  onChange,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string>();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      setPreview(undefined);
      onChange?.(null);
      return;
    }

    setPreview(URL.createObjectURL(file));

    onChange?.(file);
  }

  return (
    <div className="image-upload">

      <label className="image-upload-label">
        {label}
      </label>

      <label className="image-upload-box">

        {preview ? (

          <img
            src={preview}
            alt="Preview"
          />

        ) : (

          <span>
            Clique para selecionar uma imagem
          </span>

        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

      </label>

    </div>
  );
}