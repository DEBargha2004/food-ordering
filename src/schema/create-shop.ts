import z from "zod";

const documentSchema = z.object({
  path: z.string(),
});

export const createShopSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  gstin: z.string().length(15, { error: "Invalid GST Number" }),
  address: z.object({
    street: z.string().min(4),
    city: z.string().min(3),
    state: z.string().min(3),
    zipCode: z.string().regex(/^\\d{6}$/),
    coordinates: z
      .object({
        latitude: z.coerce.number<number>(),
        longitude: z.coerce.number<number>(),
      })
      .optional(),
  }),
  documents: z.object({
    pan: documentSchema,
    fssai: documentSchema,
    gst: documentSchema,
    trade: documentSchema,
  }),
  contact: z.object({
    phone: z
      .string()
      .regex(/^\\d{10}$/)
      .optional(),
    email: z.email().optional(),
    branding: z.object({
      logo: z.string().optional(),
    }),
    operationalDetails: z.object({
      timing: z.object({
        opening: z.string(),
        closing: z.string(),
      }),
      isDeliveryAvailable: z.boolean(),
    }),
  }),
});

export type TCreateShopSchema = z.infer<typeof createShopSchema>;
type TDocDefaultValue = z.infer<typeof documentSchema>;

const defaultValueDoc: TDocDefaultValue = { path: "" };
export const defaultValues = (): TCreateShopSchema => ({
  name: "",
  description: "",
  gstin: "",
  documents: {
    pan: defaultValueDoc,
    fssai: defaultValueDoc,
    gst: defaultValueDoc,
    trade: defaultValueDoc,
  },
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  },

  contact: {
    phone: "",
    email: "",
    branding: {
      logo: "",
    },
    operationalDetails: {
      timing: {
        opening: "09:00",
        closing: "21:00",
      },
      isDeliveryAvailable: true,
    },
  },
});
