---
slug: /dct/syrus_obdii_cat1/configuration
id: syrus_obdii_cat1-configuration
sidebar_label: Configuration
title: DCT - SYRUS OBDII-CAT1 Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance for configuring the DCT SYRUS OBDII CAT1 for use with Plaspy including Syrus Desk script examples and server settings
keywords:
  - DCT SYRUS OBDII-CAT1 configuration
  - DCT OBDII Plaspy setup
  - Syrus OBDII Plaspy configuration
  - SYRUS OBDII CAT1 setup
  - vehicle tracking configuration
  - OBDII telematics configuration
  - Plaspy tracker configuration
  - OBDII dongle setup guide
  - Syrus Desk script
  - fleet GPS configuration
---

# DCT - SYRUS OBDII-CAT1 Configuration

This page documents the public configuration context for using the DCT SYRUS OBDII-CAT1 with the Plaspy platform. It focuses on the practical server settings, an example Syrus SB script suitable for Syrus Desk, and the workflow steps you can use to prepare the device to report to Plaspy for tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this page combines the public Plaspy configuration values with the Syrus Desk script example provided by the device vendor for practical guidance.

## Configuration Overview

The goal of configuration is to prepare the SYRUS OBDII-CAT1 to communicate reliably with Plaspy so vehicle location and OBD telemetry appear in your Plaspy workspace. The example Syrus SB script below demonstrates a common starting point for Syrus Desk based provisioning.

- Configure the device APN and optional APN credentials so the built in cellular modem can exchange data.
- Point the device to Plaspy server d.plaspy.com or the equivalent server IP so packets reach the platform.
- Set the common Plaspy port so the device uses the same endpoint as other supported trackers.
- Choose the transport protocol (UDP or TCP) if required by the device and save the configuration using Syrus Desk.
- Validate connectivity and confirm the device is visible in Plaspy after a successful reboot or session start.

## Plaspy Server Settings

- Server domain d.plaspy.com is the primary endpoint to use when configuring the tracker.
- Server IP 54.85.159.138 may be used in place of the domain when required by the provisioning tool.
- Port 8888 is the Plaspy port and is used by all devices supported by Plaspy.
- Transport support for UDP or TCP is available; select the transport your device or network prefers.
- Plaspy automatically detects the tracker protocol when the device connects so the platform can interpret incoming messages.

## Typical Requirements Before Setup

- Physical access to the vehicle OBDII port so the device can be inserted and powered by the vehicle.
- An active cellular SIM and data plan compatible with the device radio bands and the region of operation.
- Access to Syrus Desk or the official manufacturer provisioning tool to load a .tmf script or enter configuration commands.
- The Plaspy server settings listed above (d.plaspy.com or 54.85.159.138 and port 8888) available to copy into the device configuration.
- A Plaspy account or the appropriate platform credentials to verify the device appears and reports after setup.
- Basic knowledge of APN values from your mobile operator to populate the {{apn}}, {{apnu}}, and {{apnp}} placeholders if required.

## How This Tracker Connects to Plaspy

When provisioned, the SYRUS OBDII-CAT1 uses its cellular connection to forward GNSS location, OBD telemetry, and accelerometer events to the Plaspy network endpoint. Plaspy ingests those messages and maps them into device telemetry, event records, and location updates for fleet monitoring.

- The device is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Communications may use UDP or TCP depending on your selection and network conditions.
- Plaspy automatically detects the device protocol so messages are parsed and associated with the device record.
- Events such as time and distance reports or input triggered reports are forwarded to Plaspy for alerting and logging.
- Successful configuration makes the device visible in Plaspy for real time location, diagnostics, and historical reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as Syrus Desk and prepare a new .tmf script or session for the device.
2. Enter d.plaspy.com or 54.85.159.138 as the remote server address in the device configuration.
3. Set port 8888 as the destination port used by Plaspy across all supported devices.
4. Choose UDP or TCP if the device requires transport selection and the network supports it.
5. Configure the APN and optional APN user and password fields using your carrier details (use the {{apn}}, {{apnu}}, {{apnp}} placeholders where applicable).
6. Apply or save the configuration and upload the .tmf script to the device using Syrus Desk or the vendor tool.
7. Restart the device if required by the vendor tool or after saving configuration.
8. Validate that the device reports to Plaspy by confirming the device appears in your Plaspy account and sends expected telemetry.

## Example Configuration Commands

The manufacturer provides a Syrus SB script example that can be saved as a .tmf file and loaded with Syrus Desk. The script demonstrates deleting previous configuration, setting APN values, and pointing to the Plaspy server and port. Preserve the placeholders when you supply your carrier values.

- Save the following script as a new empty text file with a .tmf extension and load it into Syrus Desk:

```
# Syrus SB script
# Getting Started example

# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<

# configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<

# The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<

# A Destination Address holding the server destination
>SDA4;P00<

# Time-only Time And Distance signal definition
>STD80300<

# Event triggered by T&D signal
>SED37NV4;TD8+<

# Input report event
>SED05NV4;IP3+<

# end
```

- Explanation of key elements:
  - >SRT;CONFIG< and >SXADP**U< are used to delete or reset prior configuration entries and prepare the device for new settings. Treat the deletion as an optional initial reset step if you need to clear previous server entries.
  - >SRFA{{apn}}< sets the APN string. Replace {{apn}} with your carrier APN value.
  - >SRFL{{apnu}}< and >SRFP{{apnp}}< set APN username and APN password if required. If no credentials are needed, leave the placeholders blank or omit as your carrier specifies.
  - >SXADP0000d.plaspy.com;8888< points the device to the Plaspy server domain and the shared port 8888. You may substitute the server IP 54.85.159.138 if your provisioning tool requires an IP.
  - Event and signal lines such as >STD80300<, >SED37NV4;TD8+<, and >SED05NV4;IP3+< configure reporting triggers and definitions used by the device to send data into Plaspy.

## Configuration Notes

- Syrus Desk versions and device firmware may affect exact command syntax and the available configuration fields; always use the manufacturer's recommended tool for your device revision.
- Choose UDP or TCP based on network reliability and firewall policies; Plaspy accepts both transports and will detect the protocol automatically.
- Preserve and replace the {{apn}}, {{apnu}}, and {{apnp}} placeholders with values from your mobile operator when configuring cellular access.
- The sample script includes an initial delete of previous configuration entries; perform this reset only when you intend to clear existing server settings.
- Use the server domain d.plaspy.com where possible; substitute 54.85.159.138 only if the provisioning system requires a numeric address.

## Why Use Plaspy with This Configuration

Configuring the SYRUS OBDII-CAT1 to report to Plaspy provides a fast path to centralized vehicle visibility, telemetry collection, and event monitoring. The plug and play OBDII form factor combined with Plaspy ingestion allows fleet teams to capture location, OBD diagnostics, and driving events in a unified platform for route analysis, maintenance planning, and operational alerts.

To learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official DCT product pages at https://www.digitalcomtech.com/
