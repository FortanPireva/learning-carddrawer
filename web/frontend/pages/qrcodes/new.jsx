import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { QRCodeForm } from "../../components";

export default function ManageCode() {
  const breadcrumbs = [{ contents: "QR Codes", url: "/" }];

  return (
    <Page>
      <TitleBar
        title="Create new QR Code"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <QRCodeForm />
    </Page>
  );
}
