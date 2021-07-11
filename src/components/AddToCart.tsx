import React from "react";

function withAddToCart<OriginalProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: OriginalProps) => {
    return <ChildComponent {...props} />;
  };

  return AddToCartHOC;
}
