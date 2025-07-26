// Comprehensive Makeup Recommendation Database with Indie Brands
const makeupDatabase = {
    foundation: {
        oily: {
            fair: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Kosas Air Brow Tinted Treatment Gel'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation', 'Glossier Perfecting Skin Tint', 'Milk Makeup Flex Foundation Stick', 'Ilia Super Serum Skin Tint SPF 40'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Saie Slip Tint', 'Kosas Revealer Skin Improving Foundation']
            },
            light: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Kosas Air Brow Tinted Treatment Gel'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation', 'Glossier Perfecting Skin Tint', 'Milk Makeup Flex Foundation Stick', 'Ilia Super Serum Skin Tint SPF 40'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Saie Slip Tint', 'Kosas Revealer Skin Improving Foundation']
            },
            medium: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Kosas Air Brow Tinted Treatment Gel'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation', 'Glossier Perfecting Skin Tint', 'Milk Makeup Flex Foundation Stick', 'Ilia Super Serum Skin Tint SPF 40'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Saie Slip Tint', 'Kosas Revealer Skin Improving Foundation']
            },
            olive: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Kosas Air Brow Tinted Treatment Gel'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation', 'Glossier Perfecting Skin Tint', 'Milk Makeup Flex Foundation Stick', 'Ilia Super Serum Skin Tint SPF 40'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Saie Slip Tint', 'Kosas Revealer Skin Improving Foundation']
            },
            dark: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Kosas Air Brow Tinted Treatment Gel'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation', 'Glossier Perfecting Skin Tint', 'Milk Makeup Flex Foundation Stick', 'Ilia Super Serum Skin Tint SPF 40'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Saie Slip Tint', 'Kosas Revealer Skin Improving Foundation']
            },
            deep: {
                warm: ['Maybelline Fit Me Matte + Poreless Foundation', 'L\'Oreal Infallible Pro-Matte Foundation', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Kosas Air Brow Tinted Treatment Gel'],
                cool: ['Revlon ColorStay Foundation', 'CoverGirl Clean Matte Foundation', 'Glossier Perfecting Skin Tint', 'Milk Makeup Flex Foundation Stick', 'Ilia Super Serum Skin Tint SPF 40'],
                neutral: ['NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation', 'Wet n Wild Photo Focus Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Saie Slip Tint', 'Kosas Revealer Skin Improving Foundation']
            }
        },
        dry: {
            fair: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation', 'Glossier Perfecting Skin Tint', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Kosas Revealer Skin Improving Foundation', 'Milk Makeup Flex Foundation Stick'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Fenty Beauty Pro Filt\'r Hydrating Longwear Foundation', 'Kosas Air Brow Tinted Treatment Gel']
            },
            light: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation', 'Glossier Perfecting Skin Tint', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Kosas Revealer Skin Improving Foundation', 'Milk Makeup Flex Foundation Stick'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Fenty Beauty Pro Filt\'r Hydrating Longwear Foundation', 'Kosas Air Brow Tinted Treatment Gel']
            },
            medium: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation', 'Glossier Perfecting Skin Tint', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Kosas Revealer Skin Improving Foundation', 'Milk Makeup Flex Foundation Stick'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Fenty Beauty Pro Filt\'r Hydrating Longwear Foundation', 'Kosas Air Brow Tinted Treatment Gel']
            },
            olive: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation', 'Glossier Perfecting Skin Tint', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Kosas Revealer Skin Improving Foundation', 'Milk Makeup Flex Foundation Stick'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Fenty Beauty Pro Filt\'r Hydrating Longwear Foundation', 'Kosas Air Brow Tinted Treatment Gel']
            },
            dark: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation', 'Glossier Perfecting Skin Tint', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Kosas Revealer Skin Improving Foundation', 'Milk Makeup Flex Foundation Stick'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Fenty Beauty Pro Filt\'r Hydrating Longwear Foundation', 'Kosas Air Brow Tinted Treatment Gel']
            },
            deep: {
                warm: ['L\'Oreal True Match Foundation', 'Maybelline Dream Radiant Liquid Foundation', 'Glossier Perfecting Skin Tint', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint'],
                cool: ['Revlon PhotoReady Foundation', 'CoverGirl Clean Liquid Foundation', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Kosas Revealer Skin Improving Foundation', 'Milk Makeup Flex Foundation Stick'],
                neutral: ['NYX Professional Makeup Born To Glow Foundation', 'Wet n Wild Dewy Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'Fenty Beauty Pro Filt\'r Hydrating Longwear Foundation', 'Kosas Air Brow Tinted Treatment Gel']
            }
        }
    },
    
    eyeshadow: {
        brown: ['Natasha Denona Bronze Palette', 'Anastasia Beverly Hills Soft Glam Palette', 'Urban Decay Naked Heat Palette', 'Huda Beauty Desert Dusk Palette', 'Pat McGrath Labs Mothership V: Bronze Seduction', 'ColourPop Going Coconuts Palette', 'Morphe 35O Nature Glow Palette', 'Juvia\'s Place The Warrior Palette', 'Sydney Grace Enduring Love Palette', 'Give Me Glow Vintage Rose Palette'],
        blue: ['Natasha Denona Blue-Purple Palette', 'Anastasia Beverly Hills Norvina Pro Pigment Palette Vol. 1', 'Urban Decay Naked Ultraviolet Palette', 'Huda Beauty Mercury Retrograde Palette', 'Pat McGrath Labs Mothership VII: Divine Rose', 'ColourPop Blue Moon Palette', 'Morphe 35B Color Burst Artistry Palette', 'Juvia\'s Place The Magic Palette', 'Sydney Grace Tiny Marvels Palette', 'Give Me Glow Juicy Olive Palette'],
        green: ['Natasha Denona Green-Brown Palette', 'Anastasia Beverly Hills Norvina Pro Pigment Palette Vol. 2', 'Urban Decay Naked Wild West Palette', 'Huda Beauty Emerald Obsessions Palette', 'Pat McGrath Labs Mothership VIII: Divine Rose II', 'ColourPop Just My Luck Palette', 'Morphe 35M Boss Mood Artistry Palette', 'Juvia\'s Place The Tribe Palette', 'Sydney Grace Autumn\'s Reign Palette', 'Give Me Glow Grunge Palette'],
        hazel: ['Natasha Denona Glam Palette', 'Anastasia Beverly Hills Norvina Pro Pigment Palette Vol. 3', 'Urban Decay Naked Honey Palette', 'Huda Beauty Rose Gold Remastered Palette', 'Pat McGrath Labs Mothership IX: Huetopian Dream', 'ColourPop Sweet Talk Palette', 'Morphe 35F Fall Into Frost Artistry Palette', 'Juvia\'s Place The Nubian Palette', 'Sydney Grace The Greatest Gift Palette', 'Give Me Glow Summer Vibes Palette'],
        gray: ['Natasha Denona Glam Palette', 'Anastasia Beverly Hills Norvina Pro Pigment Palette Vol. 4', 'Urban Decay Naked 2 Palette', 'Huda Beauty Nude Obsessions Palette', 'Pat McGrath Labs Mothership X: Moonlit Seduction', 'ColourPop Stone Cold Fox Palette', 'Morphe 35K Khaki Shimmer Artistry Palette', 'Juvia\'s Place The Saharan Palette', 'Sydney Grace Tiny Marvels Palette', 'Give Me Glow Vintage Rose Palette']
    },
    
    lipstick: {
        fair: {
            warm: ['Charlotte Tilbury Pillow Talk Lipstick', 'MAC Velvet Teddy', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            cool: ['Charlotte Tilbury Very Victoria', 'MAC Mehr', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            neutral: ['Charlotte Tilbury Pillow Talk Medium', 'MAC Twig', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color']
        },
        light: {
            warm: ['Charlotte Tilbury Pillow Talk Lipstick', 'MAC Velvet Teddy', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            cool: ['Charlotte Tilbury Very Victoria', 'MAC Mehr', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            neutral: ['Charlotte Tilbury Pillow Talk Medium', 'MAC Twig', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color']
        },
        medium: {
            warm: ['Charlotte Tilbury Walk of Shame', 'MAC Chili', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            cool: ['Charlotte Tilbury Red Hot Susan', 'MAC Ruby Woo', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            neutral: ['Charlotte Tilbury Bond Girl', 'MAC Brick-O-La', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color']
        },
        olive: {
            warm: ['Charlotte Tilbury Walk of Shame', 'MAC Chili', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            cool: ['Charlotte Tilbury Red Hot Susan', 'MAC Ruby Woo', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            neutral: ['Charlotte Tilbury Bond Girl', 'MAC Brick-O-La', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color']
        },
        dark: {
            warm: ['Charlotte Tilbury Love Liberty', 'MAC Diva', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            cool: ['Charlotte Tilbury Glowing Jen', 'MAC Sin', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            neutral: ['Charlotte Tilbury Birkin Brown', 'MAC Antique Velvet', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color']
        },
        deep: {
            warm: ['Charlotte Tilbury Love Liberty', 'MAC Diva', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            cool: ['Charlotte Tilbury Glowing Jen', 'MAC Sin', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
            neutral: ['Charlotte Tilbury Birkin Brown', 'MAC Antique Velvet', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color']
        }
    },
    
    // New makeup categories
    mascara: {
        volume: ['L\'Oreal Voluminous Lash Paradise', 'Maybelline Lash Sensational', 'CoverGirl LashBlast Volume', 'Too Faced Better Than Sex Mascara', 'Benefit They\'re Real! Mascara', 'Urban Decay Perversion Mascara', 'Tarte Lights, Camera, Lashes Mascara', 'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara', 'Rare Beauty Perfect Strokes Mascara', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Lash Slick', 'Ilia Limitless Lash Mascara', 'Saie Slip Tint Mascara', 'Tower 28 BeachPlease Mascara', 'Milk Makeup Kush Mascara'],
        length: ['Maybelline Great Lash', 'L\'Oreal Telescopic', 'CoverGirl Clump Crusher', 'Benefit Roller Lash Mascara', 'Urban Decay Subversion Lash Primer', 'Tarte Gifted Amazonian Clay Smart Mascara', 'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara', 'Rare Beauty Perfect Strokes Mascara', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Lash Slick', 'Ilia Limitless Lash Mascara', 'Saie Slip Tint Mascara', 'Tower 28 BeachPlease Mascara', 'Milk Makeup Kush Mascara'],
        waterproof: ['Maybelline The Falsies Waterproof', 'L\'Oreal Voluminous Waterproof', 'CoverGirl LashBlast Waterproof', 'Too Faced Better Than Sex Waterproof Mascara', 'Benefit They\'re Real! Waterproof Mascara', 'Urban Decay Cannonball Ultra Waterproof Mascara', 'Tarte Lights, Camera, Splashes Waterproof Mascara', 'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara', 'Rare Beauty Perfect Strokes Mascara', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Lash Slick', 'Ilia Limitless Lash Mascara', 'Saie Slip Tint Mascara', 'Tower 28 BeachPlease Mascara', 'Milk Makeup Kush Mascara'],
        natural: ['Glossier Lash Slick', 'Ilia Limitless Lash Mascara', 'Kosas Air Brow Tinted Treatment Gel', 'Saie Slip Tint Mascara', 'Tower 28 BeachPlease Mascara', 'Milk Makeup Kush Mascara', 'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara', 'Rare Beauty Perfect Strokes Mascara', 'Benefit They\'re Real! Mascara', 'Urban Decay Perversion Mascara', 'Tarte Lights, Camera, Lashes Mascara', 'Too Faced Better Than Sex Mascara', 'L\'Oreal Voluminous Lash Paradise', 'Maybelline Lash Sensational', 'CoverGirl LashBlast Volume']
    },
    
    eyeliner: {
        liquid: ['Stila Stay All Day Waterproof Liquid Eyeliner', 'NYX Professional Makeup Epic Ink Liner', 'Maybelline Eye Studio Master Precise'],
        pencil: ['Urban Decay 24/7 Glide-On Eye Pencil', 'NYX Professional Makeup Slide On Pencil', 'Maybelline Eye Studio Master Drama'],
        gel: ['Maybelline Eye Studio Lasting Drama Gel Eyeliner', 'L\'Oreal Infallible Lacquer Liner', 'NYX Professional Makeup Gel Liner'],
        pen: ['Kat Von D Tattoo Liner', 'Stila Stay All Day Waterproof Liquid Eyeliner', 'NYX Professional Makeup Epic Ink Liner']
    },
    
    blush: {
        powder: ['NARS Blush', 'Milani Baked Blush', 'Wet n Wild Color Icon Blush', 'Tarte Amazonian Clay 12-Hour Blush', 'MAC Powder Blush', 'Benefit Dandelion Blush', 'Urban Decay Afterglow Blush', 'Too Faced Love Flush Blush', 'Anastasia Beverly Hills Blush Trio', 'Fenty Beauty Cheeks Out Freestyle Blush', 'Rare Beauty Soft Pinch Liquid Blush', 'Kosas Color & Light Palette', 'Glossier Cloud Paint', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip + Cheek', 'Nudestix Nudies Matte Blush & Bronze'],
        cream: ['Glossier Cloud Paint', 'Milk Makeup Lip + Cheek', 'Fenty Beauty Cheeks Out Freestyle Cream Blush', 'Rare Beauty Soft Pinch Liquid Blush', 'Kosas Color & Light Palette', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Nudestix Nudies Matte Blush & Bronze', 'NARS Liquid Blush', 'Benefit Benetint Cheek & Lip Stain', 'Tarte Amazonian Clay 12-Hour Blush', 'MAC Powder Blush', 'Urban Decay Afterglow Blush', 'Too Faced Love Flush Blush'],
        liquid: ['Benefit Benetint', 'Glossier Cloud Paint', 'Milk Makeup Lip + Cheek', 'Rare Beauty Soft Pinch Liquid Blush', 'Kosas Color & Light Palette', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Nudestix Nudies Matte Blush & Bronze', 'NARS Liquid Blush', 'Fenty Beauty Cheeks Out Freestyle Cream Blush', 'Tarte Amazonian Clay 12-Hour Blush', 'MAC Powder Blush', 'Urban Decay Afterglow Blush', 'Too Faced Love Flush Blush'],
        stick: ['Milk Makeup Lip + Cheek', 'Nudestix Nudies Matte Blush & Bronze', 'Fenty Beauty Cheeks Out Freestyle Cream Blush', 'Rare Beauty Soft Pinch Liquid Blush', 'Kosas Color & Light Palette', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Glossier Cloud Paint', 'NARS Liquid Blush', 'Benefit Benetint Cheek & Lip Stain', 'Tarte Amazonian Clay 12-Hour Blush', 'MAC Powder Blush', 'Urban Decay Afterglow Blush', 'Too Faced Love Flush Blush']
    },
    
    bronzer: {
        powder: ['Benefit Hoola Bronzer', 'Physicians Formula Butter Bronzer', 'Wet n Wild Color Icon Bronzer'],
        cream: ['Milk Makeup Baked Bronzer', 'Fenty Beauty Cheeks Out Freestyle Cream Bronzer', 'Nudestix Nudies Matte'],
        liquid: ['Milk Makeup Baked Bronzer', 'Fenty Beauty Cheeks Out Freestyle Cream Bronzer', 'Glossier Cloud Paint']
    },
    
    highlighter: {
        powder: ['Becca Shimmering Skin Perfector', 'Wet n Wild MegaGlo Highlighting Powder', 'Anastasia Beverly Hills Glow Kit'],
        cream: ['Glossier Haloscope', 'Milk Makeup Highlighter', 'Fenty Beauty Killawatt Freestyle Highlighter'],
        liquid: ['CoverFX Custom Enhancer Drops', 'Becca Shimmering Skin Perfector Liquid', 'Glossier Haloscope'],
        stick: ['Milk Makeup Highlighter', 'Glossier Haloscope', 'Fenty Beauty Killawatt Freestyle Highlighter']
    },
    
    concealer: {
        underEye: ['Tarte Shape Tape Concealer', 'Maybelline Instant Age Rewind', 'NARS Radiant Creamy Concealer'],
        spot: ['MAC Studio Finish Concealer', 'Maybelline Fit Me Concealer', 'NARS Radiant Creamy Concealer'],
        colorCorrecting: ['NYX Professional Makeup Color Correcting Palette', 'L\'Oreal Infallible Full Wear Concealer', 'Maybelline Master Camo Color Correcting Pen']
    },
    
    settingPowder: {
        translucent: ['Laura Mercier Translucent Loose Setting Powder', 'Coty Airspun Loose Face Powder', 'Maybelline Fit Me Loose Finishing Powder'],
        pressed: ['Rimmel Stay Matte Pressed Powder', 'Maybelline Fit Me Pressed Powder', 'CoverGirl Clean Pressed Powder'],
        colored: ['Ben Nye Banana Powder', 'Laura Mercier Translucent Loose Setting Powder', 'Coty Airspun Loose Face Powder']
    },
    
    primer: {
        face: ['Smashbox Photo Finish Foundation Primer', 'Maybelline Baby Skin Instant Pore Eraser', 'NYX Professional Makeup Studio Perfect Primer'],
        eye: ['Urban Decay Eyeshadow Primer Potion', 'NYX Professional Makeup Eyeshadow Base', 'Wet n Wild Photo Focus Eyeshadow Primer'],
        lip: ['MAC Prep + Prime Lip', 'NYX Professional Makeup Lip Primer', 'Urban Decay Ozone Lip Primer']
    },
    
    settingSpray: {
        matte: ['Urban Decay All Nighter Setting Spray', 'NYX Professional Makeup Matte Finish Setting Spray', 'Maybelline Lasting Fix Setting Spray'],
        dewy: ['Morphe Continuous Setting Mist', 'NYX Professional Makeup Dewy Finish Setting Spray', 'CoverGirl Outlast All-Day Setting Spray'],
        longWear: ['Urban Decay All Nighter Setting Spray', 'Benefit The POREfessional Setting Spray', 'MAC Fix+ Setting Spray']
    },
    
    lipBalm: {
        moisturizing: ['Burt\'s Bees Beeswax Lip Balm', 'EOS Smooth Sphere Lip Balm', 'ChapStick Classic Lip Balm', 'Carmex Classic Lip Balm'],
        tinted: ['Burt\'s Bees Tinted Lip Balm', 'Fresh Sugar Lip Treatment', 'Clinique Chubby Stick Moisturizing Lip Colour Balm', 'Nivea Lip Care'],
        medicated: ['Blistex Medicated Lip Balm', 'Carmex Medicated Lip Balm', 'Aquaphor Lip Repair', 'Dr. Dan\'s CortiBalm'],
        luxury: ['Fresh Sugar Lip Treatment', 'Dior Addict Lip Glow', 'Chanel Rouge Coco Baume', 'Yves Saint Laurent Volupté Tint-in-Balm']
    },
    
    lipScrub: {
        sugar: ['Lush Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub'],
        honey: ['Lush Honey Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub'],
        mint: ['Lush Mint Julips Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub'],
        berry: ['Lush Bubblegum Lip Scrub', 'Fresh Sugar Lip Polish', 'ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub']
    },
    
    // Additional makeup categories
    eyebrow: {
        pencil: ['Anastasia Beverly Hills Brow Wiz', 'Benefit Precisely My Brow', 'NYX Professional Makeup Micro Brow Pencil', 'Maybelline Brow Ultra Slim'],
        powder: ['Anastasia Beverly Hills Brow Powder Duo', 'Benefit Brow Zings', 'NYX Professional Makeup Eyebrow Powder', 'Maybelline Brow Drama Pro Palette'],
        gel: ['Anastasia Beverly Hills Clear Brow Gel', 'Benefit Gimme Brow', 'NYX Professional Makeup Control Freak Eyebrow Gel', 'Maybelline Brow Fast Sculpt'],
        pomade: ['Anastasia Beverly Hills Dipbrow Pomade', 'Benefit Ka-Brow', 'NYX Professional Makeup Tame & Frame Tinted Brow Pomade', 'Maybelline Brow Drama Pomade']
    },
    
    eyelash: {
        curler: ['Shu Uemura Eyelash Curler', 'Tweezerman ProCurl Eyelash Curler', 'Revlon Eyelash Curler', 'Maybelline Eyelash Curler'],
        primer: ['L\'Oreal Voluminous Lash Primer', 'Urban Decay Subversion Lash Primer', 'Too Faced Better Than Sex Lash Primer', 'Benefit They\'re Real Lash Primer'],
        growth: ['RapidLash Eyelash Enhancing Serum', 'GrandeLASH-MD Lash Enhancing Serum', 'L\'Oreal Lash Serum Solution', 'Maybelline Lash Sensational Serum']
    },
    
    contour: {
        powder: ['Anastasia Beverly Hills Contour Kit', 'Kat Von D Shade + Light Contour Palette', 'NYX Professional Makeup Highlight & Contour Pro Palette', 'Wet n Wild Contour Palette'],
        cream: ['Anastasia Beverly Hills Cream Contour Kit', 'Kat Von D Shade + Light Crème Contour Palette', 'NYX Professional Makeup Highlight & Contour Pro Palette', 'Wet n Wild Contour Stick'],
        stick: ['Anastasia Beverly Hills Contour Stick', 'Kat Von D Shade + Light Crème Contour Palette', 'NYX Professional Makeup Wonder Stick', 'Wet n Wild Contour Stick']
    },
    
    colorCorrector: {
        green: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer'],
        peach: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer'],
        yellow: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer'],
        purple: ['NYX Professional Makeup Color Correcting Concealer', 'L\'Oreal Infallible Full Wear Color Corrector', 'Maybelline Master Camo Color Correcting Pen', 'CoverGirl TruBlend Undercover Concealer']
    },
    
    lipLiner: {
        nude: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner'],
        red: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner'],
        pink: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner'],
        brown: ['MAC Lip Pencil', 'NYX Professional Makeup Slim Lip Pencil', 'Maybelline Color Sensational Lip Liner', 'CoverGirl Outlast Lip Liner']
    },
    
    lipGloss: {
        clear: ['Fenty Beauty Gloss Bomb', 'NYX Professional Makeup Butter Gloss', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss'],
        tinted: ['Fenty Beauty Gloss Bomb', 'NYX Professional Makeup Butter Gloss', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss'],
        shimmer: ['Fenty Beauty Gloss Bomb', 'NYX Professional Makeup Butter Gloss', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss'],
        plumping: ['Too Faced Lip Injection Extreme', 'NYX Professional Makeup Fat Oil Lip Drip', 'Maybelline Color Sensational Lip Gloss', 'CoverGirl Colorlicious Lip Gloss']
    },
    
    faceMask: {
        sheet: ['Dr. Jart+ Dermask Water Jet Vital Hydra Solution', 'Garnier Skin Naturals Hydra Bomb', 'Maybelline Face Studio Master Prime', 'L\'Oreal Paris Pure Clay Mask'],
        clay: ['Aztec Secret Indian Healing Clay', 'L\'Oreal Paris Pure Clay Mask', 'Maybelline Face Studio Master Prime', 'Garnier Skin Naturals Hydra Bomb'],
        peel: ['The Ordinary AHA 30% + BHA 2% Peeling Solution', 'Drunk Elephant T.L.C. Sukari Babyfacial', 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant', 'The Inkey List Beta Hydroxy Acid Serum']
    },
    
    skincare: {
        cleanser: ['CeraVe Hydrating Facial Cleanser', 'La Roche-Posay Toleriane Hydrating Gentle Cleanser', 'Neutrogena Ultra Gentle Daily Cleanser', 'Cetaphil Gentle Skin Cleanser', 'Glossier Milky Jelly Cleanser', 'Kosas Air Brow Tinted Treatment Gel', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Milk Makeup Flex Foundation Stick', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'The Ordinary Squalane Cleanser', 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant', 'Drunk Elephant Beste No. 9 Jelly Cleanser', 'Tatcha The Rice Wash Skin-Softening Cleanser', 'Fresh Soy Face Cleanser', 'Kiehl\'s Ultra Facial Cleanser', 'Origins Checks and Balances Frothy Face Wash', 'Clinique Take The Day Off Cleansing Balm'],
        moisturizer: ['CeraVe Daily Moisturizing Lotion', 'La Roche-Posay Double Repair Face Moisturizer', 'Neutrogena Hydro Boost Water Gel', 'Cetaphil Daily Hydrating Lotion', 'Glossier Priming Moisturizer', 'Kosas Air Brow Tinted Treatment Gel', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Milk Makeup Flex Foundation Stick', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'The Ordinary Natural Moisturizing Factors + HA', 'Paula\'s Choice Omega+ Complex Moisturizer', 'Drunk Elephant Protini Polypeptide Cream', 'Tatcha The Dewy Skin Cream', 'Fresh Rose Deep Hydration Face Cream', 'Kiehl\'s Ultra Facial Cream', 'Origins GinZing Energy-Boosting Gel Moisturizer', 'Clinique Dramatically Different Moisturizing Gel'],
        serum: ['The Ordinary Niacinamide 10% + Zinc 1%', 'CeraVe Skin Renewing Vitamin C Serum', 'La Roche-Posay Pure Vitamin C Face Serum', 'Neutrogena Rapid Tone Repair Vitamin C Serum', 'Glossier Super Pure Niacinamide + Zinc Serum', 'Kosas Air Brow Tinted Treatment Gel', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Milk Makeup Flex Foundation Stick', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'The Ordinary Hyaluronic Acid 2% + B5', 'Paula\'s Choice 10% Azelaic Acid Booster', 'Drunk Elephant C-Firma Day Serum', 'Tatcha Violet-C Brightening Serum', 'Fresh Black Tea Kombucha Facial Treatment Essence', 'Kiehl\'s Midnight Recovery Concentrate', 'Origins GinZing Refreshing Scrub Cleanser', 'Clinique Smart Custom-Repair Serum'],
        sunscreen: ['CeraVe AM Facial Moisturizing Lotion SPF 30', 'La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 60', 'Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 55', 'Cetaphil Daily Facial Moisturizer SPF 50', 'Glossier Invisible Shield Daily Sunscreen SPF 35', 'Kosas Air Brow Tinted Treatment Gel', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Milk Makeup Flex Foundation Stick', 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation', 'Rare Beauty Liquid Touch Weightless Foundation', 'The Ordinary Mineral UV Filters SPF 30 with Antioxidants', 'Paula\'s Choice Resist Super-Light Daily Wrinkle Defense SPF 30', 'Drunk Elephant Umbra Sheer Physical Daily Defense SPF 30', 'Tatcha Silken Pore Perfecting Sunscreen SPF 35', 'Fresh Sugar Strawberry Exfoliating Face Wash', 'Kiehl\'s Ultra Facial Cream SPF 30', 'Origins GinZing Energy-Boosting Gel Moisturizer', 'Clinique Pep-Start Daily UV Protector Broad Spectrum SPF 50']
    },
    
    tools: {
        brushes: ['Real Techniques Brushes', 'Morphe Brushes', 'Sigma Brushes', 'EcoTools Brushes'],
        sponges: ['Beautyblender', 'Real Techniques Miracle Complexion Sponge', 'EcoTools Total Perfecting Blender', 'Maybelline Master Blender Sponge'],
        tweezers: ['Tweezerman Slant Tweezer', 'Anastasia Beverly Hills Tweezers', 'Revlon Tweezers', 'Maybelline Tweezers'],
        sharpener: ['Urban Decay Grindhouse Sharpener', 'MAC Pencil Sharpener', 'NYX Professional Makeup Pencil Sharpener', 'Maybelline Pencil Sharpener']
    },
    
    nailPolish: {
        base: ['OPI Natural Nail Base Coat', 'Essie First Base Base Coat', 'Sally Hansen Hard as Nails Base Coat', 'Wet n Wild Base Coat'],
        color: ['OPI Nail Lacquer', 'Essie Nail Polish', 'Sally Hansen Insta-Dri', 'Wet n Wild Wild Shine'],
        top: ['OPI Top Coat', 'Essie Good to Go Top Coat', 'Sally Hansen Insta-Dri Top Coat', 'Wet n Wild Top Coat'],
        treatment: ['OPI Nail Envy', 'Essie Treat Love & Color', 'Sally Hansen Hard as Nails', 'Wet n Wild Nail Treatment']
    },
    
    perfume: {
        floral: ['Marc Jacobs Daisy', 'Viktor&Rolf Flowerbomb', 'Jo Malone London Peony & Blush Suede', 'Chanel Chance Eau Tendre', 'Dior Miss Dior', 'Yves Saint Laurent Libre'],
        fruity: ['Marc Jacobs Daisy Eau So Fresh', 'Viktor&Rolf Bonbon', 'Jo Malone London Nectarine Blossom & Honey', 'Chanel Chance Eau Vive', 'Dior Joy', 'Yves Saint Laurent Mon Paris'],
        oriental: ['Yves Saint Laurent Black Opium', 'Tom Ford Black Orchid', 'Jo Malone London Velvet Rose & Oud', 'Chanel Coco Mademoiselle', 'Dior Poison', 'Yves Saint Laurent Opium'],
        fresh: ['Marc Jacobs Daisy Dream', 'Viktor&Rolf Spicebomb', 'Jo Malone London Wood Sage & Sea Salt', 'Chanel Chance Eau Fraîche', 'Dior Sauvage', 'Yves Saint Laurent L\'Homme'],
        woody: ['Jo Malone London Wood Sage & Sea Salt', 'Tom Ford Oud Wood', 'Chanel Sycomore', 'Dior Fahrenheit', 'Yves Saint Laurent L\'Homme Libre'],
        musky: ['Jo Malone London Myrrh & Tonka', 'Tom Ford White Musk', 'Chanel No. 5', 'Dior Addict', 'Yves Saint Laurent Black Opium'],
        citrus: ['Jo Malone London Lime Basil & Mandarin', 'Tom Ford Neroli Portofino', 'Chanel Chance Eau Vive', 'Dior Eau Sauvage', 'Yves Saint Laurent L\'Homme Cologne'],
        gourmand: ['Viktor&Rolf Bonbon', 'Tom Ford Tobacco Vanille', 'Chanel Coco Mademoiselle', 'Dior Hypnotic Poison', 'Yves Saint Laurent Black Opium']
    },
    
    bathAndBody: {
        bodyWash: ['Dove Deep Moisture Body Wash', 'Olay Ultra Moisture Body Wash', 'Nivea Nourishing Body Wash', 'Aveeno Daily Moisturizing Body Wash', 'Cetaphil Gentle Skin Cleanser'],
        bodyLotion: ['Dove Deep Moisture Body Lotion', 'Olay Ultra Moisture Body Lotion', 'Nivea Nourishing Body Lotion', 'Aveeno Daily Moisturizing Lotion', 'Cetaphil Daily Hydrating Lotion'],
        bodyScrub: ['Tree Hut Shea Sugar Scrub', 'Dove Exfoliating Body Polish', 'Olay Exfoliating Body Wash', 'Nivea Exfoliating Body Scrub', 'Aveeno Positively Radiant Scrub'],
        bodyOil: ['Bio-Oil Skincare Oil', 'Palmer\'s Cocoa Butter Formula', 'Burt\'s Bees Mama Bee Nourishing Body Oil', 'Aveeno Daily Moisturizing Oil', 'Cetaphil Daily Hydrating Oil'],
        handCream: ['O\'Keeffe\'s Working Hands Hand Cream', 'Neutrogena Norwegian Formula Hand Cream', 'Aveeno Intense Relief Hand Cream', 'Cetaphil Therapeutic Hand Cream', 'Eucerin Advanced Repair Hand Cream'],
        footCream: ['O\'Keeffe\'s Healthy Feet Foot Cream', 'Neutrogena Norwegian Formula Foot Cream', 'Aveeno Intense Relief Foot Cream', 'Cetaphil Therapeutic Foot Cream', 'Eucerin Advanced Repair Foot Cream'],
        deodorant: ['Dove Advanced Care Antiperspirant', 'Secret Clinical Strength Antiperspirant', 'Degree Clinical Protection Antiperspirant', 'Suave Clinical Protection Antiperspirant', 'Ban Clinical Protection Antiperspirant'],
        shaveGel: ['Gillette Venus Shave Gel', 'Schick Hydro Silk Shave Gel', 'Dove Men+Care Shave Gel', 'Nivea Men Shave Gel', 'Aveeno Therapeutic Shave Gel']
    },
    
    hairCare: {
        shampoo: ['Olaplex No. 4 Bond Maintenance Shampoo', 'Briogeo Don\'t Despair, Repair! Shampoo', 'Not Your Mother\'s Naturals Shampoo', 'Herbal Essences Bio:Renew Shampoo'],
        conditioner: ['Olaplex No. 5 Bond Maintenance Conditioner', 'Briogeo Don\'t Despair, Repair! Conditioner', 'Not Your Mother\'s Naturals Conditioner', 'Herbal Essences Bio:Renew Conditioner'],
        mask: ['Olaplex No. 3 Hair Perfector', 'Briogeo Don\'t Despair, Repair! Deep Conditioning Mask', 'Not Your Mother\'s Naturals Hair Mask', 'Herbal Essences Bio:Renew Hair Mask'],
        styling: ['Olaplex No. 6 Bond Smoother', 'Briogeo Rosarco Milk Leave-In Conditioning Spray', 'Not Your Mother\'s Naturals Styling Products', 'Herbal Essences Bio:Renew Styling Products']
    }
};

// Product database with images and links
const productDatabase = {
    // Drugstore products
    'Maybelline Fit Me Matte + Poreless Foundation': {
        link: 'https://www.ulta.com/p/maybelline-fit-me-matte-poreless-foundation-pimprod2008108',
        image: 'https://images.ulta.com/is/image/Ulta/2531134?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'L\'Oreal True Match Foundation': {
        link: 'https://www.ulta.com/p/loreal-true-match-foundation-pimprod2008109',
        image: 'https://images.ulta.com/is/image/Ulta/2531135?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Revlon ColorStay Foundation': {
        link: 'https://www.ulta.com/p/revlon-colorstay-foundation-pimprod2008110',
        image: 'https://images.ulta.com/is/image/Ulta/2531136?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'CoverGirl Clean Foundation': {
        link: 'https://www.ulta.com/p/covergirl-clean-foundation-pimprod2008111',
        image: 'https://images.ulta.com/is/image/Ulta/2531137?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Wet n Wild Photo Focus Foundation': {
        link: 'https://www.ulta.com/p/wet-n-wild-photo-focus-foundation-pimprod2008112',
        image: 'https://images.ulta.com/is/image/Ulta/2531138?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'NYX Professional Makeup Can\'t Stop Won\'t Stop Foundation': {
        link: 'https://www.ulta.com/p/nyx-professional-makeup-cant-stop-wont-stop-foundation-pimprod2008113',
        image: 'https://images.ulta.com/is/image/Ulta/2531139?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation': {
        link: 'https://www.fentybeauty.com/pro-filtr-soft-matte-longwear-foundation/',
        image: 'https://www.fentybeauty.com/dw/image/v2/BDXQ_PRD/on/demandware.static/-/Sites-fenty-beauty-master-catalog/default/dw8c8c8c8c/images/Pro%20Filt%27r%20Soft%20Matte%20Longwear%20Foundation.jpg'
    },
    'Rare Beauty Liquid Touch Weightless Foundation': {
        link: 'https://www.rarebeauty.com/products/liquid-touch-weightless-foundation',
        image: 'https://www.rarebeauty.com/cdn/shop/products/LiquidTouchWeightlessFoundation_1.jpg'
    },
    'Glossier Perfecting Skin Tint': {
        link: 'https://www.glossier.com/products/perfecting-skin-tint',
        image: 'https://www.glossier.com/cdn/shop/products/perfecting-skin-tint-1.jpg'
    },
    'Kosas Air Brow Tinted Treatment Gel': {
        link: 'https://kosas.com/products/air-brow',
        image: 'https://kosas.com/cdn/shop/products/AirBrow_1.jpg'
    },
    'Ilia Super Serum Skin Tint SPF 40': {
        link: 'https://iliabeauty.com/products/super-serum-skin-tint-spf-40',
        image: 'https://iliabeauty.com/cdn/shop/products/SuperSerumSkinTint_1.jpg'
    },
    'Saie Slip Tint': {
        link: 'https://saie.com/products/slip-tint',
        image: 'https://saie.com/cdn/shop/products/SlipTint_1.jpg'
    },
    'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation': {
        link: 'https://tower28beauty.com/products/sunnydays-spf-30-tinted-sunscreen-foundation',
        image: 'https://tower28beauty.com/cdn/shop/products/SunnyDays_1.jpg'
    },
    'Milk Makeup Flex Foundation Stick': {
        link: 'https://www.milkmakeup.com/products/flex-foundation-stick',
        image: 'https://www.milkmakeup.com/cdn/shop/products/FlexFoundationStick_1.jpg'
    },
    'Charlotte Tilbury Pillow Talk Lipstick': {
        link: 'https://www.charlottetilbury.com/us/pillow-talk-lipstick',
        image: 'https://www.charlottetilbury.com/cdn/shop/products/PillowTalkLipstick_1.jpg'
    },
    'MAC Velvet Teddy': {
        link: 'https://www.maccosmetics.com/product/13854/310/products/makeup/lips/lipstick/velvet-teddy',
        image: 'https://www.maccosmetics.com/cdn/shop/products/velvet-teddy-lipstick_1.jpg'
    },
    'Natasha Denona Bronze Palette': {
        link: 'https://natashadenona.com/products/bronze-palette',
        image: 'https://natashadenona.com/cdn/shop/products/BronzePalette_1.jpg'
    },
    'Anastasia Beverly Hills Soft Glam Palette': {
        link: 'https://www.anastasiabeverlyhills.com/soft-glam-eyeshadow-palette/',
        image: 'https://www.anastasiabeverlyhills.com/cdn/shop/products/SoftGlamPalette_1.jpg'
    },
    'Urban Decay Naked Heat Palette': {
        link: 'https://www.urbandecay.com/naked-heat-eyeshadow-palette/',
        image: 'https://www.urbandecay.com/cdn/shop/products/NakedHeatPalette_1.jpg'
    },
    'Huda Beauty Desert Dusk Palette': {
        link: 'https://hudabeauty.com/products/desert-dusk-eyeshadow-palette',
        image: 'https://hudabeauty.com/cdn/shop/products/DesertDuskPalette_1.jpg'
    },
    'Pat McGrath Labs Mothership V: Bronze Seduction': {
        link: 'https://www.patmcgrath.com/products/mothership-v-bronze-seduction-eyeshadow-palette',
        image: 'https://www.patmcgrath.com/cdn/shop/products/MothershipV_1.jpg'
    },
    'ColourPop Going Coconuts Palette': {
        link: 'https://colourpop.com/products/going-coconuts-palette',
        image: 'https://colourpop.com/cdn/shop/products/GoingCoconutsPalette_1.jpg'
    },
    'Morphe 35O Nature Glow Palette': {
        link: 'https://www.morphe.com/products/35o-nature-glow-artistry-palette',
        image: 'https://www.morphe.com/cdn/shop/products/35ONatureGlow_1.jpg'
    },
    'Juvia\'s Place The Warrior Palette': {
        link: 'https://www.juviasplace.com/products/the-warrior-palette',
        image: 'https://www.juviasplace.com/cdn/shop/products/WarriorPalette_1.jpg'
    },
    'Sydney Grace Enduring Love Palette': {
        link: 'https://sydneygraceco.com/products/enduring-love-palette',
        image: 'https://sydneygraceco.com/cdn/shop/products/EnduringLovePalette_1.jpg'
    },
    'Give Me Glow Vintage Rose Palette': {
        link: 'https://givemeglowcosmetics.com/products/vintage-rose-palette',
        image: 'https://givemeglowcosmetics.com/cdn/shop/products/VintageRosePalette_1.jpg'
    },
    'L\'Oreal Voluminous Lash Paradise': {
        link: 'https://www.ulta.com/p/loreal-voluminous-lash-paradise-mascara-pimprod2008120',
        image: 'https://images.ulta.com/is/image/Ulta/2531140?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Maybelline Lash Sensational': {
        link: 'https://www.ulta.com/p/maybelline-lash-sensational-mascara-pimprod2008121',
        image: 'https://images.ulta.com/is/image/Ulta/2531142?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'CoverGirl LashBlast Volume': {
        link: 'https://www.ulta.com/p/covergirl-lashblast-volume-mascara-pimprod2008123',
        image: 'https://images.ulta.com/is/image/Ulta/2531144?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Too Faced Better Than Sex Mascara': {
        link: 'https://www.toofaced.com/products/better-than-sex-mascara',
        image: 'https://www.toofaced.com/cdn/shop/products/BetterThanSexMascara_1.jpg'
    },
    'Benefit They\'re Real! Mascara': {
        link: 'https://www.benefitcosmetics.com/us/en/product/theyre-real-mascara',
        image: 'https://www.benefitcosmetics.com/cdn/shop/products/TheyreRealMascara_1.jpg'
    },
    'Urban Decay Perversion Mascara': {
        link: 'https://www.urbandecay.com/perversion-mascara/',
        image: 'https://www.urbandecay.com/cdn/shop/products/PerversionMascara_1.jpg'
    },
    'Tarte Lights, Camera, Lashes Mascara': {
        link: 'https://tartecosmetics.com/products/lights-camera-lashes-mascara',
        image: 'https://tartecosmetics.com/cdn/shop/products/LightsCameraLashes_1.jpg'
    },
    'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara': {
        link: 'https://www.fentybeauty.com/full-frontal-volume-lift-curl-mascara/',
        image: 'https://www.fentybeauty.com/cdn/shop/products/FullFrontalMascara_1.jpg'
    },
    'Rare Beauty Perfect Strokes Mascara': {
        link: 'https://www.rarebeauty.com/products/perfect-strokes-mascara',
        image: 'https://www.rarebeauty.com/cdn/shop/products/PerfectStrokesMascara_1.jpg'
    },
    'Glossier Lash Slick': {
        link: 'https://www.glossier.com/products/lash-slick',
        image: 'https://www.glossier.com/cdn/shop/products/lash-slick-1.jpg'
    },
    'Ilia Limitless Lash Mascara': {
        link: 'https://iliabeauty.com/products/limitless-lash-mascara',
        image: 'https://iliabeauty.com/cdn/shop/products/LimitlessLashMascara_1.jpg'
    },
    'Saie Slip Tint Mascara': {
        link: 'https://saie.com/products/slip-tint-mascara',
        image: 'https://saie.com/cdn/shop/products/SlipTintMascara_1.jpg'
    },
    'Tower 28 BeachPlease Mascara': {
        link: 'https://tower28beauty.com/products/beachplease-mascara',
        image: 'https://tower28beauty.com/cdn/shop/products/BeachPleaseMascara_1.jpg'
    },
    'Milk Makeup Kush Mascara': {
        link: 'https://www.milkmakeup.com/products/kush-mascara',
        image: 'https://www.milkmakeup.com/cdn/shop/products/KushMascara_1.jpg'
    },
    'NARS Blush': {
        link: 'https://www.narscosmetics.com/USA/blush',
        image: 'https://www.narscosmetics.com/cdn/shop/products/NARSBlush_1.jpg'
    },
    'Milani Baked Blush': {
        link: 'https://www.ulta.com/p/milani-baked-blush-pimprod2008125',
        image: 'https://images.ulta.com/is/image/Ulta/2531146?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Wet n Wild Color Icon Blush': {
        link: 'https://www.ulta.com/p/wet-n-wild-color-icon-blush-pimprod2008127',
        image: 'https://images.ulta.com/is/image/Ulta/2531148?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Tarte Amazonian Clay 12-Hour Blush': {
        link: 'https://tartecosmetics.com/products/amazonian-clay-12-hour-brush',
        image: 'https://tartecosmetics.com/cdn/shop/products/AmazonianClayBlush_1.jpg'
    },
    'Rare Beauty Soft Pinch Liquid Blush': {
        link: 'https://www.rarebeauty.com/products/soft-pinch-liquid-blush',
        image: 'https://www.rarebeauty.com/cdn/shop/products/SoftPinchLiquidBlush_1.jpg'
    },
    'Kosas Color & Light Palette': {
        link: 'https://kosas.com/products/color-light-palette',
        image: 'https://kosas.com/cdn/shop/products/ColorLightPalette_1.jpg'
    },
    'Glossier Cloud Paint': {
        link: 'https://www.glossier.com/products/cloud-paint',
        image: 'https://www.glossier.com/cdn/shop/products/cloud-paint-1.jpg'
    },
    'Ilia Color Haze Multi-Use Pigment': {
        link: 'https://iliabeauty.com/products/color-haze-multi-use-pigment',
        image: 'https://iliabeauty.com/cdn/shop/products/ColorHazePigment_1.jpg'
    },
    'Saie Dew Blush Liquid Cheek Blush': {
        link: 'https://saie.com/products/dew-blush-liquid-cheek-blush',
        image: 'https://saie.com/cdn/shop/products/DewBlush_1.jpg'
    },
    'Tower 28 BeachPlease Lip + Cheek Cream Blush': {
        link: 'https://tower28beauty.com/products/beachplease-lip-cheek-cream-blush',
        image: 'https://tower28beauty.com/cdn/shop/products/BeachPleaseBlush_1.jpg'
    },
    'Milk Makeup Lip + Cheek': {
        link: 'https://www.milkmakeup.com/products/lip-cheek',
        image: 'https://www.milkmakeup.com/cdn/shop/products/LipCheek_1.jpg'
    },
    'Nudestix Nudies Matte Blush & Bronze': {
        link: 'https://nudestix.com/products/nudies-mat-blush-bronze',
        image: 'https://nudestix.com/cdn/shop/products/NudiesMatteBlush_1.jpg'
    },
    'CeraVe Hydrating Facial Cleanser': {
        link: 'https://www.ulta.com/p/cerave-hydrating-facial-cleanser-pimprod2008129',
        image: 'https://images.ulta.com/is/image/Ulta/2531150?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'La Roche-Posay Toleriane Hydrating Gentle Cleanser': {
        link: 'https://www.ulta.com/p/la-roche-posay-toleriane-hydrating-gentle-cleanser-pimprod2008131',
        image: 'https://images.ulta.com/is/image/Ulta/2531152?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Neutrogena Ultra Gentle Daily Cleanser': {
        link: 'https://www.ulta.com/p/neutrogena-ultra-gentle-daily-cleanser-pimprod2008133',
        image: 'https://images.ulta.com/is/image/Ulta/2531154?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Cetaphil Gentle Skin Cleanser': {
        link: 'https://www.ulta.com/p/cetaphil-gentle-skin-cleanser-pimprod2008135',
        image: 'https://images.ulta.com/is/image/Ulta/2531156?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'The Ordinary Niacinamide 10% + Zinc 1%': {
        link: 'https://theordinary.com/product/rdn-niacinamide-10pct-zinc-1pct-30ml',
        image: 'https://theordinary.com/cdn/shop/products/Niacinamide10Zinc1_1.jpg'
    },
    'CeraVe Daily Moisturizing Lotion': {
        link: 'https://www.ulta.com/p/cerave-daily-moisturizing-lotion-pimprod2008137',
        image: 'https://images.ulta.com/is/image/Ulta/2531158?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'La Roche-Posay Double Repair Face Moisturizer': {
        link: 'https://www.ulta.com/p/la-roche-posay-double-repair-face-moisturizer-pimprod2008139',
        image: 'https://images.ulta.com/is/image/Ulta/2531160?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Neutrogena Hydro Boost Water Gel': {
        link: 'https://www.ulta.com/p/neutrogena-hydro-boost-water-gel-pimprod2008141',
        image: 'https://images.ulta.com/is/image/Ulta/2531162?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    },
    'Cetaphil Daily Hydrating Lotion': {
        link: 'https://www.ulta.com/p/cetaphil-daily-hydrating-lotion-pimprod2008143',
        image: 'https://images.ulta.com/is/image/Ulta/2531164?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'
    }
};

// Comprehensive Product Purchase Links Database
const productLinks = {
    // Drugstore products
    'Maybelline Fit Me': 'https://www.ulta.com/p/maybelline-fit-me-matte-poreless-foundation-pimprod2008108',
    'L\'Oreal True Match': 'https://www.ulta.com/p/loreal-true-match-foundation-pimprod2008109',
    'Revlon ColorStay': 'https://www.ulta.com/p/revlon-colorstay-foundation-pimprod2008110',
    'CoverGirl Clean': 'https://www.ulta.com/p/covergirl-clean-foundation-pimprod2008111',
    'Wet n Wild Color Icon': 'https://www.ulta.com/p/wet-n-wild-color-icon-eyeshadow-pimprod2008112',
    'NYX Professional Makeup': 'https://www.ulta.com/p/nyx-professional-makeup-eyeshadow-pimprod2008113',
    'Maybelline Color Sensational': 'https://www.ulta.com/p/maybelline-color-sensational-lipstick-pimprod2008114',
    'Burt\'s Bees': 'https://www.ulta.com/p/burts-bees-beeswax-lip-balm-pimprod2008115',
    'ChapStick': 'https://www.ulta.com/p/chapstick-classic-lip-balm-pimprod2008116',
    'Carmex': 'https://www.ulta.com/p/carmex-classic-lip-balm-pimprod2008117',
    'EOS': 'https://www.ulta.com/p/eos-smooth-sphere-lip-balm-pimprod2008118',
    'ELF Lip Exfoliator': 'https://www.ulta.com/p/elf-lip-exfoliator-pimprod2008119',
    
    // Indie & Clean Beauty Brands
    'Glossier': 'https://www.glossier.com/',
    'Kosas': 'https://kosas.com/',
    'Ilia': 'https://iliabeauty.com/',
    'Saie': 'https://saie.com/',
    'Tower 28': 'https://tower28beauty.com/',
    'Milk Makeup': 'https://www.milkmakeup.com/',
    'Fenty Beauty': 'https://www.fentybeauty.com/',
    'Rare Beauty': 'https://www.rarebeauty.com/',
    'Charlotte Tilbury': 'https://www.charlottetilbury.com/',
    'Pat McGrath Labs': 'https://www.patmcgrath.com/',
    'Natasha Denona': 'https://natashadenona.com/',
    'Huda Beauty': 'https://hudabeauty.com/',
    'Anastasia Beverly Hills': 'https://www.anastasiabeverlyhills.com/',
    'Urban Decay': 'https://www.urbandecay.com/',
    'Too Faced': 'https://www.toofaced.com/',
    'Tarte': 'https://tartecosmetics.com/',
    'Benefit': 'https://www.benefitcosmetics.com/',
    'NARS': 'https://www.narscosmetics.com/',
    'MAC': 'https://www.maccosmetics.com/',
    'Juvia\'s Place': 'https://www.juviasplace.com/',
    'Sydney Grace': 'https://sydneygraceco.com/',
    'Give Me Glow': 'https://givemeglowcosmetics.com/',
    'ColourPop': 'https://colourpop.com/',
    'Morphe': 'https://www.morphe.com/',
    'The Ordinary': 'https://theordinary.com/',
    'Paula\'s Choice': 'https://www.paulaschoice.com/',
    'Drunk Elephant': 'https://www.drunkelephant.com/',
    'Tatcha': 'https://www.tatcha.com/',
    'Fresh': 'https://www.fresh.com/',
    'Kiehl\'s': 'https://www.kiehls.com/',
    'Origins': 'https://www.origins.com/',
    'Clinique': 'https://www.clinique.com/',
    'Nudestix': 'https://nudestix.com/',
    'Lush': 'https://www.lush.com/',
    'Bath & Body Works': 'https://www.bathandbodyworks.com/',
    'Victoria\'s Secret': 'https://www.victoriassecret.com/',
    'Pink': 'https://www.pink.com/',
    'Ariana Grande': 'https://www.arianagrande.com/',
    
    // Mid-range products
    'MAC Studio Fix': 'https://www.maccosmetics.com/product/13854/310/products/makeup/face-makeup/foundation/studio-fix-fluid-sp-nc15-mac',
    'Urban Decay Naked': 'https://www.ulta.com/p/urban-decay-naked-eyeshadow-palette-pimprod2008120',
    'Too Faced Chocolate Bar': 'https://www.ulta.com/p/too-faced-chocolate-bar-eyeshadow-palette-pimprod2008121',
    'NARS': 'https://www.narscosmetics.com/USA',
    'Fresh Sugar Lip Treatment': 'https://www.sephora.com/product/fresh-sugar-advanced-therapy-lip-treatment-P455456',
    'Clinique Chubby Stick': 'https://www.ulta.com/p/clinique-chubby-stick-moisturizing-lip-colour-balm-pimprod2008122',
    'Lush Lip Scrub': 'https://www.lush.com/us/en/p/mint-julips-lip-scrub',
    
    // High-end products
    'Estée Lauder Double Wear': 'https://www.esteelauder.com/product/26389/112420/product-catalog/makeup/face/foundation/double-wear-stay-in-place-foundation',
    'Dior Forever': 'https://www.dior.com/en_us/products/beauty-makeup-face-foundation-forever-foundation',
    'Chanel Ultra Le Teint': 'https://www.chanel.com/us/makeup/p/ultra-le-teint-ultrawear-all-day-comfort-flawless-finish-foundation/',
    'Yves Saint Laurent All Hours': 'https://www.yslbeautyus.com/makeup/face/foundation/all-hours-foundation/',
    'Pat McGrath Labs': 'https://www.patmcgrath.com/',
    'Charlotte Tilbury': 'https://www.charlottetilbury.com/',
    'Tom Ford': 'https://www.tomford.com/',
    'Dior Addict Lip Glow': 'https://www.dior.com/en_us/products/beauty-makeup-lips-lipstick-addict-lip-glow',
    'Chanel Rouge Coco Baume': 'https://www.chanel.com/us/makeup/p/rouge-coco-baume-hydrating-lip-balm/',
    
    // Luxury products
    'La Mer': 'https://www.cremedelamer.com/',
    'La Prairie': 'https://www.laprairie.com/',
    'Cle de Peau': 'https://www.cledepeau-beaute.com/',
    'Sisley': 'https://www.sisley-paris.com/',
    
    // Bath & Body products
    'Dove': 'https://www.dove.com/us/en/',
    'Olay': 'https://www.olay.com/us/en/',
    'Nivea': 'https://www.nivea.com/us/',
    'Aveeno': 'https://www.aveeno.com/',
    'Cetaphil': 'https://www.cetaphil.com/',
    'Tree Hut': 'https://www.treehutsheabutter.com/',
    'Bio-Oil': 'https://www.bio-oil.com/',
    'Palmer\'s': 'https://www.palmers.com/',
    'O\'Keeffe\'s': 'https://www.okeeffescompany.com/',
    'Neutrogena': 'https://www.neutrogena.com/',
    'Eucerin': 'https://www.eucerin.com/',
    'Gillette': 'https://www.gillette.com/',
    'Schick': 'https://www.schick.com/',
    'Secret': 'https://www.secret.com/',
    'Degree': 'https://www.degree.com/',
    'Suave': 'https://www.suave.com/',
    'Ban': 'https://www.ban.com/',
    
    // Perfume brands
    'Marc Jacobs': 'https://www.marcjacobs.com/',
    'Viktor&Rolf': 'https://www.viktor-rolf.com/',
    'Jo Malone London': 'https://www.jomalone.com/',
    'Bath & Body Works': 'https://www.bathandbodyworks.com/',
    'Victoria\'s Secret': 'https://www.victoriassecret.com/',
    'Pink': 'https://www.pink.com/',
    'Ariana Grande': 'https://www.arianagrande.com/'
};

// Function to get product data (link and image)
function getProductData(productName) {
    // First try exact match in new database
    if (productDatabase[productName]) {
        return productDatabase[productName];
    }
    
    // Try partial match in new database
    for (const [key, data] of Object.entries(productDatabase)) {
        if (productName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(productName.toLowerCase())) {
            return data;
        }
    }
    
    // Fallback to old productLinks
    if (productLinks[productName]) {
        return { link: productLinks[productName], image: getDefaultProductImage(productName) };
    }
    
    // Try partial match in old links
    for (const [key, link] of Object.entries(productLinks)) {
        if (productName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(productName.toLowerCase())) {
            return { link: link, image: getDefaultProductImage(productName) };
        }
    }
    
    // Try brand match
    const brands = ['Maybelline', 'L\'Oreal', 'Revlon', 'CoverGirl', 'Wet n Wild', 'NYX', 'Fenty Beauty', 'Rare Beauty', 'Glossier', 'Kosas', 'Ilia', 'Saie', 'Tower 28', 'Milk Makeup', 'Charlotte Tilbury', 'MAC', 'Natasha Denona', 'Anastasia Beverly Hills', 'Urban Decay', 'Huda Beauty', 'Pat McGrath Labs', 'ColourPop', 'Morphe', 'Juvia\'s Place', 'Sydney Grace', 'Give Me Glow', 'Too Faced', 'Tarte', 'Benefit', 'NARS', 'The Ordinary', 'Paula\'s Choice', 'Drunk Elephant', 'Tatcha', 'Fresh', 'Kiehl\'s', 'Origins', 'Clinique', 'Nudestix'];
    
    for (const brand of brands) {
        if (productName.toLowerCase().includes(brand.toLowerCase())) {
            return { link: productLinks[brand] || `https://www.google.com/search?q=${encodeURIComponent(productName)}`, image: getDefaultProductImage(productName) };
        }
    }
    
    // Fallback to Google search with default image
    return { link: `https://www.google.com/search?q=${encodeURIComponent(productName)}`, image: getDefaultProductImage(productName) };
}

// Function to get purchase link for a product (backward compatibility)
function getPurchaseLink(productName) {
    const productData = getProductData(productName);
    return productData.link;
}

// Function to get product image
function getProductImage(productName) {
    const productData = getProductData(productName);
    return productData.image;
}

// Function to get default product image based on category
function getDefaultProductImage(productName) {
    const lowerName = productName.toLowerCase();
    
    if (lowerName.includes('foundation') || lowerName.includes('concealer') || lowerName.includes('primer')) {
        return 'https://images.ulta.com/is/image/Ulta/2531134?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    } else if (lowerName.includes('eyeshadow') || lowerName.includes('palette')) {
        return 'https://images.ulta.com/is/image/Ulta/2531135?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    } else if (lowerName.includes('lipstick') || lowerName.includes('lip') || lowerName.includes('gloss')) {
        return 'https://images.ulta.com/is/image/Ulta/2531136?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    } else if (lowerName.includes('mascara') || lowerName.includes('lash')) {
        return 'https://images.ulta.com/is/image/Ulta/2531137?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    } else if (lowerName.includes('blush') || lowerName.includes('bronzer') || lowerName.includes('highlighter')) {
        return 'https://images.ulta.com/is/image/Ulta/2531138?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    } else if (lowerName.includes('cleanser') || lowerName.includes('moisturizer') || lowerName.includes('serum')) {
        return 'https://images.ulta.com/is/image/Ulta/2531139?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    } else {
        return 'https://images.ulta.com/is/image/Ulta/2531140?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0';
    }
}

// Budget-based product recommendations
const budgetProducts = {
    drugstore: {
        foundation: ['Maybelline Fit Me', 'L\'Oreal True Match', 'Revlon ColorStay', 'CoverGirl Clean', 'Wet n Wild Photo Focus', 'NYX Professional Makeup Can\'t Stop Won\'t Stop'],
        eyeshadow: ['Wet n Wild Color Icon', 'NYX Professional Makeup', 'Maybelline The Nudes', 'CoverGirl TruNaked', 'ColourPop Super Shock Shadows', 'ELF Bite-Size Eyeshadow'],
        lipstick: ['Maybelline Color Sensational', 'L\'Oreal Color Riche', 'Revlon Super Lustrous', 'NYX Professional Makeup', 'Wet n Wild MegaLast', 'ColourPop Lippie Stix'],
        blush: ['Wet n Wild Color Icon', 'Maybelline Fit Me', 'NYX Professional Makeup', 'CoverGirl Cheekers', 'ELF Bite-Size Face Duo', 'ColourPop Super Shock Cheek'],
        mascara: ['Maybelline Great Lash', 'L\'Oreal Voluminous', 'CoverGirl LashBlast', 'Wet n Wild MegaLength', 'NYX Professional Makeup Doll Eye', 'ELF Lash It Loud'],
        eyeliner: ['NYX Professional Makeup Epic Ink', 'Maybelline Eye Studio', 'L\'Oreal Infallible', 'Wet n Wild H2O Proof', 'ColourPop Creme Gel Liner', 'ELF Expert Liquid Liner'],
        bronzer: ['Physicians Formula Butter Bronzer', 'Wet n Wild Color Icon', 'Maybelline Fit Me', 'CoverGirl Clean', 'NYX Professional Makeup Matte Bronzer', 'ELF Bite-Size Face Duo'],
        highlighter: ['Wet n Wild MegaGlo', 'Maybelline Master Chrome', 'NYX Professional Makeup', 'CoverGirl Clean', 'ColourPop Super Shock Highlighter', 'ELF Baked Highlighter'],
        concealer: ['Maybelline Fit Me', 'L\'Oreal Infallible', 'CoverGirl Clean', 'Wet n Wild Photo Focus', 'NYX Professional Makeup HD', 'ELF 16HR Camo Concealer'],
        settingPowder: ['Coty Airspun', 'Maybelline Fit Me', 'CoverGirl Clean', 'Wet n Wild Photo Focus', 'NYX Professional Makeup HD', 'ELF Halo Glow Setting Powder'],
        primer: ['Maybelline Baby Skin', 'NYX Professional Makeup', 'Wet n Wild Photo Focus', 'CoverGirl Clean', 'ELF Poreless Putty Primer', 'ColourPop Pretty Fresh Primer'],
        settingSpray: ['NYX Professional Makeup', 'Maybelline Lasting Fix', 'CoverGirl Outlast', 'Wet n Wild Photo Focus', 'ELF Stay All Night', 'ColourPop Pretty Fresh Mist'],
        lipBalm: ['Burt\'s Bees', 'ChapStick', 'Carmex', 'EOS', 'Nivea Lip Care', 'Vaseline Lip Therapy'],
        lipScrub: ['ELF Lip Exfoliator', 'Burt\'s Bees Conditioning Lip Scrub', 'ChapStick Lip Scrub', 'Carmex Lip Scrub', 'Wet n Wild Lip Scrub', 'ColourPop Lippie Scrub'],
        eyebrow: ['NYX Professional Makeup', 'Maybelline', 'CoverGirl', 'Wet n Wild', 'ELF Wow Brow', 'ColourPop Brow Boss'],
        eyelash: ['Maybelline', 'L\'Oreal', 'CoverGirl', 'Revlon', 'ELF Lash It Loud', 'Wet n Wild MegaLength'],
        contour: ['NYX Professional Makeup', 'Wet n Wild', 'Maybelline', 'CoverGirl', 'ELF Contour Palette', 'ColourPop Contour Stix'],
        colorCorrector: ['NYX Professional Makeup', 'Maybelline', 'L\'Oreal', 'CoverGirl', 'ELF Color Correcting Stick', 'Wet n Wild Color Icon'],
        lipLiner: ['NYX Professional Makeup', 'Maybelline', 'CoverGirl', 'Wet n Wild', 'ColourPop Lippie Pencil', 'ELF Lip Definer'],
        lipGloss: ['NYX Professional Makeup', 'Maybelline', 'CoverGirl', 'Wet n Wild', 'ColourPop Ultra Glossy Lip', 'ELF Lip Lacquer'],
        faceMask: ['L\'Oreal', 'Garnier', 'Maybelline', 'Neutrogena', 'Freeman Beauty', 'ELF Bubbles Mask'],
        skincare: ['CeraVe', 'Neutrogena', 'Cetaphil', 'Garnier', 'The Ordinary', 'ELF Holy Hydration'],
        tools: ['EcoTools', 'Real Techniques', 'Maybelline', 'CoverGirl', 'ELF Brushes', 'Wet n Wild Brushes'],
        nailPolish: ['Wet n Wild', 'Sally Hansen', 'Revlon', 'Maybelline', 'Sinful Colors', 'ELF Nail Polish'],
        perfume: ['Bath & Body Works', 'Victoria\'s Secret', 'Pink', 'Ariana Grande', 'Britney Spears', 'Paris Hilton'],
        hairCare: ['Herbal Essences', 'Not Your Mother\'s', 'Garnier', 'Pantene', 'Suave', 'Tresemme'],
        bathAndBody: ['Dove', 'Olay', 'Nivea', 'Aveeno', 'Cetaphil', 'Jergens']
    },
    'mid-range': {
        foundation: ['MAC Studio Fix', 'Urban Decay Stay Naked', 'Too Faced Born This Way', 'NARS Natural Radiant', 'Fenty Beauty Pro Filt\'r', 'Rare Beauty Liquid Touch', 'Glossier Perfecting Skin Tint', 'Kosas Air Brow Tinted Treatment Gel', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint', 'Tower 28 SunnyDays SPF 30 Tinted Sunscreen Foundation', 'Milk Makeup Flex Foundation Stick'],
        eyeshadow: ['Urban Decay Naked', 'Too Faced Chocolate Bar', 'Anastasia Beverly Hills', 'Tarte Tartelette', 'Huda Beauty Desert Dusk', 'Natasha Denona Bronze Palette', 'Pat McGrath Labs Mothership V', 'ColourPop Going Coconuts', 'Morphe 35O Nature Glow', 'Juvia\'s Place The Warrior', 'Sydney Grace Enduring Love', 'Give Me Glow Vintage Rose'],
        lipstick: ['MAC', 'Urban Decay Vice', 'Too Faced Melted', 'NARS Audacious', 'Charlotte Tilbury Pillow Talk', 'Fenty Beauty Stunna Lip Paint', 'Rare Beauty Perfect Strokes Matte Lipstick', 'Kosas Weightless Lip Color', 'Glossier Generation G Lipstick', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush'],
        blush: ['NARS', 'Tarte Amazonian Clay', 'Too Faced Love Flush', 'Urban Decay Afterglow', 'Rare Beauty Soft Pinch Liquid Blush', 'Kosas Color & Light Palette', 'Glossier Cloud Paint', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip + Cheek', 'Nudestix Nudies Matte Blush & Bronze'],
        mascara: ['Benefit They\'re Real', 'Urban Decay Perversion', 'Too Faced Better Than Sex', 'Tarte Lights Camera Lashes', 'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara', 'Rare Beauty Perfect Strokes Mascara', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Lash Slick', 'Ilia Limitless Lash Mascara', 'Saie Slip Tint Mascara', 'Tower 28 BeachPlease Mascara', 'Milk Makeup Kush Mascara'],
        eyeliner: ['Urban Decay 24/7', 'Stila Stay All Day', 'Kat Von D Tattoo', 'Too Faced Sketch Marker', 'Fenty Beauty Flypencil Longwear Pencil Eyeliner', 'Rare Beauty Perfect Strokes Matte Liquid Liner', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Pro Tip', 'Ilia Clean Line Liquid Liner', 'Saie Slip Tint Eyeliner', 'Tower 28 BeachPlease Eyeliner', 'Milk Makeup Ubame Mascara'],
        bronzer: ['Benefit Hoola', 'Too Faced Chocolate Soleil', 'Tarte Amazonian Clay', 'Urban Decay Beached', 'Fenty Beauty Cheeks Out Freestyle Cream Bronzer', 'Rare Beauty Warm Wishes Effortless Bronzer', 'Kosas Color & Light Palette', 'Glossier Cloud Paint', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip + Cheek'],
        highlighter: ['Becca Shimmering Skin Perfector', 'Anastasia Beverly Hills Glow Kit', 'Too Faced Candlelight', 'Tarte Amazonian Clay', 'Fenty Beauty Killawatt Freestyle Highlighter', 'Rare Beauty Positive Light Liquid Luminizer', 'Kosas Color & Light Palette', 'Glossier Haloscope', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip + Cheek'],
        concealer: ['Tarte Shape Tape', 'NARS Radiant Creamy', 'Urban Decay Naked Skin', 'Too Faced Born This Way', 'Fenty Beauty Pro Filt\'r Instant Retouch Concealer', 'Rare Beauty Liquid Touch Brightening Concealer', 'Kosas Revealer Skin Improving Foundation', 'Glossier Stretch Concealer', 'Ilia True Skin Serum Concealer', 'Saie Slip Tint Concealer', 'Tower 28 BeachPlease Concealer', 'Milk Makeup Flex Concealer'],
        settingPowder: ['Laura Mercier Translucent', 'Urban Decay Naked Skin', 'Too Faced Peach Perfect', 'Tarte Smooth Operator', 'Fenty Beauty Pro Filt\'r Instant Retouch Setting Powder', 'Rare Beauty Always An Optimist Soft Radiance Setting Powder', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Wowder', 'Ilia Soft Focus Finishing Powder', 'Saie Slip Tint Setting Powder', 'Tower 28 BeachPlease Setting Powder', 'Milk Makeup Flex Setting Powder'],
        primer: ['Smashbox Photo Finish', 'Urban Decay Optical Illusion', 'Too Faced Hangover', 'Tarte Clean Slate', 'Fenty Beauty Pro Filt\'r Amplifying Eye Primer', 'Rare Beauty Always An Optimist 4-in-1 Prime & Set Mist', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Futuredew', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint Primer', 'Tower 28 BeachPlease Primer', 'Milk Makeup Flex Primer'],
        settingSpray: ['Urban Decay All Nighter', 'Too Faced Hangover', 'Tarte Rainforest of the Sea', 'Benefit The POREfessional', 'Fenty Beauty Pro Filt\'r Amplifying Eye Primer', 'Rare Beauty Always An Optimist 4-in-1 Prime & Set Mist', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Soothing Face Mist', 'Ilia Super Serum Skin Tint SPF 40', 'Saie Slip Tint Setting Spray', 'Tower 28 BeachPlease Setting Spray', 'Milk Makeup Flex Setting Spray'],
        lipBalm: ['Fresh Sugar Lip Treatment', 'Clinique Chubby Stick', 'Burt\'s Bees Tinted', 'Nivea Lip Care', 'Fenty Beauty Pro Kiss\'r Luscious Lip Balm', 'Rare Beauty With Gratitude Dewy Lip Balm', 'Kosas Weightless Lip Color', 'Glossier Balm Dotcom', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
        lipScrub: ['Lush Lip Scrub', 'Fresh Sugar Lip Polish', 'Clinique Lip Scrub', 'Urban Decay Lip Scrub', 'Fenty Beauty Pro Kiss\'r Luscious Lip Balm', 'Rare Beauty With Gratitude Dewy Lip Balm', 'Kosas Weightless Lip Color', 'Glossier Balm Dotcom', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
        eyebrow: ['Anastasia Beverly Hills', 'Benefit', 'Urban Decay', 'Too Faced', 'Fenty Beauty Brow MVP Ultra Fine Brow Pencil & Styler', 'Rare Beauty Brow Harmony Shape & Fill Duo', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Boy Brow', 'Ilia Essential Brow Pencil', 'Saie Slip Tint Brow Gel', 'Tower 28 BeachPlease Brow Gel', 'Milk Makeup Kush Fiber Brow Gel'],
        eyelash: ['Benefit', 'Urban Decay', 'Too Faced', 'Tarte', 'Fenty Beauty Full Frontal Volume, Lift & Curl Mascara', 'Rare Beauty Perfect Strokes Mascara', 'Kosas Air Brow Tinted Treatment Gel', 'Glossier Lash Slick', 'Ilia Limitless Lash Mascara', 'Saie Slip Tint Mascara', 'Tower 28 BeachPlease Mascara', 'Milk Makeup Kush Mascara'],
        contour: ['Anastasia Beverly Hills', 'Kat Von D', 'Urban Decay', 'Too Faced', 'Fenty Beauty Cheeks Out Freestyle Cream Bronzer', 'Rare Beauty Warm Wishes Effortless Bronzer', 'Kosas Color & Light Palette', 'Glossier Cloud Paint', 'Ilia Color Haze Multi-Use Pigment', 'Saie Dew Blush Liquid Cheek Blush', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip + Cheek'],
        colorCorrector: ['Urban Decay', 'Too Faced', 'Tarte', 'NARS', 'Fenty Beauty Pro Filt\'r Instant Retouch Concealer', 'Rare Beauty Liquid Touch Brightening Concealer', 'Kosas Revealer Skin Improving Foundation', 'Glossier Stretch Concealer', 'Ilia True Skin Serum Concealer', 'Saie Slip Tint Concealer', 'Tower 28 BeachPlease Concealer', 'Milk Makeup Flex Concealer'],
        lipLiner: ['MAC', 'Urban Decay', 'Too Faced', 'NARS', 'Charlotte Tilbury Lip Cheat', 'Fenty Beauty Pro Kiss\'r Luscious Lip Balm', 'Rare Beauty With Gratitude Dewy Lip Balm', 'Kosas Weightless Lip Color', 'Glossier Balm Dotcom', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush'],
        lipGloss: ['Fenty Beauty', 'Urban Decay', 'Too Faced', 'NARS', 'Fenty Beauty Gloss Bomb', 'Rare Beauty With Gratitude Dewy Lip Balm', 'Kosas Weightless Lip Color', 'Glossier Balm Dotcom', 'Ilia Color Block High Impact Lipstick', 'Saie Slip Tint Lip Balm', 'Tower 28 BeachPlease Lip + Cheek Cream Blush', 'Milk Makeup Lip Color'],
        faceMask: ['Fresh', 'GlamGlow', 'Origins', 'Clinique', 'Fenty Beauty Pro Filt\'r Instant Retouch Concealer', 'Rare Beauty Liquid Touch Brightening Concealer', 'Kosas Revealer Skin Improving Foundation', 'Glossier Stretch Concealer', 'Ilia True Skin Serum Concealer', 'Saie Slip Tint Concealer', 'Tower 28 BeachPlease Concealer', 'Milk Makeup Flex Concealer'],
        skincare: ['Clinique', 'Origins', 'Fresh', 'Kiehl\'s', 'The Ordinary', 'Paula\'s Choice', 'Drunk Elephant', 'Tatcha', 'Fresh', 'Kiehl\'s', 'Origins', 'Clinique'],
        tools: ['Real Techniques', 'Morphe', 'Sigma', 'Urban Decay', 'Fenty Beauty', 'Rare Beauty', 'Kosas', 'Glossier', 'Ilia', 'Saie', 'Tower 28', 'Milk Makeup'],
        nailPolish: ['OPI', 'Essie', 'Butter London', 'Zoya', 'Fenty Beauty', 'Rare Beauty', 'Kosas', 'Glossier', 'Ilia', 'Saie', 'Tower 28', 'Milk Makeup'],
        perfume: ['Marc Jacobs', 'Viktor&Rolf', 'Jo Malone London', 'Chanel', 'Fenty Beauty', 'Rare Beauty', 'Kosas', 'Glossier', 'Ilia', 'Saie', 'Tower 28', 'Milk Makeup'],
        hairCare: ['Olaplex', 'Briogeo', 'Not Your Mother\'s', 'Living Proof', 'Fenty Beauty', 'Rare Beauty', 'Kosas', 'Glossier', 'Ilia', 'Saie', 'Tower 28', 'Milk Makeup'],
        bathAndBody: ['Fresh', 'Kiehl\'s', 'Origins', 'Clinique', 'Fenty Beauty', 'Rare Beauty', 'Kosas', 'Glossier', 'Ilia', 'Saie', 'Tower 28', 'Milk Makeup']
    },
    'high-end': {
        foundation: ['Estée Lauder Double Wear', 'Dior Forever', 'Chanel Ultra Le Teint', 'Yves Saint Laurent All Hours'],
        eyeshadow: ['Pat McGrath Labs', 'Natasha Denona', 'Viseart', 'Charlotte Tilbury'],
        lipstick: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Yves Saint Laurent'],
        blush: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Dior'],
        mascara: ['Dior Diorshow', 'Chanel Le Volume', 'Yves Saint Laurent Volume Effet Faux Cils', 'Tom Ford'],
        eyeliner: ['Dior Diorshow', 'Chanel Stylo Yeux', 'Yves Saint Laurent Dessin Du Regard', 'Tom Ford'],
        bronzer: ['Dior Diorskin', 'Chanel Soleil Tan', 'Yves Saint Laurent Terracotta', 'Tom Ford'],
        highlighter: ['Dior Diorskin', 'Chanel Poudre Signée', 'Yves Saint Laurent Touche Éclat', 'Tom Ford'],
        concealer: ['Dior Diorskin', 'Chanel Le Correcteur', 'Yves Saint Laurent Touche Éclat', 'Tom Ford'],
        settingPowder: ['Dior Diorskin', 'Chanel Poudre Universelle', 'Yves Saint Laurent Poudre Compacte', 'Tom Ford'],
        primer: ['Dior Diorskin', 'Chanel Le Blanc', 'Yves Saint Laurent Touche Éclat Blur', 'Tom Ford'],
        settingSpray: ['Dior Fix It', 'Chanel Le Blanc', 'Yves Saint Laurent All Hours', 'Tom Ford'],
        lipBalm: ['Dior Addict Lip Glow', 'Chanel Rouge Coco Baume', 'Yves Saint Laurent Volupté Tint-in-Balm', 'Tom Ford Lip Color'],
        lipScrub: ['Dior Lip Sugar Scrub', 'Chanel Lip Scrub', 'Yves Saint Laurent Lip Scrub', 'Tom Ford Lip Scrub'],
        eyebrow: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        eyelash: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        contour: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        colorCorrector: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        lipLiner: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        lipGloss: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        faceMask: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        skincare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        tools: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        nailPolish: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        perfume: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford'],
        hairCare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        bathAndBody: ['Dior', 'Chanel', 'Yves Saint Laurent', 'Tom Ford']
    },
    luxury: {
        foundation: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        eyeshadow: ['Pat McGrath Labs', 'Natasha Denona', 'Viseart', 'Charlotte Tilbury'],
        lipstick: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Yves Saint Laurent'],
        blush: ['Pat McGrath Labs', 'Charlotte Tilbury', 'Tom Ford', 'Dior'],
        mascara: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        eyeliner: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        bronzer: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        highlighter: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        concealer: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        settingPowder: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        primer: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        settingSpray: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        lipBalm: ['La Mer Lip Balm', 'La Prairie Lip Balm', 'Cle de Peau Lip Balm', 'Sisley Lip Balm'],
        lipScrub: ['La Mer Lip Scrub', 'La Prairie Lip Scrub', 'Cle de Peau Lip Scrub', 'Sisley Lip Scrub'],
        eyebrow: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        eyelash: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        contour: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        colorCorrector: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        lipLiner: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        lipGloss: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        faceMask: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        skincare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        tools: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        nailPolish: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        perfume: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        hairCare: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley'],
        bathAndBody: ['La Mer', 'La Prairie', 'Cle de Peau', 'Sisley']
    }
};

// Occasion-based recommendations
const occasionTips = {
    everyday: {
        foundation: 'Light to medium coverage for a natural look',
        eyeshadow: 'Neutral tones and subtle shimmer',
        lipstick: 'MLBB (My Lips But Better) shades',
        blush: 'Natural flush colors',
        mascara: 'Natural-looking, lengthening formula',
        eyeliner: 'Subtle brown or soft black',
        bronzer: 'Light, natural contour',
        highlighter: 'Subtle glow, not too shimmery',
        concealer: 'Light coverage for under eyes',
        settingPowder: 'Translucent powder for shine control',
        primer: 'Hydrating or mattifying based on skin type',
        settingSpray: 'Light hold for natural finish',
        lipBalm: 'Hydrating, natural finish',
        lipScrub: 'Gentle exfoliation 2-3 times per week',
        eyebrow: 'Natural, defined brows',
        eyelash: 'Natural curl and definition',
        contour: 'Subtle definition',
        colorCorrector: 'Target specific concerns',
        lipLiner: 'Natural lip definition',
        lipGloss: 'Hydrating shine',
        faceMask: 'Weekly treatment',
        skincare: 'Daily routine essential',
        tools: 'Quality brushes for application',
        nailPolish: 'Neutral, professional colors',
        perfume: 'Light, fresh scent',
        hairCare: 'Gentle, nourishing products',
        bathAndBody: 'Gentle, hydrating body care'
    },
    work: {
        foundation: 'Medium coverage with a matte finish',
        eyeshadow: 'Professional neutrals and subtle definition',
        lipstick: 'Professional pinks and nudes',
        blush: 'Subtle, natural-looking blush',
        mascara: 'Defining, not too dramatic',
        eyeliner: 'Clean, precise lines',
        bronzer: 'Subtle contour for definition',
        highlighter: 'Minimal, professional glow',
        concealer: 'Full coverage for blemishes',
        settingPowder: 'Matte finish for long wear',
        primer: 'Pore-filling and long-wear',
        settingSpray: 'Long-lasting, transfer-proof',
        lipBalm: 'Tinted balm for subtle color',
        lipScrub: 'Gentle exfoliation before lipstick',
        eyebrow: 'Professional, groomed brows',
        eyelash: 'Defined, not dramatic',
        contour: 'Subtle professional contour',
        colorCorrector: 'Conceal imperfections',
        lipLiner: 'Clean, precise lines',
        lipGloss: 'Professional shine',
        faceMask: 'Weekly maintenance',
        skincare: 'Daily professional routine',
        tools: 'Professional application tools',
        nailPolish: 'Neutral, office-appropriate',
        perfume: 'Subtle, professional scent',
        hairCare: 'Professional styling products',
        bathAndBody: 'Professional, long-lasting body care'
    },
    special: {
        foundation: 'Full coverage with a radiant finish',
        eyeshadow: 'Sophisticated neutrals with a pop of color',
        lipstick: 'Classic reds and sophisticated nudes',
        blush: 'Buildable, long-lasting formulas',
        mascara: 'Volumizing and dramatic',
        eyeliner: 'Precise, long-wearing formulas',
        bronzer: 'Warm, buildable contour',
        highlighter: 'Intense glow and shimmer',
        concealer: 'Full coverage for flawless finish',
        settingPowder: 'Radiant finish with staying power',
        primer: 'Illuminating and smoothing',
        settingSpray: 'Long-lasting with dewy finish',
        lipBalm: 'Luxurious, long-lasting hydration',
        lipScrub: 'Intensive exfoliation for smooth lips',
        eyebrow: 'Sophisticated, defined brows',
        eyelash: 'Elegant curl and volume',
        contour: 'Sophisticated definition',
        colorCorrector: 'Flawless base preparation',
        lipLiner: 'Precise, long-wearing lines',
        lipGloss: 'Luxurious shine',
        faceMask: 'Pre-event treatment',
        skincare: 'Luxurious pre-event routine',
        tools: 'Professional application tools',
        nailPolish: 'Sophisticated, elegant colors',
        perfume: 'Elegant, sophisticated scent',
        hairCare: 'Luxurious styling products',
        bathAndBody: 'Luxurious, indulgent body care'
    },
    party: {
        foundation: 'Full coverage with a matte or dewy finish',
        eyeshadow: 'Bold colors, metallics, and glitter',
        lipstick: 'Bold reds, berries, and metallics',
        blush: 'Intense, pigmented colors',
        mascara: 'Maximum volume and drama',
        eyeliner: 'Bold, creative looks',
        bronzer: 'Intense contour and warmth',
        highlighter: 'Intense shimmer and glow',
        concealer: 'Full coverage for photos',
        settingPowder: 'Matte or shimmer based on look',
        primer: 'Long-wear and smoothing',
        settingSpray: 'Maximum hold and transfer-proof',
        lipBalm: 'Long-wearing, non-sticky formula',
        lipScrub: 'Deep exfoliation for bold lipstick',
        eyebrow: 'Bold, dramatic brows',
        eyelash: 'Maximum drama and volume',
        contour: 'Intense, dramatic contour',
        colorCorrector: 'Full coverage correction',
        lipLiner: 'Bold, dramatic lines',
        lipGloss: 'Intense shine and sparkle',
        faceMask: 'Pre-party treatment',
        skincare: 'Pre-party prep routine',
        tools: 'Professional party tools',
        nailPolish: 'Bold, party-ready colors',
        perfume: 'Bold, attention-grabbing scent',
        hairCare: 'Party-ready styling products',
        bathAndBody: 'Bold, long-lasting body care'
    }
};

// Get form elements
const form = document.getElementById('preferencesForm');
const recommendationsDiv = document.getElementById('recommendations');
const recommendationsContent = document.getElementById('recommendationsContent');

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        skinType: document.getElementById('skinType').value,
        skinTone: document.getElementById('skinTone').value,
        undertone: document.getElementById('undertone').value,
        eyeColor: document.getElementById('eyeColor').value,
        hairColor: document.getElementById('hairColor').value,
        budget: document.getElementById('budget').value,
        occasion: document.getElementById('occasion').value,
        allergies: document.getElementById('allergies').value
    };
    
    // Generate recommendations
    const recommendations = generateRecommendations(formData);
    
    // Store recommendations globally for filtering
    allRecommendations = recommendations;
    
    // Display recommendations
    displayRecommendations(recommendations, formData);
    
    // Show recommendations section
    recommendationsDiv.classList.remove('hidden');
    
    // Show filter controls after recommendations are generated
    document.getElementById('filterControls').style.display = 'block';
    
    // Reset filter states
    currentFilter = 'all';
    currentSearch = '';
    currentSort = 'category';
    
    // Reset filter UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    if (document.getElementById('searchInput')) {
        document.getElementById('searchInput').value = '';
    }
    if (document.getElementById('sortSelect')) {
        document.getElementById('sortSelect').value = 'category';
    }
    
    // Scroll to recommendations
    recommendationsDiv.scrollIntoView({ behavior: 'smooth' });
});

function generateRecommendations(data) {
    const recommendations = {
        foundation: [],
        eyeshadow: [],
        lipstick: [],
        blush: [],
        mascara: [],
        eyeliner: [],
        bronzer: [],
        highlighter: [],
        concealer: [],
        settingPowder: [],
        primer: [],
        settingSpray: [],
        lipBalm: [],
        lipScrub: [],
        eyebrow: [],
        eyelash: [],
        contour: [],
        colorCorrector: [],
        lipLiner: [],
        lipGloss: [],
        faceMask: [],
        skincare: [],
        tools: [],
        nailPolish: [],
        perfume: [],
        hairCare: [],
        bathAndBody: [],
        tips: {}
    };
    
    // Foundation recommendations
    if (makeupDatabase.foundation[data.skinType] && 
        makeupDatabase.foundation[data.skinType][data.skinTone] && 
        makeupDatabase.foundation[data.skinType][data.skinTone][data.undertone]) {
        recommendations.foundation = makeupDatabase.foundation[data.skinType][data.skinTone][data.undertone];
    }
    
    // Eyeshadow recommendations
    if (makeupDatabase.eyeshadow[data.eyeColor]) {
        recommendations.eyeshadow = makeupDatabase.eyeshadow[data.eyeColor];
    }
    
    // Lipstick recommendations
    if (makeupDatabase.lipstick[data.skinTone] && makeupDatabase.lipstick[data.skinTone][data.undertone]) {
        recommendations.lipstick = makeupDatabase.lipstick[data.skinTone][data.undertone];
    }
    
    // Budget-based recommendations for all categories
    if (budgetProducts[data.budget]) {
        recommendations.foundation = budgetProducts[data.budget].foundation;
        recommendations.eyeshadow = budgetProducts[data.budget].eyeshadow;
        recommendations.lipstick = budgetProducts[data.budget].lipstick;
        recommendations.blush = budgetProducts[data.budget].blush;
        recommendations.mascara = budgetProducts[data.budget].mascara;
        recommendations.eyeliner = budgetProducts[data.budget].eyeliner;
        recommendations.bronzer = budgetProducts[data.budget].bronzer;
        recommendations.highlighter = budgetProducts[data.budget].highlighter;
        recommendations.concealer = budgetProducts[data.budget].concealer;
        recommendations.settingPowder = budgetProducts[data.budget].settingPowder;
        recommendations.primer = budgetProducts[data.budget].primer;
        recommendations.settingSpray = budgetProducts[data.budget].settingSpray;
        recommendations.lipBalm = budgetProducts[data.budget].lipBalm;
        recommendations.lipScrub = budgetProducts[data.budget].lipScrub;
        recommendations.eyebrow = budgetProducts[data.budget].eyebrow;
        recommendations.eyelash = budgetProducts[data.budget].eyelash;
        recommendations.contour = budgetProducts[data.budget].contour;
        recommendations.colorCorrector = budgetProducts[data.budget].colorCorrector;
        recommendations.lipLiner = budgetProducts[data.budget].lipLiner;
        recommendations.lipGloss = budgetProducts[data.budget].lipGloss;
        recommendations.faceMask = budgetProducts[data.budget].faceMask;
        recommendations.skincare = budgetProducts[data.budget].skincare;
        recommendations.tools = budgetProducts[data.budget].tools;
        recommendations.nailPolish = budgetProducts[data.budget].nailPolish;
        recommendations.perfume = budgetProducts[data.budget].perfume;
        recommendations.hairCare = budgetProducts[data.budget].hairCare;
        recommendations.bathAndBody = budgetProducts[data.budget].bathAndBody;
    }
    
    // Occasion tips
    if (occasionTips[data.occasion]) {
        recommendations.tips = occasionTips[data.occasion];
    }
    
    return recommendations;
}

function displayRecommendations(recommendations, data) {
    let html = `
        <div class="success-message">
            <strong>Perfect! Here are your personalized makeup recommendations based on your profile:</strong>
        </div>
    `;
    
    // Foundation recommendations
    if (recommendations.foundation.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Foundation Recommendations</h3>
                <p>Based on your ${data.skinType} skin, ${data.skinTone} tone, and ${data.undertone} undertone:</p>
                <div class="product-list">
        `;
        
        recommendations.foundation.forEach(product => {
            const productData = getProductData(product);
            const reviews = getProductReviews(product);
            const avgRating = getAverageRating(reviews);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531134?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for ${data.skinType} skin with ${data.undertone} undertones</div>
                        <div class="product-price">Budget: ${data.budget}</div>
                        <div class="product-reviews">
                            <div class="rating-display">
                                ${generateStarRating(avgRating)}
                                <span class="review-count">(${reviews.length} reviews)</span>
                            </div>
                            <button class="write-review-btn" onclick="openReviewModal('${product}', 'foundation', '${productData.image}')">
                                <i class="fas fa-star"></i> Write Review
                            </button>
                        </div>
                        <div class="product-actions">
                            <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                        </div>
                        ${reviews.length > 0 ? `<div class="recent-reviews">${generateRecentReviews(reviews, 2)}</div>` : ''}
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyeshadow recommendations
    if (recommendations.eyeshadow.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyeshadow Recommendations</h3>
                <p>Based on your ${data.eyeColor} eyes:</p>
                <div class="product-list">
        `;
        
        recommendations.eyeshadow.forEach(shade => {
            const productData = getProductData(shade);
            const reviews = getProductReviews(shade);
            const avgRating = getAverageRating(reviews);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${shade}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531135?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${shade}</div>
                        <div class="product-description">Will make your ${data.eyeColor} eyes pop!</div>
                        <div class="product-reviews">
                            <div class="rating-display">
                                ${generateStarRating(avgRating)}
                                <span class="review-count">(${reviews.length} reviews)</span>
                            </div>
                            <button class="write-review-btn" onclick="openReviewModal('${shade}', 'eyeshadow', '${productData.image}')">
                                <i class="fas fa-star"></i> Write Review
                            </button>
                        </div>
                        <div class="product-actions">
                            <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                        </div>
                        ${reviews.length > 0 ? `<div class="recent-reviews">${generateRecentReviews(reviews, 2)}</div>` : ''}
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lipstick recommendations
    if (recommendations.lipstick.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lipstick Recommendations</h3>
                <p>Based on your ${data.skinTone} skin with ${data.undertone} undertones:</p>
                <div class="product-list">
        `;
        
        recommendations.lipstick.forEach(shade => {
            const productData = getProductData(shade);
            const reviews = getProductReviews(shade);
            const avgRating = getAverageRating(reviews);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${shade}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531136?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${shade}</div>
                        <div class="product-description">Complements your skin tone perfectly</div>
                        <div class="product-reviews">
                            <div class="rating-display">
                                ${generateStarRating(avgRating)}
                                <span class="review-count">(${reviews.length} reviews)</span>
                            </div>
                            <button class="write-review-btn" onclick="openReviewModal('${shade}', 'lipstick', '${productData.image}')">
                                <i class="fas fa-star"></i> Write Review
                            </button>
                        </div>
                        <div class="product-actions">
                            <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                        </div>
                        ${reviews.length > 0 ? `<div class="recent-reviews">${generateRecentReviews(reviews, 2)}</div>` : ''}
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Blush recommendations
    if (recommendations.blush.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Blush Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.blush.forEach(product => {
            const productData = getProductData(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531138?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Great quality within your budget range</div>
                        <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Mascara recommendations
    if (recommendations.mascara.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Mascara Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.mascara.forEach(product => {
            const productData = getProductData(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531137?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for enhancing your ${data.eyeColor} eyes</div>
                        <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyeliner recommendations
    if (recommendations.eyeliner.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyeliner Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.eyeliner.forEach(product => {
            const productData = getProductData(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531135?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Great for defining your ${data.eyeColor} eyes</div>
                        <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Bronzer recommendations
    if (recommendations.bronzer.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Bronzer Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.bronzer.forEach(product => {
            const productData = getProductData(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531138?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for warming up your ${data.skinTone} skin</div>
                        <a href="${productData.link}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Highlighter recommendations
    if (recommendations.highlighter.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Highlighter Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.highlighter.forEach(product => {
            const productData = getProductData(product);
            html += `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${productData.image}" alt="${product}" onerror="this.src='https://images.ulta.com/is/image/Ulta/2531138?fmt=jpeg&qlt=90&wid=400&hei=400&bgc=ffffff&resMode=sharp2&op_usm=1,1,5,0'">
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product}</div>
                        <div class="product-description">Perfect for adding glow to your ${data.skinTone} skin</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Concealer recommendations
    if (recommendations.concealer.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Concealer Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.concealer.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for covering imperfections on ${data.skinType} skin</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Setting Powder recommendations
    if (recommendations.settingPowder.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Setting Powder Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.settingPowder.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for setting makeup on ${data.skinType} skin</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Primer recommendations
    if (recommendations.primer.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Primer Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.primer.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for prepping ${data.skinType} skin</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Setting Spray recommendations
    if (recommendations.settingSpray.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Setting Spray Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.settingSpray.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for locking in your makeup</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Balm recommendations
    if (recommendations.lipBalm.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Balm Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipBalm.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for keeping your lips hydrated</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Scrub recommendations
    if (recommendations.lipScrub.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Scrub Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipScrub.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for exfoliating and smoothing lips</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyebrow recommendations
    if (recommendations.eyebrow.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyebrow Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.eyebrow.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for defining and shaping your brows</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Eyelash recommendations
    if (recommendations.eyelash.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Eyelash Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.eyelash.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for enhancing your ${data.eyeColor} eyes</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Contour recommendations
    if (recommendations.contour.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Contour Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.contour.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for defining your ${data.skinTone} skin</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Color Corrector recommendations
    if (recommendations.colorCorrector.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Color Corrector Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.colorCorrector.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for correcting specific skin concerns</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Liner recommendations
    if (recommendations.lipLiner.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Liner Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipLiner.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for defining and shaping your lips</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Lip Gloss recommendations
    if (recommendations.lipGloss.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Lip Gloss Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.lipGloss.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for adding shine and hydration</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Face Mask recommendations
    if (recommendations.faceMask.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Face Mask Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.faceMask.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Great for treating your ${data.skinType} skin</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Skincare recommendations
    if (recommendations.skincare.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Skincare Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.skincare.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Essential for your ${data.skinType} skin routine</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Tools recommendations
    if (recommendations.tools.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Makeup Tools Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.tools.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Essential tools for perfect application</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Nail Polish recommendations
    if (recommendations.nailPolish.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Nail Polish Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.nailPolish.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for completing your look</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Perfume recommendations
    if (recommendations.perfume.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Perfume Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.perfume.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect finishing touch for your look</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Hair Care recommendations
    if (recommendations.hairCare.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Hair Care Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.hairCare.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Essential for healthy, beautiful hair</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Bath & Body recommendations
    if (recommendations.bathAndBody.length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Bath & Body Product Recommendations</h3>
                <p>Based on your ${data.budget} budget:</p>
                <div class="product-list">
        `;
        
        recommendations.bathAndBody.forEach(product => {
            const purchaseLink = getPurchaseLink(product);
            html += `
                <div class="product-item">
                    <div class="product-name">${product}</div>
                    <div class="product-description">Perfect for pampering your body and skin</div>
                    <div class="product-price">Budget: ${data.budget}</div>
                    <a href="${purchaseLink}" target="_blank" class="purchase-link">🛒 Shop Now</a>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Occasion tips
    if (recommendations.tips && Object.keys(recommendations.tips).length > 0) {
        html += `
            <div class="recommendation-item">
                <h3>Tips for ${data.occasion.charAt(0).toUpperCase() + data.occasion.slice(1)} Makeup</h3>
                <div class="product-list">
        `;
        
        Object.entries(recommendations.tips).forEach(([category, tip]) => {
            html += `
                <div class="product-item">
                    <div class="product-name">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
                    <div class="product-description">${tip}</div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    }
    
    // Allergy considerations
    if (data.allergies && data.allergies.trim() !== '') {
        html += `
            <div class="recommendation-item">
                <h3>⚠️ Allergy Considerations</h3>
                <p>Based on your allergies/sensitivities: ${data.allergies}</p>
                <p><strong>Always patch test new products and check ingredient lists carefully!</strong></p>
            </div>
        `;
    }
    
    recommendationsContent.innerHTML = html;
}

// Global variables for filtering
let allRecommendations = [];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'category';

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add focus effects to form elements
    const formElements = document.querySelectorAll('select, textarea');
    
    formElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Setup filter functionality
    setupFilters();
});

// Filter functionality
function setupFilters() {
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-category');
            applyFilters();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase();
            applyFilters();
        });
    }
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            applyFilters();
        });
    }
}

function applyFilters() {
    if (!allRecommendations || Object.keys(allRecommendations).length === 0) return;
    
    let filteredRecommendations = {};
    
    // Apply category filter
    Object.keys(allRecommendations).forEach(category => {
        if (currentFilter === 'all' || matchesCategoryFilter(category, currentFilter)) {
            filteredRecommendations[category] = allRecommendations[category];
        }
    });
    
    // Apply search filter
    if (currentSearch) {
        Object.keys(filteredRecommendations).forEach(category => {
            filteredRecommendations[category] = filteredRecommendations[category].filter(product => 
                product.toLowerCase().includes(currentSearch)
            );
        });
    }
    
    // Remove empty categories
    Object.keys(filteredRecommendations).forEach(category => {
        if (filteredRecommendations[category].length === 0) {
            delete filteredRecommendations[category];
        }
    });
    
    // Apply sorting
    const sortedRecommendations = sortRecommendations(filteredRecommendations);
    
    // Re-display with filtered results
    const formData = {
        skinType: document.getElementById('skinType').value,
        skinTone: document.getElementById('skinTone').value,
        undertone: document.getElementById('undertone').value,
        eyeColor: document.getElementById('eyeColor').value,
        hairColor: document.getElementById('hairColor').value,
        budget: document.getElementById('budget').value,
        occasion: document.getElementById('occasion').value,
        allergies: document.getElementById('allergies').value
    };
    
    displayRecommendations(sortedRecommendations, formData);
}

function matchesCategoryFilter(category, filter) {
    const categoryMap = {
        'makeup': ['foundation', 'concealer', 'primer', 'settingPowder', 'settingSpray', 'eyeshadow', 'eyeliner', 'mascara', 'eyebrow', 'eyelash', 'blush', 'bronzer', 'highlighter', 'contour', 'colorCorrector', 'lipstick', 'lipLiner', 'lipGloss', 'lipBalm', 'lipScrub'],
        'skincare': ['skincare', 'faceMask'],
        'body': ['bathAndBody'],
        'fragrance': ['perfume'],
        'tools': ['tools', 'nailPolish']
    };
    
    return categoryMap[filter] && categoryMap[filter].includes(category);
}

function sortRecommendations(recommendations) {
    const sorted = {};
    const categories = Object.keys(recommendations);
    
    switch (currentSort) {
        case 'name':
            categories.sort();
            break;
        case 'price-low':
            categories.sort((a, b) => getCategoryPrice(a) - getCategoryPrice(b));
            break;
        case 'price-high':
            categories.sort((a, b) => getCategoryPrice(b) - getCategoryPrice(a));
            break;
        default: // category
            categories.sort();
    }
    
    categories.forEach(category => {
        sorted[category] = recommendations[category];
    });
    
    return sorted;
}

function getCategoryPrice(category) {
    const priceMap = {
        'foundation': 1, 'concealer': 1, 'primer': 1, 'settingPowder': 1, 'settingSpray': 1,
        'eyeshadow': 2, 'eyeliner': 2, 'mascara': 2, 'eyebrow': 2, 'eyelash': 2,
        'blush': 3, 'bronzer': 3, 'highlighter': 3, 'contour': 3, 'colorCorrector': 3,
        'lipstick': 4, 'lipLiner': 4, 'lipGloss': 4, 'lipBalm': 4, 'lipScrub': 4,
        'skincare': 5, 'faceMask': 5, 'tools': 6, 'nailPolish': 6, 'perfume': 7, 'bathAndBody': 8
    };
    return priceMap[category] || 0;
}

// Review System
let productReviews = JSON.parse(localStorage.getItem('beautaReviews')) || {};

// Quality Rating System
let qualityRatings = JSON.parse(localStorage.getItem('beautaQualityRatings')) || [];
let hasRatedQuality = localStorage.getItem('beautaHasRatedQuality') === 'true';

function getProductReviews(productName) {
    return productReviews[productName] || [];
}

function getAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round((total / reviews.length) * 10) / 10;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star filled"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt filled"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function generateRecentReviews(reviews, count = 2) {
    const recentReviews = reviews.slice(0, count);
    return recentReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-rating">${generateStarRating(review.rating)}</div>
                <div class="review-author">${review.reviewerName || 'Anonymous'}</div>
                <div class="review-date">${new Date(review.date).toLocaleDateString()}</div>
            </div>
            <div class="review-title">${review.title}</div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');
}

function openReviewModal(productName, category, imageUrl) {
    const modal = document.getElementById('reviewModal');
    const productImage = document.getElementById('reviewProductImage');
    const productNameEl = document.getElementById('reviewProductName');
    const productCategory = document.getElementById('reviewProductCategory');
    
    productImage.src = imageUrl;
    productNameEl.textContent = productName;
    productCategory.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    
    modal.style.display = 'flex';
    modal.dataset.productName = productName;
    
    // Reset form
    document.getElementById('reviewForm').reset();
    document.querySelectorAll('.star-rating input').forEach(input => input.checked = false);
}

function closeReviewModal() {
    document.getElementById('reviewModal').style.display = 'none';
}

function submitReview(event) {
    event.preventDefault();
    
    const productName = document.getElementById('reviewModal').dataset.productName;
    const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value);
    const title = document.getElementById('reviewTitle').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    const reviewerName = document.getElementById('reviewerName').value.trim();
    
    if (!rating || !title || !text) {
        alert('Please fill in all required fields and select a rating.');
        return;
    }
    
    const review = {
        rating,
        title,
        text,
        reviewerName: reviewerName || 'Anonymous',
        date: new Date().toISOString()
    };
    
    if (!productReviews[productName]) {
        productReviews[productName] = [];
    }
    productReviews[productName].unshift(review);
    
    // Save to localStorage
    localStorage.setItem('beautaReviews', JSON.stringify(productReviews));
    
    // Close modal
    closeReviewModal();
    
    // Refresh recommendations to show new review
    const recommendationsSection = document.getElementById('recommendations');
    if (recommendationsSection.innerHTML.includes(productName)) {
        // Trigger a refresh of the recommendations
        const form = document.getElementById('preferencesForm');
        if (form) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const recommendations = generateRecommendations(data);
            displayRecommendations(recommendations, data);
        }
    }
    
    // Show success message
    showNotification('Review submitted successfully!', 'success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Quality Rating Functions
function openQualityRatingModal() {
    const modal = document.getElementById('qualityRatingModal');
    modal.style.display = 'flex';
    
    // Reset form
    document.getElementById('qualityRatingForm').reset();
    document.querySelectorAll('.quality-rating input').forEach(input => input.checked = false);
    document.querySelectorAll('.recommendation-option input').forEach(input => input.checked = false);
}

function closeQualityRatingModal() {
    document.getElementById('qualityRatingModal').style.display = 'none';
}

function submitQualityRating(event) {
    event.preventDefault();
    
    const overallQuality = parseInt(document.querySelector('input[name="overallQuality"]:checked')?.value);
    const productRelevance = parseInt(document.querySelector('input[name="productRelevance"]:checked')?.value);
    const budgetFit = parseInt(document.querySelector('input[name="budgetFit"]:checked')?.value);
    const recommendToOthers = document.querySelector('input[name="recommendToOthers"]:checked')?.value;
    const feedback = document.getElementById('qualityFeedback').value.trim();
    
    if (!overallQuality || !productRelevance || !budgetFit || !recommendToOthers) {
        alert('Please complete all rating categories before submitting.');
        return;
    }
    
    const qualityRating = {
        overallQuality,
        productRelevance,
        budgetFit,
        recommendToOthers,
        feedback,
        date: new Date().toISOString(),
        sessionId: generateSessionId()
    };
    
    qualityRatings.push(qualityRating);
    hasRatedQuality = true;
    
    // Save to localStorage
    localStorage.setItem('beautaQualityRatings', JSON.stringify(qualityRatings));
    localStorage.setItem('beautaHasRatedQuality', 'true');
    
    // Close modal
    closeQualityRatingModal();
    
    // Show success message
    showNotification('Thank you for your feedback! We\'ll use it to improve our recommendations.', 'success');
    
    // Update UI to show rating has been completed
    updateQualityRatingUI();
}

function skipQualityRating() {
    hasRatedQuality = true;
    localStorage.setItem('beautaHasRatedQuality', 'true');
    closeQualityRatingModal();
    updateQualityRatingUI();
    showNotification('Rating skipped. You can always rate us later!', 'info');
}

function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function updateQualityRatingUI() {
    const rateBtn = document.getElementById('rateRecommendationsBtn');
    if (rateBtn) {
        if (hasRatedQuality) {
            rateBtn.innerHTML = '<i class="fas fa-check-circle"></i> Thank You for Rating!';
            rateBtn.classList.add('rated');
            rateBtn.disabled = true;
        }
    }
}

function getQualityRatingStats() {
    if (qualityRatings.length === 0) return null;
    
    const stats = {
        totalRatings: qualityRatings.length,
        averageOverall: 0,
        averageRelevance: 0,
        averageBudget: 0,
        recommendPercentage: 0,
        recentRatings: qualityRatings.slice(-5) // Last 5 ratings
    };
    
    // Calculate averages
    stats.averageOverall = Math.round((qualityRatings.reduce((sum, r) => sum + r.overallQuality, 0) / qualityRatings.length) * 10) / 10;
    stats.averageRelevance = Math.round((qualityRatings.reduce((sum, r) => sum + r.productRelevance, 0) / qualityRatings.length) * 10) / 10;
    stats.averageBudget = Math.round((qualityRatings.reduce((sum, r) => sum + r.budgetFit, 0) / qualityRatings.length) * 10) / 10;
    
    // Calculate recommendation percentage
    const recommendCount = qualityRatings.filter(r => r.recommendToOthers === 'yes').length;
    stats.recommendPercentage = Math.round((recommendCount / qualityRatings.length) * 100);
    
    return stats;
}

// Virtual Try-On Feature
class VirtualTryOn {
    constructor() {
        this.canvas = document.getElementById('previewCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.originalImage = null;
        this.currentLook = {
            foundation: null,
            eyeshadow: null,
            lipstick: null,
            blush: null
        };
        this.faceData = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupDragAndDrop();
    }

    setupEventListeners() {
        // Photo upload
        const photoInput = document.getElementById('photoInput');
        photoInput.addEventListener('change', (e) => this.handlePhotoUpload(e));

        // Makeup options
        document.querySelectorAll('.makeup-option').forEach(option => {
            option.addEventListener('click', (e) => this.handleMakeupSelection(e));
        });

        // Reset and save buttons
        document.getElementById('resetMakeup').addEventListener('click', () => this.resetMakeup());
        document.getElementById('saveLook').addEventListener('click', () => this.saveLook());
    }

    setupDragAndDrop() {
        const uploadBox = document.getElementById('uploadBox');
        
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = 'var(--primary-color)';
            uploadBox.style.transform = 'translateY(-2px)';
        });

        uploadBox.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = 'var(--accent-color)';
            uploadBox.style.transform = 'translateY(0)';
        });

        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadBox.style.borderColor = 'var(--accent-color)';
            uploadBox.style.transform = 'translateY(0)';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.loadImage(files[0]);
            }
        });
    }

    handlePhotoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.loadImage(file);
        }
    }

    loadImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.originalImage = img;
                this.displayPhoto(img);
                this.detectFace(img);
                this.renderMakeup();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    displayPhoto(img) {
        const uploadBox = document.getElementById('uploadBox');
        const photoPreview = document.getElementById('photoPreview');
        const previewImage = document.getElementById('previewImage');
        const previewOverlay = document.getElementById('previewOverlay');

        uploadBox.style.display = 'none';
        photoPreview.style.display = 'block';
        previewImage.src = img.src;
        previewOverlay.style.display = 'none';

        // Resize canvas to fit image
        const maxWidth = 400;
        const maxHeight = 500;
        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
        
        this.canvas.width = img.width * ratio;
        this.canvas.height = img.height * ratio;
        
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    }

    detectFace(img) {
        // Simulate face detection with basic proportions
        // In a real app, you'd use a face detection API
        this.faceData = {
            eyes: {
                left: { x: img.width * 0.35, y: img.height * 0.4, width: img.width * 0.1, height: img.height * 0.05 },
                right: { x: img.width * 0.55, y: img.height * 0.4, width: img.width * 0.1, height: img.height * 0.05 }
            },
            lips: { x: img.width * 0.4, y: img.height * 0.7, width: img.width * 0.2, height: img.height * 0.08 },
            cheeks: {
                left: { x: img.width * 0.25, y: img.height * 0.5, width: img.width * 0.15, height: img.height * 0.1 },
                right: { x: img.width * 0.6, y: img.height * 0.5, width: img.width * 0.15, height: img.height * 0.1 }
            },
            face: { x: img.width * 0.1, y: img.height * 0.2, width: img.width * 0.8, height: img.height * 0.6 }
        };
    }

    handleMakeupSelection(event) {
        const option = event.currentTarget;
        const category = option.dataset.category;
        const look = option.dataset.look;

        // Remove active class from other options in same category
        if (category) {
            document.querySelectorAll(`[data-category="${category}"]`).forEach(opt => {
                opt.classList.remove('active');
            });
        } else {
            // Complete look
            document.querySelectorAll('.complete-look').forEach(opt => {
                opt.classList.remove('active');
            });
        }

        option.classList.add('active');

        if (category) {
            this.currentLook[category] = look;
        } else {
            // Apply complete look
            this.applyCompleteLook(look);
        }

        this.renderMakeup();
        this.updateLookDetails();
    }

    applyCompleteLook(look) {
        const looks = {
            everyday: { foundation: 'natural', eyeshadow: 'natural', lipstick: 'nude', blush: 'peach' },
            glam: { foundation: 'full-coverage', eyeshadow: 'smokey', lipstick: 'red', blush: 'pink' },
            natural: { foundation: 'dewy', eyeshadow: 'natural', lipstick: 'nude', blush: 'peach' }
        };

        this.currentLook = looks[look];
        
        // Update button states
        Object.entries(this.currentLook).forEach(([category, value]) => {
            const button = document.querySelector(`[data-category="${category}"][data-look="${value}"]`);
            if (button) {
                document.querySelectorAll(`[data-category="${category}"]`).forEach(opt => {
                    opt.classList.remove('active');
                });
                button.classList.add('active');
            }
        });
    }

    renderMakeup() {
        if (!this.originalImage || !this.faceData) return;

        // Clear canvas and redraw original image
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.originalImage, 0, 0, this.canvas.width, this.canvas.height);

        // Apply makeup overlays
        this.applyFoundation();
        this.applyEyeshadow();
        this.applyLipstick();
        this.applyBlush();
    }

    applyFoundation() {
        if (!this.currentLook.foundation) return;

        const face = this.faceData.face;
        const colors = {
            'natural': 'rgba(255, 218, 185, 0.3)',
            'full-coverage': 'rgba(255, 228, 196, 0.5)',
            'dewy': 'rgba(255, 248, 220, 0.4)'
        };

        this.ctx.fillStyle = colors[this.currentLook.foundation];
        this.ctx.fillRect(face.x, face.y, face.width, face.height);
    }

    applyEyeshadow() {
        if (!this.currentLook.eyeshadow) return;

        const eyes = this.faceData.eyes;
        const colors = {
            'natural': 'rgba(139, 69, 19, 0.4)',
            'smokey': 'rgba(44, 62, 80, 0.6)',
            'colorful': 'rgba(231, 76, 60, 0.5)'
        };

        this.ctx.fillStyle = colors[this.currentLook.eyeshadow];
        
        // Apply to both eyes
        Object.values(eyes).forEach(eye => {
            this.ctx.beginPath();
            this.ctx.ellipse(eye.x + eye.width/2, eye.y + eye.height/2, eye.width/2, eye.height/2, 0, 0, 2 * Math.PI);
            this.ctx.fill();
        });
    }

    applyLipstick() {
        if (!this.currentLook.lipstick) return;

        const lips = this.faceData.lips;
        const colors = {
            'nude': 'rgba(210, 180, 140, 0.6)',
            'red': 'rgba(231, 76, 60, 0.7)',
            'pink': 'rgba(233, 30, 99, 0.6)'
        };

        this.ctx.fillStyle = colors[this.currentLook.lipstick];
        this.ctx.fillRect(lips.x, lips.y, lips.width, lips.height);
    }

    applyBlush() {
        if (!this.currentLook.blush) return;

        const cheeks = this.faceData.cheeks;
        const colors = {
            'peach': 'rgba(255, 179, 71, 0.4)',
            'pink': 'rgba(255, 105, 180, 0.4)',
            'bronze': 'rgba(205, 133, 63, 0.4)'
        };

        this.ctx.fillStyle = colors[this.currentLook.blush];
        
        // Apply to both cheeks
        Object.values(cheeks).forEach(cheek => {
            this.ctx.beginPath();
            this.ctx.arc(cheek.x + cheek.width/2, cheek.y + cheek.height/2, cheek.width/2, 0, 2 * Math.PI);
            this.ctx.fill();
        });
    }

    updateLookDetails() {
        const lookDetails = document.getElementById('lookDetails');
        const lookItems = document.getElementById('lookItems');
        
        const activeItems = Object.entries(this.currentLook).filter(([category, value]) => value);
        
        if (activeItems.length === 0) {
            lookDetails.style.display = 'none';
            return;
        }

        lookItems.innerHTML = '';
        activeItems.forEach(([category, value]) => {
            const item = document.createElement('div');
            item.className = 'look-item';
            item.innerHTML = `
                <span class="item-name">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                <span class="item-value">${value.replace('-', ' ')}</span>
            `;
            lookItems.appendChild(item);
        });

        lookDetails.style.display = 'block';
    }

    resetMakeup() {
        this.currentLook = {
            foundation: null,
            eyeshadow: null,
            lipstick: null,
            blush: null
        };

        // Remove active classes
        document.querySelectorAll('.makeup-option').forEach(option => {
            option.classList.remove('active');
        });

        this.renderMakeup();
        this.updateLookDetails();
    }

    saveLook() {
        if (!this.originalImage) {
            alert('Please upload a photo first!');
            return;
        }

        // Create download link
        const link = document.createElement('a');
        link.download = 'beauta-virtual-look.png';
        link.href = this.canvas.toDataURL();
        link.click();
    }
}

// Initialize Virtual Try-On when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functionality
    setupFilters();
    
    // Initialize Virtual Try-On
    new VirtualTryOn();
    
    // Initialize Review System
    setupReviewSystem();
});

function setupReviewSystem() {
    // Review modal event listeners
    document.getElementById('closeReviewModal').addEventListener('click', closeReviewModal);
    document.getElementById('cancelReview').addEventListener('click', closeReviewModal);
    document.getElementById('reviewForm').addEventListener('submit', submitReview);
    
    // Close modal when clicking outside
    document.getElementById('reviewModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeReviewModal();
        }
    });
    
    // Star rating interaction
    document.querySelectorAll('.star-rating label').forEach((label, index) => {
        label.addEventListener('click', function() {
            const stars = document.querySelectorAll('.star-rating label');
            const rating = 5 - index;
            
            // Update visual state
            stars.forEach((star, starIndex) => {
                const starValue = 5 - starIndex;
                if (starValue <= rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        });
    });
    
    // Quality Rating System Setup
    setupQualityRatingSystem();
}

function setupQualityRatingSystem() {
    // Quality rating modal event listeners
    document.getElementById('closeQualityModal').addEventListener('click', closeQualityRatingModal);
    document.getElementById('skipQualityRating').addEventListener('click', skipQualityRating);
    document.getElementById('qualityRatingForm').addEventListener('submit', submitQualityRating);
    document.getElementById('rateRecommendationsBtn').addEventListener('click', openQualityRatingModal);
    
    // Close quality modal when clicking outside
    document.getElementById('qualityRatingModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeQualityRatingModal();
        }
    });
    
    // Quality rating star interaction
    document.querySelectorAll('.quality-rating label').forEach((label, index) => {
        label.addEventListener('click', function() {
            const starGroup = this.closest('.star-rating');
            const stars = starGroup.querySelectorAll('label');
            const rating = 5 - index;
            
            // Update visual state for this specific rating group
            stars.forEach((star, starIndex) => {
                const starValue = 5 - starIndex;
                if (starValue <= rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        });
    });
    
    // Update UI based on previous rating status
    updateQualityRatingUI();
}