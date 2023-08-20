import {
  EuiI18n,
  EuiListGroup,
  EuiNotificationBadge,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { OpenBiblivreBibliographicRecord } from "../../types";
import { TabContentProps, TabDefinition } from "./types";

const DigitalMediaTab: TabDefinition = {
  order: 4,
  id: "media",
  name: (
    <EuiI18n
      token="cataloging.common.digital_files"
      default="Arquivos digitais"
    />
  ),
  append: (record: OpenBiblivreBibliographicRecord) => (
    <EuiNotificationBadge color="subdued">
      {record.attachments.length}
    </EuiNotificationBadge>
  ),
  content: ({ record, attachmentURL }: TabContentProps) => {
    if (record.attachments.length === 0) {
      return (
        <EuiTitle size="xxs">
          <EuiText>
            <EuiI18n
              token="cataloging.bibliographic.no_attachments"
              default=""
            />
          </EuiText>
        </EuiTitle>
      );
    }

    return (
      <EuiListGroup
        color="primary"
        listItems={record.attachments.map((attachment) => ({
          label: attachment.name,
          href: attachmentURL(attachment.uri),
          iconType: "download",
        }))}
      />
    );
  },
};

export default DigitalMediaTab;
