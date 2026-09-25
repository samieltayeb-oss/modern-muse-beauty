from PIL import Image, ImageOps

def make_black_transparent(input_path, output_path):
    # Open the ORIGINAL uploaded logo (we saved it earlier, but maybe I overwrote it?)
    # Wait, the user uploaded it to `.user_uploaded/media_1790309382974.png`. Let's use that directly!
    original_path = r"C:\Users\mcreg\.gemini\antigravity\brain\6f75564d-17f7-4027-90ee-899dc979cfcf\.user_uploaded\media_1790309382974.png"
    img = Image.open(original_path).convert("L")
    
    # We want white (255) to be transparent (0), black (0) to be opaque (255)
    ink_color = (0, 0, 0)
    new_img = Image.new("RGBA", img.size, ink_color + (255,))
    
    # Invert grayscale to get alpha mask
    alpha_mask = ImageOps.invert(img)
    new_img.putalpha(alpha_mask)
    
    new_img.save(output_path, "PNG")
    print("Saved black transparent logo")

if __name__ == "__main__":
    make_black_transparent("", "public/images/logo.png")
