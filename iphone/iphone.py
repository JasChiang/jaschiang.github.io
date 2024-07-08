import streamlit as st
from PIL import Image, ImageDraw, ImageFont
import io
from matplotlib import font_manager

def get_default_font(size, bold=False):
    try:
        # 嘗試使用系統字體
        font_names = ['Arial', 'Helvetica', 'DejaVuSans', 'SimHei', 'NotoSansCJK', 'WenQuanYi Micro Hei']
        for font_name in font_names:
            try:
                if bold:
                    font = font_manager.FontProperties(family=font_name, weight='bold')
                else:
                    font = font_manager.FontProperties(family=font_name)
                file = font_manager.findfont(font)
                return ImageFont.truetype(file, size)
            except:
                continue
        # 如果找不到任何系統字體，使用默認字體
        return ImageFont.load_default()
    except Exception as e:
        st.warning(f"無法載入自定義字體，使用默認字體。錯誤：{str(e)}")
        return ImageFont.load_default()

def generate_comparison_chart(phones, features, colors):
    width, height = 1200, 800
    image = Image.new('RGB', (width, height), color=colors['background'])
    draw = ImageDraw.Draw(image)
    
    title_font = get_default_font(36, bold=True)
    subtitle_font = get_default_font(24, bold=True)
    body_font = get_default_font(18)

    # Add title
    draw.rectangle([0, 0, width, 80], fill=colors['title_bg'])
    draw.text((20, 20), "比較 iPhone 15 機型", font=title_font, fill=colors['title'])

    # Add phone information
    phone_width = width // len(phones)
    for i, phone in enumerate(phones):
        x = i * phone_width
        y = 100

        # Phone image
        if phone['image']:
            try:
                phone_image = Image.open(phone['image']).convert('RGBA')
                phone_image = phone_image.resize((200, 200), Image.LANCZOS)
                image.paste(phone_image, (x + (phone_width - 200) // 2, y), phone_image)
            except Exception as e:
                st.warning(f"無法載入 {phone['name']} 的圖片。錯誤：{str(e)}")

        # Phone name
        name_width = draw.textlength(phone['name'], font=subtitle_font)
        draw.text((x + (phone_width - name_width) // 2, y + 220), phone['name'], font=subtitle_font, fill=colors['subtitle'])

    # Feature comparison
    feature_y = 350
    for feature in features:
        draw.text((20, feature_y), feature['name'], font=body_font, fill=colors['text'])
        for i, phone in enumerate(phones):
            x = i * phone_width + phone_width // 2
            if feature['name'] in phone['features']:
                icon = feature['icon'] if feature['name'] in phone['features'] else '❌'
                icon_width = draw.textlength(icon, font=body_font)
                draw.text((x - icon_width // 2, feature_y), icon, font=body_font, fill=colors['highlight'])
            else:
                draw.text((x - 5, feature_y), '❌', font=body_font, fill=colors['text'])
        feature_y += 40

    return image

# Streamlit UI code remains the same as in the previous version

if st.button('生成比較圖'):
    if phone_data and features:
        try:
            chart = generate_comparison_chart(phone_data, features, colors)
            
            img_bytes = io.BytesIO()
            chart.save(img_bytes, format='PNG')
            
            st.image(img_bytes.getvalue(), caption='生成的 iPhone 比較圖', use_column_width=True)
            
            st.download_button(
                label="下載比較圖",
                data=img_bytes.getvalue(),
                file_name="iphone_comparison.png",
                mime="image/png"
            )
        except Exception as e:
            st.error(f"生成圖表時發生錯誤: {str(e)}")
            st.error("請檢查所有輸入是否正確，並確保上傳的圖片格式正確。")
    else:
        st.warning('請至少添加一個 iPhone 機型和一個功能進行比較。')

st.sidebar.text('iPhone 比較圖生成器 v3.1')
st.sidebar.info('這個應用程序允許你創建自定義的 iPhone 比較圖。輸入功能、機型名稱、上傳圖片，並選擇每個機型的功能來生成比較圖。')