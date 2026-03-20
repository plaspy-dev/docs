---
slug: /topshine/tlv01/configuration
id: tlv01-configuration
sidebar_label: Configuration
title: TopShine - TLV01 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine TLV01 GPS tracker setup with Plaspy including server settings and SMS commands
keywords:
  - TopShine TLV01 configuration
  - TopShine TLV01 setup
  - TopShine TLV01 server configuration
  - TopShine GPS tracker Plaspy
  - TLV01 SMS configuration
  - TLV01 APN settings
  - TLV01 GPRS setup
  - TopShine tracker documentation
  - fleet tracking TopShine TLV01
  - TLV01 immobilizer setup
---

# TopShine - TLV01 Configuration

This page covers the public configuration context for using the TopShine TLV01 Mini Hide GPS Tracker with the Plaspy platform. It summarizes the practical settings and publicly shared SMS commands used to prepare the device for GPRS reporting to Plaspy, and references the Plaspy server endpoint that the tracker must report to for real-time visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by TLV01 firmware, hardware revision, installation type, and vendor tools; this guide combines the TLV01 public SMS commands with Plaspy server details to help installers and fleet managers complete a standard integration.

## Configuration Overview

This configuration process prepares the TLV01 to report location and event data to Plaspy over GSM/GPRS or to fall back to SMS where supported. The public commands and settings below focus on setting the device identity, APN credentials, the GPRS server address and port, and enabling GPRS reporting so the tracker becomes visible in Plaspy.

- Configure the TLV01 APN and optional APN credentials so the device can establish GPRS data.
- Point the device to the Plaspy server endpoint so telemetry is delivered to the platform.
- Choose the transport (UDP or TCP) if the device requires a transport selection and set the common port used by Plaspy.
- Validate device identity and reporting interval so Plaspy can match telemetry to the correct tracker record.
- Verify connectivity from the device to Plaspy and confirm the device appears in the Plaspy dashboard.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note: Plaspy uses the same port 8888 for all devices supported on the platform and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A charged or powered TLV01 unit with access to its wiring or installer interface.
- A valid SIM card provisioned for GPRS/data and SMS as required by the tracker and APN.
- The device IMEI number available (used when setting device identity).
- Access to the official TopShine configuration method or SMS commands for the TLV01.
- APN, APN username, and APN password for the mobile operator serving the SIM.
- A way to send SMS commands to the device (if using SMS-based configuration).

## How This Tracker Connects to Plaspy

The TLV01 connects to Plaspy primarily by sending location and event data over GSM/GPRS to the configured Plaspy server endpoint at d.plaspy.com (54.85.159.138) on port 8888. SMS remains available for command-based configuration and fallback where enabled. Once configured, Plaspy ingests the incoming telemetry so the device is visible on maps, alerts are generated, and remote controls (such as immobilizer actions) can be managed.

- The TLV01 reports position and events to the shared Plaspy server endpoint and port.
- Plaspy receives telemetry and automatically determines the tracker protocol for correct parsing.
- Alarms and events from the tracker (for example geo-fence, tow, or overspeed) are forwarded to Plaspy for notification.
- The device can be controlled remotely through Plaspy features that rely on the tracker reporting to the platform.
- SMS is supported for configuration and can be used to query device IMEI or change settings where required.

## Common Configuration Workflow

1. Access the official TopShine TLV01 configuration method or documentation to confirm the correct SMS command format or tool for your firmware.
2. Prepare APN credentials for the SIM and have the TLV01 IMEI ready for ID configuration.
3. Enter the Plaspy server address by supplying either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
4. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
5. If the device requires a transport selection, choose UDP or TCP according to installer preference; Plaspy will auto detect protocol.
6. Apply or save the configuration and restart the device if the tracker or firmware requires a reboot for changes to take effect.
7. Validate that the TLV01 reports to Plaspy and appears in the platform mapping and telemetry, and confirm alarms or periodic reports are received.

## Example Configuration Commands

The TLV01 supports SMS-based configuration. The following public SMS commands are supplied in the TLV01 documentation. The device default password used in these examples is 000000. Replace placeholders such as IMEI, [apn], [apnu], and [apnp] with your device values.

- Optional initial factory reset (use only if you need to restore factory defaults):
```text
W000000,990,099###
```

- Set the device ID (use the first 14 digits from the IMEI as indicated by the manufacturer):
```text
W000000,010,<first 14 digits of IMEI>
```
Note: The TLV01 reference indicates using the 14 first digits from IMEI for the device ID. Keep the full IMEI handy for platform mapping.

- Set the operator APN (use [apn] and optionally [apnu] and [apnp] for username and password):
```text
W000000,011,[apn]{{apnu ? ',' + [apnu] : ''}}{{apnp ? ',' + [apnp] : ''}}
```
Explanation: [apn] is the mobile operator APN. [apnu] and [apnp] are optional APN username and password placeholders. Send a comma separated string with APN then username then password if your carrier requires them.

- Set the GPRS server to Plaspy using the provided server IP and port:
```text
W000000,012,54.85.159.138,8888
```

- Switch the device to GPRS reporting mode (command sets GPRS mode; value 2 commonly denotes GPRS on many TopShine devices):
```text
W000000,013,2
```

- Set the update interval (example uses value 6 as provided in public configuration):
```text
W000000,014,6
```

- Verify device IMEI (request IMEI from device via SMS):
```text
W000000,601
```

Important: Preserve the leading device password (default 000000) when sending commands. Replace the password if you have changed it. If a manufacturer or firmware variant uses a slightly different command syntax, follow the official TopShine documentation.

## Configuration Notes

- Firmware and regional variants can change command syntax and behavior; always confirm commands against the unit's current firmware documentation.
- The TLV01 supports SMS-based configuration as shown above, which is useful for installers without direct access to a configuration tool.
- Choose TCP or UDP based on installer preference and network conditions; Plaspy accepts either and auto detects the protocol.
- Plaspy uses a single port (8888) for all devices; point the device to d.plaspy.com or 54.85.159.138 on port 8888 to deliver telemetry.
- Ensure APN credentials are entered correctly; missing or incorrect APN settings will prevent GPRS connectivity.

## Why Use Plaspy with This Configuration

Using the TLV01 with Plaspy provides a compact, low-profile tracking solution that integrates GPRS and SMS reporting into a single platform for fleet and asset monitoring. When configured to report to d.plaspy.com (54.85.159.138) on port 8888, the TLV01 supplies position and alarm events that Plaspy ingests and presents for real-time monitoring, historical playback, and remote immobilizer control where supported.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest TLV01 device specific configuration methods, firmware notes, and manufacturer details verify information on the TopShine website https://www.gztopshine.com/.
