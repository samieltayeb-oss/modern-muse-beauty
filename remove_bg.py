from PIL import Image

def make_transparent(input_path, output_path):
    # Open image and convert to grayscale
    img = Image.open(input_path).convert("L")
    
    # The image is black text on white background.
    # We want white (255) to be transparent (alpha=0),
    # and black (0) to be opaque (alpha=255).
    # Alpha = 255 - grayscale
    
    # Create an image with the --muse-ink color: #0F0F0F (15, 15, 15)
    ink_color = (15, 15, 15)
    
    # Create an RGBA image filled with the ink color
    new_img = Image.new("RGBA", img.size, ink_color + (255,))
    
    # Invert the grayscale image to use as the alpha mask
    # where white is 0, black is 255
    from PIL import ImageOps
    alpha_mask = ImageOps.invert(img)
    
    # Apply the alpha mask
    new_img.putalpha(alpha_mask)
    
    # Save the result
    new_img.save(output_path, "PNG")
    print(f"Saved premium transparent logo to {output_path}")

if __name__ == "__main__":
    make_transparent("public/images/logo.png", "public/images/logo.png")
