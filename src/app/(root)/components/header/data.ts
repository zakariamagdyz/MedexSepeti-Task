const NAV_ITEM = {
  restorative: "Restorative",
  endodontics: "Endodontics",
  prosthetic: "Prosthetic",
  bleaching: "Bleaching",
  "dental-consumables": "Dental consumables",
  equipment: "Equipment",
  orthodontics: "Orthodontics",
  medical: "Medical",
};

export type NavItem = keyof typeof NAV_ITEM;

export const navLinks = Object.entries(NAV_ITEM).map(([key, value]) => ({
  key: key as NavItem,
  href: `/${key}`,
  label: value,
}));

export const MEGA_MENU_MAPPING = {
  restorative: {
    sections: [
      {
        label: "Composite",
        links: [
          { label: "Flowable Composite", href: "/flowable-composite" },
          { label: "Universal Composite", href: "/universal-composite" },
          { label: "Posterior Composites", href: "/posterior-composites" },
          { label: "Composite Lacquer", href: "/composite-lacquer" },
          { label: "Composite Kits", href: "/composite-kits" },
          { label: "Anterior Composites", href: "/anterior-composites" },
          { label: "Aesthetic Composites", href: "/aesthetic-composites" },
        ],
      },
      {
        label: "Composite Instruments",
        links: [
          { label: "Composite Gun", href: "/composite-gun" },
          { label: "Other Composites", href: "/other-composites" },
        ],
      },
      {
        label: "Other Products",
        links: [
          { label: "Matrix Materials & Wedges", href: "/matrix-materials-wedges" },
          { label: "Pin, Fiber, Pivo & Posts", href: "/pin-fiber-pivo-posts" },
          { label: "Core & Base Materials", href: "/core-base-materials" },
          { label: "Dentin Pins", href: "/dentin-pins" },
          {
            label: "Beam Filler & Polymerization Devices",
            href: "/beam-filler-polymerization-devices",
          },
        ],
      },

      {
        label: "Bonds And Acids",
        links: [
          { label: "Bonding Brush & Applicators", href: "/bonding-brush-applicators" },
          { label: "Bonding", href: "/bonding" },
          { label: "Phosphoric Acid & Blue Acids", href: "/phosphoric-acid-blue-acids" },
          { label: "Porcelain Acid & Silane", href: "/porcelain-acid-silane" },
        ],
      },
      {
        label: "Amalgam",
        links: [
          { label: "Amalgam Instruments", href: "/amalgam-instruments" },
          { label: "Amalgams", href: "/amalgams" },
        ],
      },
      {
        label: "Equipment",
        links: [{ label: "Dental Led Lamp", href: "/dental-led-lamp" }],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/aAVgyPxRpS4qPD3LR1F1BCyypZu85Fts1ZgGxKAM.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/8cPfXm6QHUExvfQw5V9RTae9ncGJL7bdyFsoJiZ6.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/aH9Og1HTB70NQWGAJTpBNoRDEhV0p4awhhGKJvNp.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/dC9sOCbSdwLMHsZS0awEyLO8v66x1ueb6qDwzeDi.webp",
    ],
  },

  endodontics: {
    sections: [
      {
        label: "Cihazlar",
        links: [
          { label: "Endomotors", href: "/endomotors" },
          { label: "Apex Locators", href: "/apex-locators" },
          { label: "Gutta Percha Cutter", href: "/gutta-percha-cutter" },
        ],
      },
      {
        label: "Instruments",
        links: [
          { label: "Rubberdam Kit", href: "/rubberdam-kit" },
          { label: "Spreader & Plugger", href: "/spreader-plugger" },
          { label: "Excavator", href: "/excavator" },
        ],
      },
      {
        label: "Tedavi",
        links: [
          { label: "Calcium Hydroxide", href: "/calcium-hydroxide" },
          { label: "Temporary Cements", href: "/temporary-cements" },
          { label: "Endo Box", href: "/endo-box" },
          { label: "Root Canal Sealer", href: "/root-canal-sealer" },
          { label: "Canal Disinfection", href: "/canal-disinfection" },
        ],
      },
      {
        label: "Rotary Files",
        links: [
          { label: "Gates Glidden", href: "/gates-glidden" },
          { label: "NiTi Rotary Eğesi", href: "/niti-rotary-egesi" },
          { label: "NiTi Gold Eğesi", href: "/niti-gold-egesi" },
          { label: "NiTi Blue Eğesi", href: "/niti-blue-egesi" },
          { label: "Lentülo", href: "/lentülo" },
        ],
      },
      {
        label: "Gutta Perka/Paper Point",
        links: [
          { label: "Canal Irrigation Needles", href: "/canal-irrigation-needles" },
          { label: "Paper Point", href: "/paper-point" },
          { label: "Gutta Percha", href: "/gutta-percha" },
          { label: "Gutta Çözücü", href: "/gutta-cozucu" },
        ],
      },
      {
        label: "Manuel File",
        links: [
          { label: "Hand Files", href: "/hand-files" },
          { label: "Reamers", href: "/reamers" },
          { label: "Tırnıf", href: "/tirnif" },
        ],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/JIkPgt87NAroJtIxdY1jOgpkBr4BTWX0gYyCAcG1.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/m36OP2gCI6anhhpNu2ujUU3FZB2jWK3s1ZZGP1TX.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/Ifmk0fj2HjDj1aCpHMQLh3s8wmvHlAWAIeS8JZy4.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/pIoMNNSTxxA92yBQGuxH14ZVw3Xx0DOOAZ5LRSlF.webp",
    ],
  },
  prosthetic: {
    sections: [
      {
        label: "Yardımcı Ürünler",
        links: [
          { label: "Retraction", href: "/retraction" },
          { label: "Articulation Papers", href: "/articulation-papers" },
          { label: "Temporary Crown Materials", href: "/temporary-crown-materials" },
          { label: "Dental Acrylics", href: "/dental-acrylics" },
          { label: "Modelleme Mumu", href: "/modelleme-mumu" },
          { label: "Tooth Color Scale", href: "/tooth-color-scale" },
        ],
      },
      {
        label: "Cements",
        links: [
          { label: "Adhesive Cement", href: "/adhesive-cement" },
          { label: "Glass-Ionomer Cements", href: "/glass-ionomer-cements" },
          { label: "Other Cements", href: "/other-cements" },
          { label: "Cement Spatula", href: "/cement-spatula" },
          { label: "Temporary Cement", href: "/temporary-cement" },
          { label: "Rezin Cement", href: "/rezin-cement" },
          { label: "Eugenol Cement", href: "/eugenol-cement" },
        ],
      },
      {
        label: "Instruments",
        links: [
          { label: "Crown Removal", href: "/crown-removal" },
          { label: "Bol Bowl", href: "/bol-bowl" },
          { label: "Impression Material Holder", href: "/impression-material-holder" },
          { label: "Mixing Spatula", href: "/mixing-spatula" },
        ],
      },
      {
        label: "Impression Materials",
        links: [
          { label: "C Type Silicones", href: "/c-type-silicones" },
          { label: "Alginates", href: "/alginates" },
          { label: "Mixing Tips", href: "/mixing-tips" },
          { label: "A Type Silicon", href: "/a-type-silicon" },
          { label: "Other Measuring Materials", href: "/other-measuring-materials" },
          { label: "Kapanış Silikonları", href: "/kapanis-silikonlari" },
        ],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/sfPbwjbnScVq550YIkqLteaKuFgONbMojwD04EwP.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/yE08f8tT6zlrxrHK2xML3xqVztfEcADH9ssfdy1G.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/SLLl2oKpKJIv1vQYigal4UyYxI9BaS1128HdNXlG.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/qEKxDplfyYmGa0oQ9ts1g1eAWTIu9sPzbfu3xznr.webp",
    ],
  },
  bleaching: {
    sections: [
      {
        label: "Whitening Materials",
        links: [
          { label: "Desensibilize", href: "/desensibilize" },
          { label: "House Type Whitening", href: "/house-type-whitening" },
          { label: "Office Type Whitening", href: "/office-type-whitening" },
          { label: "Devital Whitening", href: "/devital-whitening" },
          { label: "Gum Barriers", href: "/gum-barriers" },
          { label: "Whitening Toothpastes", href: "/whitening-toothpastes" },
          { label: "Fluorine Gels", href: "/fluorine-gels" },
        ],
      },
      {
        label: "Prophylaxis Materials",
        links: [
          { label: "Polisaj Detertaj", href: "/polisaj-detertaj" },
          { label: "Prophylaxis Paste", href: "/prophylaxis-paste" },
          { label: "Prophylaxis Powder", href: "/prophylaxis-powder" },
        ],
      },
      {
        label: "Bleaching Equipments",
        links: [{ label: "Bleaching Devices", href: "/bleaching-devices" }],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/eqKCgNdXgjnmHt7KW8kUoxmBuo3OwBfzH8R8vspn.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/ZAIH8mH08fB6EyyZsqK3NdHaknraJcaHNXYRpGlC.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/GIbrGbcqvXsKYSkd74WsQ0MPJsWudOM3vJXxJ687.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/8MpbWWs3xpIPnLr6bB5zvw12JMb0ROv3Da7HdhC0.webp",
    ],
  },
  "dental-consumables": {
    sections: [
      {
        label: "Clinical Consumables",
        links: [
          { label: "Disposable Air & Water Tips", href: "/disposable-air-water-tips" },
          { label: "Sutures & Needles", href: "/sutures-needles" },
          { label: "Enjektörler", href: "/enjektörler" },
          { label: "Tükürük Emici/Suction", href: "/tükürük-emici-suction" },
          { label: "Bleeding Stopper & Sponges", href: "/bleeding-stopper-sponges" },
          { label: "Compress Gel", href: "/compress-gel" },
          { label: "Table Cover", href: "/table-cover" },
          { label: "Patient Gown", href: "/patient-gown" },
          { label: "Roll Cotton", href: "/roll-cotton" },
          { label: "Dental Açılar", href: "/dental-açılar" },
          { label: "Unit Cover", href: "/unit-cover" },
        ],
      },
      {
        label: "Diğer Sarf Malzemeleri",
        links: [
          { label: "Overshoes", href: "/overshoes" },
          { label: "General Use", href: "/general-use" },
          { label: "Glove", href: "/glove" },
          { label: "Mask", href: "/mask" },
          { label: "Maintenance Oil", href: "/maintenance-oil" },
          { label: "Barriyer Film", href: "/barriyer-film" },
          { label: "Tetiyer Başlıkları", href: "/tetiyer-başlıkları" },
          { label: "Medical Waste Bin/Bag", href: "/medical-waste-bin-bag" },
        ],
      },
      {
        label: "Disinfection",
        links: [
          { label: "Hand Sanitizers", href: "/hand-sanitizers" },
          { label: "Surface Disinfectant", href: "/surface-disinfectant" },
          { label: "Bur Disinfectant", href: "/bur-disinfectant" },
          { label: "Tool Disinfectant", href: "/tool-disinfectant" },
          { label: "Disinfectant Wipes", href: "/disinfectant-wipes" },
          { label: "Other Disinfection Products", href: "/other-disinfection-products" },
          { label: "Mouth Disinfectant", href: "/mouth-disinfectant" },
        ],
      },
      {
        label: "Dental Clothing",
        links: [
          { label: "Medical Slippers", href: "/medical-slippers" },
          { label: "Medical Gown", href: "/medical-gown" },
          { label: "Scrubs", href: "/scrubs" },
        ],
      },
      {
        label: "Consumables & Clothing",
        links: [
          { label: "Consumables For Care & Diagnosis", href: "/consumables-for-care-diagnosis" },
          { label: "Medical Clothing", href: "/medical-clothing" },
        ],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/e5hJ9JnqzheR9AN9ruXNY2d67oVIiZqTJtPyN8Xd.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/LdWMnE9t3zMdHLJ5EmXzaNzvZRPPtwPFNyRiUN42.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/gbQEB80tbdnZVgHV4Xe7DqHMCj3IMlf9FNFhSzMY.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/wrDNcXvWIGblFEoNJWinChx0pLV3JSCBf2DuMrJZ.webp",
    ],
  },
  equipment: {
    sections: [
      {
        label: "Dental Sterilization",
        links: [
          { label: "Sterilization Equipments", href: "/sterilization-equipments" },
          { label: "Otoklav Ekipmanları", href: "/otoklav-ekipmanları" },
          { label: "Otoklav Cihazları", href: "/otoklav-cihazları" },
        ],
      },
      {
        label: "Implant Materials",
        links: [
          { label: "Implant Mikromotors", href: "/implant-mikromotors" },
          { label: "Implant Cements", href: "/implant-cements" },
        ],
      },
      {
        label: "Clinic Interior",
        links: [
          { label: "Dental Units", href: "/dental-units" },
          { label: "Clinical Devices", href: "/clinical-devices" },
          { label: "Dental Clinic Cabinets", href: "/dental-clinic-cabinets" },
          { label: "Other Dental Equipment", href: "/other-dental-equipment" },
          { label: "Dental Accessories", href: "/dental-accessories" },
        ],
      },
      {
        label: "Dental Unit Accessory",
        links: [
          { label: "Dental Mikromotors", href: "/dental-mikromotors" },
          { label: "Dental Clinic Compressor", href: "/dental-clinic-compressor" },
          { label: "Binoculars", href: "/binoculars" },
          { label: "Dental Unit Equipments", href: "/dental-unit-equipments" },
        ],
      },
      {
        label: "Radiography",
        links: [
          { label: "Periapical X-Ray", href: "/periapical-x-ray" },
          { label: "RVG X-Ray Sensor", href: "/rvg-x-ray-sensor" },
          { label: "X-Ray Protection Equipment", href: "/x-ray-protection-equipment" },
          { label: "X-Ray Film Display", href: "/x-ray-film-display" },
        ],
      },
      {
        label: "Handpieces",
        links: [
          { label: "Surgical Instruments", href: "/surgical-instruments" },
          { label: "Periodontic Hand Tools", href: "/periodontic-hand-tools" },
          { label: "Diagnostic Equipment", href: "/diagnostic-equipment" },
          { label: "Measuring Instruments", href: "/measuring-instruments" },
          { label: "Dynamic Hand Tools", href: "/dynamic-hand-tools" },
        ],
      },
      {
        label: "Burs",
        links: [
          { label: "Diamond Burs", href: "/diamond-burs" },
          { label: "Tungsten & Carbide Burs", href: "/tungsten-carbide-burs" },
          { label: "Steel Burs", href: "/steel-burs" },
          { label: "Burr Boxes", href: "/burr-boxes" },
          { label: "Other Burs", href: "/other-burs" },
        ],
      },
      {
        label: "Accessories",
        links: [
          { label: "Clinic Accessories", href: "/clinic-accessories" },
          { label: "Aesthetic Accessories", href: "/aesthetic-accessories" },
          { label: "Accessories For Kids", href: "/accessories-for-kids" },
        ],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/djlL4v7xAGDTLSE1O8Cfl6WbhpaU3d1ZFZeUWhm1.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/ruyksKFf5MvdWulP5aZY57eKb9qmUt9SLL128Cro.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/wIAp8z6lefZ770nTqBGgHqHIMqwprYQC0XpcoaAk.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/reHvDPWt6f18DxY22GkIWBpFCbatO1Clajsqzua1.webp",
    ],
  },
  orthodontics: {
    sections: [
      {
        label: "Composite",
        links: [
          { label: "Flowable Composite", href: "/flowable-composite" },
          { label: "Universal Composite", href: "/universal-composite" },
          { label: "Posterior Composites", href: "/posterior-composites" },
          { label: "Composite Lacquer", href: "/composite-lacquer" },
          { label: "Composite Kits", href: "/composite-kits" },
          { label: "Anterior Composites", href: "/anterior-composites" },
          { label: "Aesthetic Composites", href: "/aesthetic-composites" },
        ],
      },
      {
        label: "Composite Instruments",
        links: [
          { label: "Composite Gun", href: "/composite-gun" },
          { label: "Other Composites", href: "/other-composites" },
        ],
      },
      {
        label: "Other Products",
        links: [
          { label: "Matrix Materials & Wedges", href: "/matrix-materials-wedges" },
          { label: "Pin, Fiber, Pivo & Posts", href: "/pin-fiber-pivo-posts" },
          { label: "Core & Base Materials", href: "/core-base-materials" },
          { label: "Dentin Pins", href: "/dentin-pins" },
          {
            label: "Beam Filler & Polymerization Devices",
            href: "/beam-filler-polymerization-devices",
          },
        ],
      },

      {
        label: "Bonds And Acids",
        links: [
          { label: "Bonding Brush & Applicators", href: "/bonding-brush-applicators" },
          { label: "Bonding", href: "/bonding" },
          { label: "Phosphoric Acid & Blue Acids", href: "/phosphoric-acid-blue-acids" },
          { label: "Porcelain Acid & Silane", href: "/porcelain-acid-silane" },
        ],
      },
      {
        label: "Amalgam",
        links: [
          { label: "Amalgam Instruments", href: "/amalgam-instruments" },
          { label: "Amalgams", href: "/amalgams" },
        ],
      },
      {
        label: "Equipment",
        links: [{ label: "Dental Led Lamp", href: "/dental-led-lamp" }],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/MvKkkfd3lbOUi9n1ZWGkOh8t1rkIj4NWFMqA1Ho3.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/ir4AD2TeUlid86EjXzF6FHIUYgGtE9jFsVMKU1R4.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/Hx1HOOzXbRHbAqOHPEfOtQNC2VhewO5DaW6lQQax.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/JRlDFX9pXk8XJKjaVO9WggNcIgckuVCbJtqrnQuO.webp",
    ],
  },
  medical: {
    sections: [
      {
        label: "Pharmacy & Personal Care",
        links: [
          { label: "Eyecare & Earcare", href: "/eyecare-earcare" },
          { label: "First Aid", href: "/first-aid" },
          { label: "Sexual Health", href: "/sexual-health" },
          { label: "Personel Care", href: "/personel-care" },
        ],
      },
      {
        label: "Specialities Products",
        links: [
          { label: "Primary Care", href: "/primary-care" },
          { label: "Podiatry, Dermatology", href: "/podiatry-dermatology" },
          { label: "Oncology", href: "/oncology" },
        ],
      },
      {
        label: "Medical Facilities",
        links: [
          { label: "Surgery Unit", href: "/surgery-unit" },
          { label: "Medical Technical Facilities", href: "/medical-technical-facilities" },
          { label: "Furniture & Logistics", href: "/furniture-logistics" },
        ],
      },
      {
        label: "Imaging & Lab",
        links: [
          { label: "Medical Imaging", href: "/medical-imaging" },
          { label: "Laboratory", href: "/laboratory" },
        ],
      },
      {
        label: "Rehabilitation & Wellness",
        links: [
          { label: "Rehabilitation", href: "/rehabilitation" },
          { label: "Wellness", href: "/wellness" },
        ],
      },
      {
        label: "Veterinary",
        links: [{ label: "General Veterinary Products", href: "/general-veterinary-products" }],
      },
    ],
    images: [
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/Hb0yhPAqJthugSrPdDzG8dONM1yONITd3AhjUnA6.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/cTe4dIxcP7pttMVmWWGwEYPgBAKbiOkuR52bcDiT.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/CxE1avsuJyAuc0sdAz6APiMxdjsIAnhoiPSdlw4d.webp",
      "https://admin.medexsepeti.com/graph/uploads/200x150/category_images/x5YyEiqqfNbi6CVwXTeRlmmXCTvXeyOQZteh5QJX.webp",
    ],
  },
};
