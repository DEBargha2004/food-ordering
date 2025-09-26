import SubForm from "../../sub-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TCreateShopSchema } from "@/schema/create-shop";
import { useFormContext, useWatch } from "react-hook-form";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import dynamic from "next/dynamic";
import { GeoLocation } from "./map";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function AddressInfo() {
  const { control, setValue } = useFormContext<TCreateShopSchema>();
  const coords =
    useWatch({
      control: control,
      name: "address.coordinates",
    }) ?? null;

  const handleChangePosition = (loc: GeoLocation) => {
    if (loc?.length === 2)
      setValue("address.coordinates", {
        latitude: loc[0],
        longitude: loc[1],
      });
    if (!loc) setValue("address.coordinates", undefined);
  };

  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Address</SubForm.Title>
        <SubForm.Description>
          Enter your shop's physical address
        </SubForm.Description>
      </SubForm.Header>
      <SubForm.Body className="grid">
        <FormField
          control={control}
          name="address.street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="address.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="address.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="address.zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />

        {/* <FormField
            control={control}
            name="address.coordinates.latitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitude</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="address.coordinates.longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitude</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        <div className="w-full aspect-video">
          <Map
            position={coords ? [coords.latitude, coords.longitude] : null}
            setPosition={handleChangePosition}
          />
        </div>
      </SubForm.Body>
    </SubForm>
  );
}
