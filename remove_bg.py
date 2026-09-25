from PIL import Image, ImageOps

def make_white_transparent(input_path, output_path):
    img = Image.open(input_path).convert("L")
    
    # Create an image filled with pure white
    white_color = (255, 255, 255)
    new_img = Image.new("RGBA", img.size, white_color + (255,))
    
    # Invert the grayscale image to use as the alpha mask
    # where white is 0, black is 255
    alpha_mask = ImageOps.invert(img)
    
    new_img.putalpha(alpha_mask)
    new_img.save(output_path, "PNG")
    print("Saved white transparent logo")

if __name__ == "__main__":
    make_white_transparent("public/images/logo.png", "public/images/logo.png")
