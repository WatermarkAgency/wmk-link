import * as React from "react";
import { GtmDataLayer, ToGtmDataLayer } from ".";
import { useState } from "react";

declare global {
  interface Window {
    dataLayer: GtmDataLayer;
  }
}

export interface WmkButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  toGtmDataLayer?: ToGtmDataLayer;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  label?: string;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  type?: "button" | "reset" | "submit";
  value?: string;
  name?: string;
}

export const WmkButton = React.forwardRef<HTMLButtonElement, WmkButtonProps>(
  (
    {
      onClick,
      children,
      toGtmDataLayer,
      className,
      id,
      style,
      label,
      autofocus,
      disabled,
      form,
      formaction,
      type = "button",
      value,
      name
    },
    ref
  ) => {
    const [dataLayer, setDataLayer] = useState<GtmDataLayer>();
    React.useEffect(() => {
      const currentLayer = window && window.dataLayer;
      if (toGtmDataLayer && currentLayer) {
        setDataLayer(currentLayer);
      }
    }, [toGtmDataLayer]);
    return (
      <button
        name={name}
        type={type}
        formAction={formaction}
        form={form}
        disabled={disabled}
        className={className}
        onClick={
          toGtmDataLayer
            ? (e) => {
                dataLayer.push({
                  event: toGtmDataLayer.event,
                  ...toGtmDataLayer.params
                });
                onClick(e);
              }
            : onClick
        }
        ref={ref}
        style={style}
        id={id}
        title={label}
        aria-label={label}
        autoFocus={autofocus}
        value={value}>
        {children}
      </button>
    );
  }
);
